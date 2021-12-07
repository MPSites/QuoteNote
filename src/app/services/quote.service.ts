import { MessageService } from './message.service';
import { Quote } from './../interfaces/quote';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private quotesUrl = 'api/quotes';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService ) { }

  getQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.quotesUrl).pipe(tap(_ => this.log(`fetched quotes`)), catchError(this.handleError<Quote[]>('getQuotes', [])));
  }

  getQuote(id: number): Observable<Quote> {
    const url = `${this.quotesUrl}/${id}`;
    return this.http.get<Quote>(url).pipe(tap(_ => this.log(`fetched quote id=${id}`)),catchError(this.handleError<Quote>(`getQuote id=${id}`)));
  }

  /** PUT: update citata na serveru */

  updateQuote(quote: Quote): Observable<any> {
    return this.http.put(this.quotesUrl, quote, this.httpOptions).pipe(tap(_ => this.log(`updated quote id=${quote.id}`)), catchError(this.handleError<any>('updateQuote')));
  }

  /** POST: dodavanje citata na server */

  addQuote(quote: Quote): Observable<Quote> {
    return this.http.post<Quote>(this.quotesUrl, quote, this.httpOptions).pipe(tap((newQuote: Quote) => this.log(`added qoute w/ id=${newQuote.id}`)), catchError(this.handleError<Quote>('addQuote')));
  }

  /** DELETE: brisanje citata na serveru */

  deleteQuote(quote: Quote): Observable<Quote> {
    const url = `${this.quotesUrl}/${quote.id}`;

    return this.http.delete<Quote>(url, this.httpOptions).pipe(tap(_ => this.log(`deleted quote id=${quote.id}`)), catchError(this.handleError<Quote>(`deleteQuote`)));
  }

  /** Logovanje aktivnosti za QuoteService */

  private log(message: string) {
    this.messageService.add(`QuoteService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // prikaz greske u konzoli
      console.error(error);

      // logovanje greske
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }

  
}
