import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteComponent } from './vote.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('VoteComponent', () => {
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;
  let debugElement: DebugElement
  let htmlElement:HTMLElement

 
  beforeEach(async(()=>{
    TestBed.configureTestingModule({
      declarations:[VoteComponent]
    }).compileComponents()
  }))

  beforeEach(()=>{
    fixture = TestBed.createComponent(VoteComponent)
    component = fixture.componentInstance
    fixture.detectChanges()

    debugElement = fixture.debugElement.query(By.css('p'))
    htmlElement = debugElement.nativeElement

  })

  it("should display the initial number of votes", ()=>{
    //assert that text on the screen is of number 0
    expect(htmlElement.textContent).toEqual('Votes: 0')
  })

  it("should increment the totalVotes by one", ()=>{
    //Arrange
    const initialVotes = component.totalVotes

    //Act
    component.upVote()
    fixture.detectChanges()
    const newVotes = component.totalVotes
    //Assert
    expect(newVotes).toBeGreaterThan(initialVotes)


  })

  it("should decrement the totalVotes by one", ()=>{
    //Arrange
    const initialVotes = component.totalVotes

    //Act
    component.downVote()
    fixture.detectChanges()
    const newVotes = component.totalVotes
    //Assert
    expect(newVotes).toBeLessThan(initialVotes)


  })

  it("should display the current (increased by 1) Votes on screen, after being upvoted", ()=>{

    //console.log(component.totalVotes);
    component.upVote()
    fixture.detectChanges()
    //console.log(component.totalVotes);
    //assert that text on the screen is of number 1
    expect(htmlElement.textContent).toBe('Votes: 1')


  })

  it("should display the current (decreased by 1) Votes on screen, after being downvoted", ()=>{

    //console.log(component.totalVotes);
    component.downVote()
    fixture.detectChanges()
    //console.log(component.totalVotes);
    //assert that text on the screen is of number 1
    expect(htmlElement.textContent).toBe('Votes: -1')


  })


});
