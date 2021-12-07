import { Component, OnInit } from '@angular/core';
import { faEraser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-unknown-id',
  templateUrl: './unknown-id.component.html',
  styleUrls: ['./unknown-id.component.css']
})
export class UnknownIdComponent implements OnInit {

  faEraser = faEraser;

  constructor() { }

  ngOnInit(): void {
  }

}
