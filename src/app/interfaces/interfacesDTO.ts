export interface articleDTO {
  id: number;
  category: string;
  img: string;
  heading: string;
  content: string;
  publishDate: string;
  writer: string;
}
export interface userDTO {
  id:string,
  name:string,
  email:string,
  studentCardNumber:number
}
export interface scheduleDTO {
  date: string;
  classes: [{
    startTime: string;
    endTime: string;
    title: string;
    lecturer: string;
    place: string;
  }]
}