import { MessageService } from './../../services/message.service';
import { ActivatedRoute, Router } from '@angular/router';
import { slide } from './../../animation';
import { Quote } from '../../interfaces/quote';
import { QuoteService } from '../../services/quote.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qoutes',
  templateUrl: './qoutes.component.html',
  styleUrls: ['./qoutes.component.css'],
  animations: [ slide ]
})
export class QoutesComponent implements OnInit {

  quotes: Quote[] = [];
  searchText: string;
  sorts = ['Author A-Z', 'Author Z-A', 'Category A-Z', 'Category Z-A'];
  sortBy: string;

  comName = this.route.routeConfig?.component?.name;
  loc = this.router.url;

  constructor(private quoteService: QuoteService, private router: Router, private route: ActivatedRoute, private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.addLocation(this.loc, this.comName);
    this.getQuotes();
  }
  
  getQuotes() {
    this.quoteService.getQuotes().subscribe(quotes => this.quotes = quotes);
  }

  deleteQuote(quote: Quote) {
    this.quoteService.deleteQuote(quote).subscribe(() => this.quotes = this.quotes.filter(q => q.id !== quote.id));
  }

  addQuote(obj: any) {
    this.quoteService.addQuote(obj as unknown as Quote).subscribe(quote => this.quotes.unshift(quote));
  }

  onChange(value: string){
    // console.log(value);
    if(value == "Author A-Z"){
      this.sortByAuthorAZ();
    }
    if(value == "Author Z-A"){
      this.sortByAuthorZA();
    }
    if(value == "Category A-Z"){
      this.sortByCategoryAZ();
    }
    if(value == "Category Z-A"){
      this.sortByCategoryZA();
    }
  }

  sortByAuthorAZ() {
    this.quotes.sort(this.authorAZ)
  }

  sortByAuthorZA() {
    this.quotes.sort(this.authorZA)
  }

  sortByCategoryAZ() {
    this.quotes.sort(this.categoryAZ)
  }

  sortByCategoryZA() {
    this.quotes.sort(this.categoryZA)
  }

  authorAZ( a: any, b: any) {
    if(a.author < b.author ){
      return -1;
    }
    if( a.author > b.author){
      return 1;
    }
    return 0;
  }

  authorZA( a: any, b: any) {
    if(a.author < b.author ){
      return 1;
    }
    if( a.author > b.author){
      return -1;
    }
    return 0;
  }

  categoryAZ( a: any, b: any) {
    if(a.category < b.category ){
      return -1;
    }
    if(a.category > b.category){
      return 1;
    }
    return 0;
  }

  categoryZA( a: any, b: any) {
    if(a.category < b.category ){
      return 1;
    }
    if(a.category > b.category){
      return -1;
    }
    return 0;
  }

}
