import { MessageService } from './../../services/message.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-not-found404',
  templateUrl: './not-found404.component.html',
  styleUrls: ['./not-found404.component.css']
})
export class NotFound404Component implements OnInit {

  faUnknown = faQuestionCircle;
  comName = this.route.routeConfig?.component?.name;
  loc = this.router.url;

  constructor(private router: Router, private route: ActivatedRoute, private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.addLocation(this.loc, this.comName);
  }

}
