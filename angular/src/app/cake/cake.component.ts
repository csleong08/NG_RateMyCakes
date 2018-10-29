import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {

  @Input() 
  getCake : any;
  avgRating : number;

  constructor() { }

  ngOnInit() { }

  ngOnChanges(){
    this.AvgRating();
  }
  AvgRating(){
    console.log("calculating average rating");
    let length = this.getCake.reviews.length;
    let sumRatings = 0;
    for(let i = 0; i<length; i++)
    {
      sumRatings +=this.getCake.reviews[i].rating;
    }
    this.avgRating = sumRatings/length;
    console.log("average rating calculated!")
  }
}
