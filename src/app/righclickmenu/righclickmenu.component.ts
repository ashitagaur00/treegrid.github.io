import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-righclickmenu',
  templateUrl: './righclickmenu.component.html',
  styleUrls: ['./righclickmenu.component.css']
})
export class RighclickmenuComponent implements OnInit {

  @Input() x = 0;
  @Input() y = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

}
