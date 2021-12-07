import { CategoryService } from './../../services/category.service';
import { QuoteService } from './../../services/quote.service';
import { Quote } from './../../interfaces/quote';
import { Component, OnInit,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  
  quote: Quote;
  categories: Category[] = [];

  constructor(private route: ActivatedRoute, private quoteService: QuoteService, private categoryService: CategoryService, private location: Location) { }

  ngOnInit(): void {
    this.getQuote();
    this.getCategories();
  }

  getQuote(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.quoteService.getQuote(id).subscribe(quote => this.quote = quote);
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit() {
    if(this.quote.author == ""){
      this.quote.author = "Anonymous";
    }

    this.saveQuote();
  }

  saveQuote(): void {
    if(this.quote) {
      this.quoteService.updateQuote(this.quote).subscribe(() => this.goBack());
    }
  }
}
