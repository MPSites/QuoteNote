import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  addLocation(route: string, component: any) {

    if(component.includes("404")) {
      this.add(`Error: Unknown locataion : ${component} loaded with status code 404`);
    } else {
      this.add(`Location: route = '${route}' : ${component} loaded`);
    }

    
  }
}
