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

  export(data: any){
    this.DepartementService.export(data).subscribe(res =>{
      this.departements = res;
    });
  }


  // insertData(){
  //   this.DepartementService.insertData(this.employee).subscribe(res =>{
  //     this.getData();
  //   });


  deleteData(id:any){
    this.DepartementService.deleteData(id).subscribe(res => {
      this.getData();
    })
  }


}
