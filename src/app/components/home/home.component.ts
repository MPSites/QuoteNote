import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from './../../services/message.service';
import { slide, fade } from './../../animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [slide, fade]
})
export class HomeComponent implements OnInit {

  componentName = this.route.routeConfig?.component?.name;
  loc = this.router.url;

  constructor(private messageService: MessageService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.messageService.addLocation(this.loc, this.componentName);
  }

  

}
