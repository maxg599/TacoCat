//get our input
document.getElementById("alert").classList.add("invisible");

function getValue(){

    //get user string from the page
    let userString= document.getElementById("userString").value;


    //check for palindrome
   let returnObj= checkForPalindrome(userString);

    //display message to screen
    displayMessage(returnObj);
}

function checkForPalindrome(userString){

    //lower case input
    userString = userString.toLowerCase();

    //remove spaces and special characters
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex, "");

    let revString = [];
    let returnObj = {};

    for (let index = userString.length-1; index >= 0; index--) {
        revString += userString[index];
        
    }

    if (revString == userString) {
        returnObj.msg = "Well Done! You have entered a palindrome!"

    }

    else {
        returnObj.msg = "Sorry! You did not enter a palindrome. :("
    }

    returnObj.reversed = revString;

    return returnObj;
}


function displayMessage(returnObj){
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");

}