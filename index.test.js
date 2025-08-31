const {getEvenNumbers, createCounter} = require('./Function')

test("that the function returns even numbers", () => {
    const arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10]; //Arrange
    const expected = [2,4,6,8,10];
    const result = getEvenNumbers(arrayOfNumbers); //ACT
    expect(getEvenNumbers(arrayOfNumbers)).toEqual(expected) // Assert

})

describe("createCounter", () => {
    test("that the initial count is 0", () => {
        const counter =createCounter()
        expect(counter.getcounter()).toBe(0)
    });
    test("that the count increase by 1",()=>{
        const counter = createCounter()
        counter.increment()
        expect(counter.getcounter()).toBe(1)
    })
    test("that the count decrease by 1", ()=>{
        const counter = createCounter()
        counter.increment()
        counter.decrement()
        expect(counter.getcounter()).toBe(0)
    })
    test("that the count can increase by 2",()=>{
        const counter = createCounter()
        counter.increment()
        counter.increment()
        expect(counter.getcounter()).toBe(2)
    })
    test("that the count resets to 0", ()=>{
        const counter = createCounter()
        counter.increment()
        counter.increment()
        counter.reset()
        expect(counter.getcounter()).toBe(0)
    })
})