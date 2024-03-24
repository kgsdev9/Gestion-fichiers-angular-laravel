import { Component } from '@angular/core';

@Component({
  selector: 'app-create-departement',
  templateUrl: './create-departement.component.html',
  styleUrl: './create-departement.component.css'
})
export class CreateDepartementComponent {

  name!:string;



  storeDepartement()  {
    alert(this.name);
  }

}
