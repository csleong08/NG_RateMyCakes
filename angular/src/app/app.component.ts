import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
// export class AppComponent{
    title1 = 'Rate my Cakes!';
    cakes = null;
    cake = null;
    getCake: boolean = false;
    newCake;
    selectedCake;
    errors;
    review = {rating:"", comment:""};

    constructor(private _httpService: HttpService){}
    ngOnInit(){
      this.allCakes();
      this.resetCake();
    }
    allCakes() { 
      let observable = this._httpService.allCakes();
      observable.subscribe(data => {
        console.log("Got our data!", data)
        this.cakes = data;
        console.log(this.cakes);
      });
    }
    resetCake(){
      this.newCake = {title:"", description: ""};
    }
    showCake(id){
      console.log('this is the one task in the component');
      let observable = this._httpService.showCake(id);
      observable.subscribe(data => {
        console.log("Got our one task data!", data);
        this.selectedCake = data;
      })
    }
    createCake(){
      let observable = this._httpService.createCake(this.newCake);
      observable.subscribe(data => {
        console.log("Got data from post back", data);
        this.allCakes();
        if('errors' in data) {
          this.errors = data;
        }
        this.allCakes();
      });
      this.resetCake();
    }

    rateCake(id){
      console.log("this is the update task in the component");
      console.log(this.selectedCake.baker);
      let observable = this._httpService.rateCake(id, this.review);
      observable.subscribe(data => {
        console.log("updated our data!", data);
        this.review = {rating:"", comment:""}
        this.allCakes();
      })
      // this.selectedCake = false;
    }
    // deleteTask(task_id){
    //   console.log("this is the delete task in the component");
    //   let observable = this._httpService.deleteCake(task_id);
    //   observable.subscribe(data => {
    //     console.log("deleted task!", data);
    //     this.allCakes();
    //   })
    // }
    // average(reviews)
    // {
    //   let sum = 0;
    //   for (let review of reviews)
    //   {
    //     sum +=review.rating;
    //     console.log();
    //   }
    // }
  }
