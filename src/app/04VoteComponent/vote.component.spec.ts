import { VoteComponent } from "./vote.component";


describe("VoteComponent Suite", () =>{
    let voteComponent: VoteComponent

    //setup function - executed before each spec is called
    beforeEach(()=>{
        voteComponent = new VoteComponent()
    })

    //setup function
    beforeAll(()=>{
        //executed only once in a test suite before all specs are called.
    })

    //teardown function - exectued after each spec is called
    afterEach(()=>{

    })

    afterAll(()=>{
        
    })



    it("should increment the totalVotes when upVoted", ()=>{
        //arrange
        //let voteComponent = new VoteComponent()
        //act
        voteComponent.upVote()
        //assert
        expect(voteComponent.totalVotes).toBe(1)
    })

    it("should decrement the totalVotes when downVoted", ()=>{
        //arrange
        //let voteComponent = new VoteComponent()
        //act
        voteComponent.downVote()
        //assert
        expect(voteComponent.totalVotes).toBe(-1)
    })

})