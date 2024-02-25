import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fruits } from './fruits';

@Injectable()
export class FruitsService {

  constructor(private http: HttpClient) { }

get() {
  return this.http.get<Fruits[]>('http://localhost:3000/fruits');
}
create(payload: Fruits) {
  return this.http.post<Fruits>('http://localhost:3000/fruits', payload);
}
}