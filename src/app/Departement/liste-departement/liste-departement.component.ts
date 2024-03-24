import { Component, OnInit } from '@angular/core';
import { DepartementService } from '../../service/departement.service';
@Component({
  selector: 'app-liste-departement',
  templateUrl: './liste-departement.component.html',
  styleUrl: './liste-departement.component.css'
})
export class ListeDepartementComponent implements OnInit {

  departements:any;

  constructor(private DepartementService:DepartementService) { }
  ngOnInit(){
    this.getData();
  }

  getData() {
    this.DepartementService.getData().subscribe(res =>{
      this.departements = res;
    });
  }


}
