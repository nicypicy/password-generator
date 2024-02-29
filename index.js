const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


//specify the elements from HTML
let indexOneEl = document.getElementById("input1")
let indexTwoEl = document.getElementById("input2")
let copyword = document.querySelectorAll(".copy-password")


//generate random character
function randomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

//generate password
function passwordGenerator() {
    let indexOne = " "
    let indexTwo = " "
    for ( let i = 0 ; i < 15; i++) {
        indexOne += randomCharacter()
        indexTwo += randomCharacter()
    }
    
    indexOneEl.textContent = indexOne
    indexTwoEl.textContent = indexTwo
    
}

// Copy to Clipboard
function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text)
      .then(() => { 
        alert("Copied to clipboard!");
      })
  }
  
  copyword.forEach( copyindex => {
    copyindex.addEventListener("click", () => {
      const textToCopy = copyindex.textContent;
      copyTextToClipboard(textToCopy);
    });
  });
