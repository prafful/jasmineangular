import { greeting } from "./greeting";



describe("greeting suite", () => {
    it("should include name in the message", () => {
        const message = greeting("prafful")
        
        //expect(message).toBe("Hey prafful, you have done the great job!!!") //this is fragile test
        expect(message).toContain("prafful")
    })
})