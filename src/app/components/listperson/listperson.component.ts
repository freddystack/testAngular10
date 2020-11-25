import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';



@Component({
  selector: 'app-listperson',
  templateUrl: './listperson.component.html',
  styleUrls: ['./listperson.component.css']
})
export class ListpersonComponent implements OnInit {

  listPerson: any=[]
  p: number = 1;

  constructor( private service: ApiServiceService ,
               private rou : Router
    ) { }

  ngOnInit(): void {
    this.getPersons()
  }

  getPersons(){
      this.service.getPerson().subscribe(
        response =>{
           this.listPerson = response
        },
        errors => console.log(errors)
      )
  }
  update(id: any){
     this.rou.navigate(['newrecord', id])
  }

  delete(id: any){
    Swal.fire({
      icon: 'warning',
      title: 'You want to delete this record?',
      showCancelButton: true,
      confirmButtonText: `OK`,
      
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.service.deletePerson(id).subscribe(
          _ =>{
            this.getPersons()
          }
        )
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
}
