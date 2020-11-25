import { Component, OnInit , Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input('name') name;

  array: Array<string>= [''];

  constructor() { }

  ngOnInit(): void {
  }


  ngOnChanges(changes: SimpleChange) {
     this.array.push(JSON.stringify(changes))
  }

}
