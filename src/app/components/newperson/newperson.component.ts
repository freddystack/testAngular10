import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import  UIPerson from '../../model/person.model';
import { ApiServiceService } from '../../services/api-service.service';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-newperson',
  templateUrl: './newperson.component.html',
  styleUrls: ['./newperson.component.css']
})
export class NewpersonComponent implements OnInit {

  persons: UIPerson;
  isUpdated: string  = "";

  constructor( private service: ApiServiceService,
               private acRoute : ActivatedRoute,
               private rou : Router
    ) { 
     this.persons = new UIPerson()
  }

  ngOnInit(): void {
    //this.acRoute.paramMap.subscribe(p => this.isUpdated = p.get('isupdate') )
    if(this.isUpdated == 'save'){
      console.log("save")
    }
    else{
      this.getPersonByID()
    }
  }

  getPersonByID(){
    this.acRoute.params.subscribe( parametros =>{
       this.service.getPersonById(  parametros['isupdate'] ).subscribe(
        res =>{
          console.log(res);
          this.persons = res.data
        },
        err => console.log(err)
      )
    } ); 
  }

  newPerson(person: NgForm){
    if(person.invalid){
      return
    }
    if(this.isUpdated == 'save'){
      this.service.newPerson(this.persons).subscribe()
      person.reset()
    }else{
      this.acRoute.params.subscribe( parametros =>{
        this.service.updatePerson( parametros['isupdate'], this.persons).subscribe()
     
       setTimeout(() =>{
        this.rou.navigate(['/persons'])
       },300)
     } ); 
     
    }
    
  }
}
