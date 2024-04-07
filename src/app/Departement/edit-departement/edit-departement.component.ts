import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartementService } from '../../service/departement.service';

@Component({
  selector: 'app-edit-departement',
  templateUrl: './edit-departement.component.html',
  styleUrl: './edit-departement.component.css'
})
export class EditDepartementComponent {
  id:any;
  name!:string;


  constructor(private route:ActivatedRoute, private DepartementService: DepartementService){}
  ngOnInit(){
    // console.log(this.route.snapshot.params.id);
    // this.id = this.route.snapshot.params.id;
    // this.getData();
  }

  // getData(){
  //   this.DepartementService.getEmployeeByID(this.id).subscribe(res => {
  //     this.data = res;
  //     this.employee  = this.data;
  //   });
  // }

}
