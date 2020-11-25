import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  UIPerson  from '../model/person.model';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2'


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private readonly URL = "http://127.0.0.1:8000/api/person";
  private readonly URLAPPLE = "https://rss.itunes.apple.com/api/v1/us/apple-music/new-releases/all/100/explicit.json"

  constructor( private http: HttpClient) { }


  getPerson():Observable<UIPerson>{
     return this.http.get<UIPerson>(this.URL)
   
  }

  newPerson(person: UIPerson){
      const data ={
       name: person.name,
       last_name: person.last_name,
       direction: person.direction,
       country: person.country,
       postal_code: person.postal_code,
       studies: person.studies,
       ocupation: person.ocupation
     } 
    return this.http.post(`${this.URL}` , data)
   .pipe(
      map((response: any) =>{
          Swal.fire({
            icon: "success",
            title: response.data
          })
      }),
      catchError(  er => of(
        console.log(er)
      ))
    ) 
  }

  deletePerson(id: any){
     return this.http.delete(`${this.URL}/${id}`)
     .pipe(
       map((res: any) =>{
         Swal.fire({
           icon: "success",
           title: res.data
         })
       }),
       catchError(err => of(
         console.log(err)
       ))
     ) 
  }

  getPersonById(id : any):Observable<any>{
     return this.http.get(`${this.URL}/searchbyid/${id}`)
  }

  updatePerson(id: any, person: UIPerson){
    const data ={
      name: person.name,
      last_name: person.last_name,
      direction: person.direction,
      country: person.country,
      postal_code: person.postal_code,
      studies: person.studies,
      ocupation: person.ocupation
    }
    return this.http.put(`${this.URL}/${id}` , data)
    .pipe(
      map((res:any) =>{
        Swal.fire({
          icon: "success",
          title :res.data
        })
        console.log(res);
      }) 
    )
  }


  getapple(){
    return this.http.get(this.URLAPPLE )
    .pipe(
      map(res =>{
        console.log(res);
      })
    )
    
  }
}
