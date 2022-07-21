import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name:string;
  tsts = "t";
  isError = true;
  public msg:string="";
  public msgg:string="";

  constructor() {
    this.name = "khaled";
   }

   getData(v:any) 
   {
    console.log(v);
    this.msg = v;
   }

  ngOnInit(): void {
  }

}
