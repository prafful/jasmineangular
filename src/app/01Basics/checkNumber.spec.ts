import {checkNumber} from './checkNumber'


describe("checkNumber suite", function(){

    it("should return 0 if input parameter is negative", function(){
        const result = checkNumber(-5)
        expect(result).toBe(0)
    } )

    it("should increment the input parameter by 1 if it is positive", function(){
        const result = checkNumber(5)
        expect(result).toBe(6)
    })

})