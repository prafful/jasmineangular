import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {


  totalVotes: number 

  upVote(){
      this.totalVotes++
  }

  downVote(){
      this.totalVotes--
  }

  constructor() { 

    this.totalVotes = 0

  }

  ngOnInit() {
  }

}
