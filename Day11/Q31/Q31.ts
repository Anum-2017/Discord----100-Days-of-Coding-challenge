//Q31 - No Users: Ensure your user list isn’t empty.

let userNames: string[] = ['Admin', 'Maryam', 'Sania', 'Sana', 'Fareeha', 'Tooba'];

if (userNames.length === 0) {
    console.log("We need to find some users!");
} 
else {
    userNames.forEach(name => {
        if (name == 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        } else {
            console.log(`Hello ${name}, thank you for logging in again.`);
        }
    })
}

userNames.splice(0, userNames.length);
if (userNames.length === 0) {
    console.log("We need to find some users!");
}
