import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile-modal',
  templateUrl: './edit-profile-modal.component.html',
  styleUrls: ['./edit-profile-modal.component.scss'],
})
export class EditProfileModalComponent  implements OnInit {
  userData:any | undefined
  editProfileForm!: FormGroup;
  
  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private fb: FormBuilder
  ) {
    this.userData = this.navParams.data;
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  close() {
    this.modalCtrl.dismiss();
  }

  

  initializeForm(): void {
    this.editProfileForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]], // Adjust the minimum length as needed
    });
  }

  submitForm(): void {
    if (this.editProfileForm.valid) {
      const editedProfile = this.editProfileForm.value;
      // You can now use the 'editedProfile' variable to update the user's profile.
      console.log('Edited Profile:', editedProfile);
    }
  }

}
