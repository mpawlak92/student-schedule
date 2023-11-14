import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';

type NewType = FormBuilder;

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss'],
})
export class MessageModalComponent  implements OnInit {
  lecturer:any | undefined

  public messageForm!: FormGroup

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private fb: FormBuilder,
    
  ) {
    this.lecturer = this.navParams.data;
  }
  ngOnInit(): void {
    console.log(this.lecturer)
    this.initializeForm();
  }

  initializeForm(): void {
    this.messageForm = this.fb.group({
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  submitForm(): void {
    if (this.messageForm.valid) {
      const message = this.messageForm.value.message;
      // You can now use the 'message' variable to send or process the message.
      console.log('Submitted Message:', message);
    }
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
