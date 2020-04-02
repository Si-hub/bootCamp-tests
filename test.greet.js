describe("the greet function", function(){

    it("should greet Lindani with 'Hello, Lindani'", function(){
        assert.equal("Hello, Lindani", greet("Lindani"))
    });

    it("should greet Zolani with 'Hello, Zolani'", function(){
        assert.equal("Hello, Zolani", greet("Zolani"));
    });

    it("should greet Lihle with 'Hello, Lihle'", function(){
        assert.equal("Hello, Lihle", greet("Lihle"));

    });
});