import { Component, OnInit } from '@angular/core';
import { DepartementService } from '../../service/departement.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-departement',
  templateUrl: './create-departement.component.html',
  styleUrl: './create-departement.component.css'
})
export class CreateDepartementComponent implements OnInit {
  // myForm: FormGroup;
  errors: any = {};
  name!:string;
  departements:any;
  selected_fruit = '';

  constructor(private DepartementService:DepartementService, private _router: Router) { }
  ngOnInit(){
    this.getData();
  }

  affichagedesdynailiques(value: any):void {
    this.selected_fruit = value.target.value;
  }

  getData() {
    this.DepartementService.getData().subscribe(res =>{
      this.departements = res;
    });
  }

  redirection(){
    this._router.navigate(['/departement']);
   }

  storeDepartement()  {
    var inputData = {
      name:this.name,
      id:this.selected_fruit
    }

    this.DepartementService.insertData(inputData).subscribe(
      res =>{
        this.redirection();
      }, error => {
        console.error('Une erreur s\'est produite:', error);
      }
      )

      // this.redirection();

      // redirection(){
      //   window.location.href="yourpagedomain/login"
      // // }
      //this.getData();
      // this._router.navigateByUrl('/departement');


  }

}
