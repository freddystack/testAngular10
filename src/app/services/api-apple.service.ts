import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiAppleService {

  private readonly URL ="https://rss.itunes.apple.com/api/v1/us/apple-music/new-releases/all/100/explicit"

  constructor(private http : HttpClient) { }

  getApple(){
    return this.http.get(this.URL)
    .pipe(
      map((res: any) =>{
       console.log(res);
      })
    )
  }
}
