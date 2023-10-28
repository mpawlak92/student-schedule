import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from '@capacitor/screen-orientation';  
@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  constructor() { }

  ngOnInit() {
    ScreenOrientation.lock({
      orientation: 'portrait', // or 'landscape'
    });
  }

}
