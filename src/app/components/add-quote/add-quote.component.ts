import { Category } from './../../interfaces/category';
import { CategoryService } from './../../services/category.service';
import { UiService } from './../../services/ui.service';
import { Quote } from './../../interfaces/quote';
import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  @Output() onAddQuote: EventEmitter<Quote> = new EventEmitter();
  @ViewChild('f') addForm: NgForm;


  categories: Category[] = [];
  showAddForm: boolean;
  subscription: Subscription;
  
  newQuote = {
    text: '',
    author: '',
    category: ''
  }

  constructor(private uiService: UiService, private categoryService: CategoryService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddForm = value));
   }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }

  onSubmit() {

    if(this.addForm.value.author == ""){
      this.addForm.value.author = "Anonymous";
    }

    let author = this.addForm.value.author[0].toUpperCase() + this.addForm.value.author.substring(1);
    

    this.newQuote.text = this.addForm.value.text;
    this.newQuote.author = author;
    this.newQuote.category = this.addForm.value.category;
    // console.log(this.newQuote);

    this.onAddQuote.emit(this.newQuote as Quote);
    // console.log(this.newQuote);
  }

}
