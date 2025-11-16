function isPalindrome(str) {
    
    let cleaned = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            cleaned += char;
        }
    }
    
    console.log(`Cleaned row: ${cleaned}`);
    
    
    let reversed = "";
    for (let i = cleaned.length - 1; i >= 0; i--) {
        reversed += cleaned[i];
    }
    
    console.log(`Reverse row: ${reversed}`);
    
    
    if (cleaned == reversed) {
        console.log("It is a palindrome!");
        return true;
    } else {
        console.log("It is not a palindrome");
        return false;
    }
}


isPalindrome("Able Anna.");
console.log("---");
isPalindrome("Pull up if I pull up");
console.log("---");
isPalindrome("a");
console.log("---");
isPalindrome("Kayak");