import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import moment from 'moment';
import { scheduleType } from '../interfaces/interfaces';
import { ScheduleService } from './schedule.service';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit, AfterViewInit {
  schedule: scheduleType[] | undefined
  isLoading = true
  classesBySelectedDate:
     {
        startTime: string;
        endTime: string;
        title: string;
        lecturer: string;
        place: string;
      }[]
    | null = null;

  @ViewChild('container') containerRef!: ElementRef;

  days: string[] = [];
  currentDate: string = moment(new Date()).format('DD-MM-YYYY');
  selectedDate: string = '';
  currentMonth: string = moment().format('MMMM YYYY');

  constructor( private scheduleService: ScheduleService) {
    moment.locale('pl');
    this.selectedDate = this.currentDate;
    const startDate = new Date(2023, 0, 1); // January is 0
    const endDate = new Date(2023, 11, 31); // December is 11

    while (startDate <= endDate) {
      this.days.push(moment(startDate).format('DD-MM-YYYY'));
      startDate.setDate(startDate.getDate() + 1);
    }
    setInterval(()=>{
      this.getData()  
    },600000)
  }
  ngOnInit(): void {
    this.getData()  
  }

  getData() {
    this.isLoading = true;
    this.scheduleService.getSchedule().subscribe(
      result => {
        this.schedule = result;
        this.isLoading = false
        this.findClassesSelectedByDate()
      }
    );
  }
    
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.scrollToCurrentDate();
    }, 0);
  }

  findClassesSelectedByDate() {
    let scheduleObjectByDate:scheduleType[]
      
    if(this.schedule){
       scheduleObjectByDate = this.schedule.filter(
      (day) => day.date === this.selectedDate
       
    );
     
  }else{
      scheduleObjectByDate =[]
    }
    
    if (scheduleObjectByDate.length > 0) {
       
      const classesByDate = scheduleObjectByDate[0].classes;
      if (classesByDate) {
       
        this.classesBySelectedDate = classesByDate;
      }
    } else {
      this.classesBySelectedDate = null;
    }
  }

  scrollToCurrentDate() {
    const container = this.containerRef.nativeElement;
    const currentDayElement = container.querySelector('.current');

    if (currentDayElement) {
      const scrollLeft =
        currentDayElement.offsetLeft -
        (container.offsetWidth / 2 - currentDayElement.offsetWidth / 2);
      container.scrollLeft = scrollLeft;
    }
  }

  scrollToSelectedDate() {
    const container = this.containerRef.nativeElement;
    const selectedDayElement = container.querySelector(
      `[data-date="${this.selectedDate}"]`
    );

    if (selectedDayElement) {
      const containerWidth = container.offsetWidth;
      const dayElementWidth = selectedDayElement.offsetWidth;
      const scrollLeft =
        selectedDayElement.offsetLeft +
        dayElementWidth / 2 -
        containerWidth / 2;

      const start = container.scrollLeft;
      const end = scrollLeft;
      const duration = 500; // Scroll duration in milliseconds

      const startTime = performance.now();

      function scroll(timestamp: number) {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        container.scrollLeft = start + (end - start) * progress;

        if (progress < 1) {
          requestAnimationFrame(scroll);
        }
      }

      requestAnimationFrame(scroll);
    }
  }
  // Handle click on a date to select it
  selectDate(date: string): void {
    this.selectedDate = date;
    this.findClassesSelectedByDate();
    this.scrollToSelectedDate();
    this.getData() 
  }

  onScroll(event: Event): void {
    const container = event.target as HTMLElement;
    const firstVisibleDateElement = this.getFirstVisibleDateElement(container);
    if (firstVisibleDateElement) {
      const firstVisibleDate =
        firstVisibleDateElement.getAttribute('data-date');
      if (firstVisibleDate) {
        const date = moment(firstVisibleDate, 'DD-MM-YYYY');
        this.currentMonth = date.format('MMMM YYYY');
      }
    }
  }

  // Helper function to get the first visible date element
  private getFirstVisibleDateElement(
    container: HTMLElement
  ): HTMLElement | null {
    const elements = container.querySelectorAll('.day');
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i] as HTMLElement;
      const rect = element.getBoundingClientRect();
      if (rect.right > 0) {
        return element;
      }
    }
    return null;
  }

  formatDay(day: string): string {
    if (!day) {
      return '';
    }

    const extractedDay = day.split('-')[0];
    return extractedDay.replace(/^0/, '');
  }

  getDayName(date: any) {
    const momentDate = moment(date, 'DD-MM-YYYY');
    return momentDate.format('dd');
  }

  isWeekend(date: string): boolean {
  const momentDate = moment(date, 'DD-MM-YYYY');
  const dayOfWeek = momentDate.day(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
  return dayOfWeek === 0 || dayOfWeek === 6; // Check if it's Sunday or Saturday
}
  backToCurrentDate() {
    this.scrollToCurrentDate();
    this.selectedDate = this.currentDate;
    this.findClassesSelectedByDate();
    this.getData() 
  }

}
