import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-console-line',
  templateUrl: './console-line.component.html',
  styleUrls: ['./console-line.component.css']
})
export class ConsoleLineComponent implements OnInit {
  @Input() color: string;
  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
    if(this.text.includes("failed") || this.text.includes("Error")){
      this.color = "#B1222E";
    }
  }

}
