//Q64 - Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".

function mergeTextAndNumber(text: string, num: number): string {
   return text + num;
}

const mergedString: string = mergeTextAndNumber("Age: ", 30);
console.log(mergedString); 



