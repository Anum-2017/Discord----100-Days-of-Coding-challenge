// Q37 - Large Shirts: Default values in make_shirt().

function make_Shirt(size: String = "Large", message: string = "Unlocking the World of Coding")
{
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

// Large shirt with default message
make_Shirt(); 

// Medium shirt with default message
make_Shirt("medium"); 

// Custom shirt with a different message and size
make_Shirt("small", "Dive into Coding"); 