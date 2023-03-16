import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  showColor: boolean = false;
  firstName: string = "";

  constructor() { }

  public changeColor(): void {
    this.showColor = !this.showColor;
  }

}
