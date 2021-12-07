import { NotFound404Component } from './components/not-found404/not-found404.component';
import { AboutComponent } from './components/about/about.component';
import { QuoteDetailComponent } from './components/quote-detail/quote-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QoutesComponent } from './components/quotes/qoutes.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quotes', component: QoutesComponent },
  { path: 'detail/:id', component: QuoteDetailComponent},
  { path: 'about', component: AboutComponent},

  { path: '**', component: NotFound404Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }