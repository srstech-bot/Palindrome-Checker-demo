


 function rollDice()
{   //link allows game to call through the paragraphg tag for crapsResults via this element with all 3 conditions and variables included
    let results = document.getElementById("crapsResults");

    //Generate a random number between 1 and 6 and store in variable
    let die1 = Math.floor(Math.random() * 6) + 1;

    let die2 = Math.floor(Math.random() * 6) + 1;
    //displays Die1 with subsequent number generated using Math.floor and Math.random
    console.log("Die 1: " + die1);
    //displays Die2 with subsequent number generated using Math.floor and Math.random
    console.log("Die 2: " + die2);
    //tells game to add results or number generation otherwise we're left with a list of numbers for d1 and d2 but no sums for our boolean conditions to make verifiable rules.
    let sum = die1 + die2;
    //OR operator and if operator is a Boolean (true or false) expression
    if (sum == 7 || sum == 11)
    {   
        console.log("CRAPS - you lose!");
        results.innerHTML ="CRAPS you lose!";
    }//AND operator this operator get added to if operator
    else if (die1 == die2 && die1 % 2 == 0)
    {
        console.log("You won!");
        results.innerHTML ="CRAPS you won!";
    }
    //else operator in this instance is executed after previous if and else if are not executed. This is why no condition is needed within parentheses. This condition is the final check or rule to the game.
    else 
    {
        console.log("You pushed!");
        results.innerHTML ="You pushed!";
    }
 }

 function checkForPalindrome()
 {
    //Do palindrome check
    let inputField = document.getElementById("palindromeField");

    let results = document.getElementById("palindromeResults");
    
    let inputValue = inputField.value;

    let stringLength = inputValue.length;
    
    if(stringLength > 0)
    {   
        
        let iterationCount = Math.floor(stringLength/2);

        let lastCharacterIndex = inputValue.length -1;

        let palindromeCheckResult = true;

        //Allowed to continue palindrome check
       for(let i = 0; i <iterationCount; i++)
        {
            if (inputValue[i] !== inputValue[lastCharacterIndex - i])
            {
                    console.log("NOT A PALINDROME!");
                    results.innerHTML = "NOT A PALINDROME!"
                    palindromeCheckResult = false;
                    break;
            }
        }
        if (palindromeCheckResult)
        {
            console.log("This is a palindrome!");
            results.innerHTML = "This is a palindrome! Great job, can you find another?"
        }
    }
 }