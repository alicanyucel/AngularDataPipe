import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datapipe';
  public test:string="2023-12-30";
  dateString:Date=new Date();
  constructor(private _date:DatePipe){
    this.test=this._date.transform(new Date(),'yyyy-MM-dd')
  }
}
