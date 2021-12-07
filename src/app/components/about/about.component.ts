import { MessageService } from './../../services/message.service';
import { fade, slide } from './../../animation';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faFeather } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [fade, slide]
})
export class AboutComponent implements OnInit {
  faFeather = faFeather;
  comName = this.route.routeConfig?.component?.name;
  loc = this.router.url;

  constructor(private router: Router, private route: ActivatedRoute, private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.addLocation(this.loc, this.comName);
  }

}
