import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  login(acno: string, pswd: string) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
