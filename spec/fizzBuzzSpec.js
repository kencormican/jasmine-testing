describe("Within the FizzBuzz Game", function() {

    describe("the fizzBuzz function", function() {
        it("should return 'FizzBuzz' if the number entered is divisible by both 3 & 5", function() {
            expect(fizzBuzz(15)).toBe("FizzBuzz");
        });
        it("should return a 'Fizz' message if the number entered is only divisible by 3", function() {
            expect(fizzBuzz(6)).toBe("Fizz");
        });
        it("should return a 'Buzz' message if the number entered is only divisible by 5", function() {
            expect(fizzBuzz(10)).toBe("Buzz");
        });
        it("should return the number entered if it's not divisible by 3 or 5", function() {
            expect(fizzBuzz(11)).toBe(11);
        });
	});
});
