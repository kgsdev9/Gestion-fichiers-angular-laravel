import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent  implements OnInit {

  title!:string;
  description!:string;
  image!:string;
  createdDate!:Date;
  connecte!:number;

  ngOnInit()  {
    this.title = 'stephane';
    this.description = "programmation api web";
    this.createdDate  = new Date();
    this.connecte = 6;
  }


}
