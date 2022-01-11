import { Component, OnInit } from '@angular/core';
import { Quote } from './program';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class KennedyComponent {
//   title = 'weeksixip';
// }


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  quotes = [
    new Quote("ANC", "Kennedy Kamau", "I got a sign"),
    new Quote("Lupita", "Juliet Wahome", "Terminator")
  ]
  preNum!: number;
  lastNum!: number;
  counter!: number;
  version = 1;

  addQuote(_emittedApp: any) {

  }

  upvote(i: number) {
    this.quotes[i].upvotes += 1
  }
  downvote(i: number) {
    this.quotes[i].downvotes += 1
  }
  delQuote(i: number) {
    this.quotes.splice(i, 1)
  }
  highestUpvote() {
    this.preNum = 0
    this.lastNum = 0

    for (this.counter = 0; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if (this.lastNum > this.preNum) { this.preNum = this.lastNum }
    }
    return this.preNum
  }
  constructor() { }

  ngOnInit() {
  }
}


// import { Output,EventEmitter } from '@angular/core';
// import { from } from 'rxjs';
// import { Quote } from './program';
// @Component({
//   selector: 'app-form',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   @Output() emitQuote= new EventEmitter()
//   quoteStr!: string;
//   quotePublisher!: string;
//   quoteAuthor!: string;
//   theQuote:any

//   submitQuote(  ){
//     this.theQuote= new Quote(this.quotePublisher,this.quoteAuthor,this.quoteStr)
//     this.quoteStr=''
//     this.quoteAuthor=''
//     this.quotePublisher=''
//     this.emitQuote.emit(this.theQuote)
//   }




//   constructor() { }

//   ngOnInit() {
//   }

// }

// function emittedQuote(_emittedQuote: any) {
//   throw new Error('Function not implemented.');
// }
