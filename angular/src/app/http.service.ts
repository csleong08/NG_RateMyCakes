import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
      this.allCakes();
  }
  allCakes(){
    return this._http.get('/cakes');
  }
  createCake(cake){
    return this._http.post('/cakes', cake);
  }
  showCake(id){
    console.log('one task in the service');
    return this._http.get('/cakes/' + id);
  }
  rateCake(id, review){
    console.log("update task in the service");
    return this._http.post(`/reviews/${id}`, review);
  }
  // deleteCake(cake_id){
  //   console.log("delete one task in the service");
  //   return this._http.delete('/cakes/' + cake_id);
  // }
}
