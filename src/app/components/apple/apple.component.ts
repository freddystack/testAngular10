import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';


@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent implements OnInit {
  list: any = []

  constructor(private service : ApiServiceService) { }

  ngOnInit(): void {
    this.service.getapple().subscribe()
    this.getapple()
  }

  getapple(){
    this.service.getapple().subscribe()
    
  }

}
