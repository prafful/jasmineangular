import { getFriends } from "./friends";



describe("getFriends Suite", ()=>{

    it("should return the list of valid friends", ()=>{
        const result = getFriends()
        expect(result).toContain('prafful')
        expect(result).toContain('adi')
        expect(result).toContain('naren')
    })


})