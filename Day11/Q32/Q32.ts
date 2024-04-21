//Q32 - Checking Usernames: Ensure uniqueness in usernames.

// step 1 arrays
const current_users: string[] = ['Maryam', 'Sania', 'Sana', 'Fareeha', "Tooba", "Rabiya"];
const new_users: string[] = ['Munazza', 'Tehreem', 'Sana', 'Aisha', 'Maryam', 'Fareeha'];

function checkUserNames(current_users: string[], new_users: string[]): void 
{
 // 1st step of function
    const lowercasedCurrentUsers = current_users.map(user => user.toLowerCase());
// 2nd step of function
    for (const newUser of new_users) {
        const lowercasedNewUser = newUser.toLowerCase();
        if (lowercasedCurrentUsers.includes(lowercasedNewUser)) {
            console.log(`${newUser} is already taken. Please enter a new username.`);
        } else {
            console.log(`${newUser} is available.`);
        }
    }
}
checkUserNames(current_users, new_users);