// Q59 - Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.

function makeAdder (valuetoAdd : number) : (number : number) => number{
    
    return function (number : number): number{
        return number + valuetoAdd;
    
    }

};

let addsix = makeAdder(6)
console.log(addsix(58));