import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-class-evaluation-modal',
  templateUrl: './class-evaluation-modal.component.html',
  styleUrls: ['./class-evaluation-modal.component.scss'],
})
export class ClassEvaluationModalComponent  implements OnInit {

questions = [
  'Jak oceniasz ogólną jakość prowadzenia zajęć na uniwersytecie?',
  'Czy materiały dydaktyczne dostarczane na zajęciach są zrozumiałe i pomocne?',
  'Jak oceniasz interakcję z wykładowcami i innymi studentami podczas zajęć?',
  'Czy oferta przedmiotów jest zróżnicowana i odpowiada Twoim oczekiwaniom?',
  'Czy uczestnictwo w zajęciach przyczynia się do Twojego rozwoju zawodowego i osobistego?'
  ];

  stars = [1, 2, 3, 4, 5];
  hoveredValue = [0, 0, 0, 0, 0];
  ratings = [0, 0, 0, 0, 0];

  questionnaireForm!: FormGroup;

  constructor(private fb: FormBuilder, private modalCtrl:ModalController) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
  const formControls = this.questions.map((question, index) => {
    return this.fb.control(null, [Validators.required, this.ratingValidator]);
  });

  this.questionnaireForm = this.fb.group({
    ratings: this.fb.array(formControls),
  });
  }

  ratingValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    return value !== null && value !== 0 ? null : { 'required': true };
  }

  rate(questionIndex: number, value: number): void {
    this.ratings[questionIndex] = value;
    this.hoveredValue[questionIndex] = value;

    const formArray = this.questionnaireForm.get('ratings') as FormArray;
    formArray.controls[questionIndex].setValue(value);
  }

  submitForm(): void {
    if (this.questionnaireForm.valid) {
      // You can access the submitted ratings using this.questionnaireForm.value.ratings
      console.log('Submitted Ratings:', this.questionnaireForm.value.ratings);
      this.close()
    } else {
      console.log('Form is not valid. Please answer all questions.');
    }
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
