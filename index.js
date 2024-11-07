// const inputSlider =  document.querySelector("[data-lengthSlider]");
// const lengthDisplay = document.querySelector("[data-lengthNumber]");
// const passwordDisplay = document.querySelector("[data-passwordDisplay]");
// const copyBtn = document.querySelector("[data-copy]");
// const copymsg =  document.querySelector("[data-copyMsg]");
// const uppercaseCheck = document.querySelector("#uppercase");
// const lowercaseCheck = document.querySelector("#lowercase");
// const numbersCheck = document.querySelector("#numbers");
// const symbolCheck = document.querySelector("#symbols");
// const indicator = document.querySelector("[data-indicator]");
// const generateBtn = document.querySelector(".generate-button");
// const allcheckBox = document.querySelectorAll("input[type=checkbox]"); 






// let password = "";
// let passwordLength = 10;
// let checkCount = 0;

// const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?/";
// // set strength circle to grey
// handleSlider();
// function handleSlider(){
//     inputSlider.value = passwordLength;
//     lengthDisplay.innerText = passwordLength;
//     // or kuchh v karna chahiye ? 
// }

// function setIndicator(color){
//     indicator.style.backgroundColor = color;
//     // shadow set kar
// }
 
// // Random Integer generate karne ke liye
// function generateRandomInt(min,max){
//     return Math.floor(Math.random() *(max-min)) + min;
// }

// function generateRandomNumber(){
//     return generateRandomInt(0,9);
// }

// function generateLowerCase(){
//      return String.fromCharCode(generateRandomInt(97,123));
// }

// function generateUpperCase(){
//     return String.fromCharCode(generateRandomInt(65,91));
// }

// function generateSymbol(){
//     const randNum = generateRandomInt(0,symbols.length);
//     return symbols.charAt(randNum);

// }

// function calculateStrength() {
//     let hasUpper = false;
//     let hasLower = false;
//     let hasNum = false;
//     let hasSym = false;

//     if (uppercaseCheck.checked) hasUpper = true;
//     if (lowercaseCheck.checked) hasLower = true;
//     if (numbersCheck.checked) hasNum = true; 
//     if (symbolCheck.checked) hasSym = true;

//     if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
//         setIndicator("#0f0"); // green for strong
//     } 
//     else if (
//         (hasLower || hasUpper) && 
//         (hasNum || hasSym) && 
//         passwordLength >= 6
//     ) {
//         setIndicator("#ff0"); // yellow for medium strength
//     } 
//     else {
//         setIndicator("#f00"); // red for weak
//     }
// }

// async function copyContent(){
//     try{
//         await navigator.clipboard.writeText(passwordDisplay.value);
//         copymsg.innerText = 'copied';

//     }
//     catch(e){
//         copymsg.innnerText='failed';
//     }
//     // to make copy wala span visible
//     copymsg.classList.add("active");
//     setTimeout(()=>{
//         copymsg.classList.remove("active");
//     },2000)
// }

// // password shuffle

//     function shufflePassword(array){
//         // shuffle karne ki ek pyri algo hai i.e fisher yates method => isko kisi array ke upar apply karke shuffle kar sakte hain
//         for (let i = array. length - 1; i > 0; i--){
//             const j = Math. floor (Math. random () * (i + 1));
//             const temp = array[i];
//             array [i] = array [j];
//             array [j] = temp;
//             }
//             let
//             str = " ";
//             array.forEach((el) = (str += el));
//             return str;
//     }

// // checkboxes pe kuchh kaam
//     function handlecheCkboxChange(){
//         checkCount=0;
//         allcheckBox.forEach((checkbox)=>{
//             if (checkbox.checked)
//                 checkCount++;
//         })
//         // special condition
//         if(passwordLength < checkCount){
//             passwordLength = checkCount;
//             handleSlider(); 
//         }
//     }


// allcheckBox.forEach((checkbox)=>{
//     checkbox.addEventListener('change',handlecheCkboxChange)
// })

// inputSlider.addEventListener('input',(e)=>{
//     passwordLength = e.target.value;
//     handleSlider();
// })

// copyBtn.addEventListener('click', ()=>{
//     if(passwordDisplay.value)
//         copyContent();
// })
    
// // ab generate password wale pe kaam karna hai
//     generateBtn.addEventListener('click',()=>{
//         // if none of the checkbox are selected then password generate nahi karna hai
//         if(checkCount<=0) return;  
//         if(passwordLength<checkCount)
//             passwordLength=checkCount;
//         handleSlider();
//         // let's start the journey to find new password

//         // remove old password
//         password="";

//         //let's put the stuff mentioned by checkboxes 

//          if(uppercaseCheck.checked){
//         password=password+generateUpperCase();
//     }

//     if(lowercaseCheck.checked){
//         password=password+generateLowerCase();
//     }

//     if(numbersCheck.checked){
//         password=password+generateRandomNumber();
//     }

//     if(symbolCheck.checked){
//         password=password+generateSymbol();
//     }

//     let funcArr = [];
//     if(uppercaseCheck.checked)
//         funcArr.push(generateUpperCase);
//     if(lowercaseCheck.checked)
//         funcArr.push(generateLowerCase);
//     if(symbolCheck.checked)
//         funcArr.push(generateSymbol);
//     if(numbersCheck.checked)
//         funcArr.push(generateRandomNumber);

//     // compulsory addition
//     for(let i =0; i<funcArr.length; i++){
//         password+=funcArr[i]();
//     }

//     // remaining addition
//     for(let i = 0; i<passwordLength-funcArr.length; i++){
//         let randIndex = generateRandomInt(0,funcArr.length);
//         password += funcArr[randIndex](); 
//     }

//     // shuffle the password
//     password= shufflePassword(Array.from(password));
//     // show in ui
//     passwordDisplay.value = password;
//     // calculate strength
//     calculateStrength();

// })



                     





const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copymsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generate-button");
const allcheckBox = document.querySelectorAll("input[type=checkbox]");

let password = ""; // Corrected
let passwordLength = 10;
let checkCount = 0;

// Define symbols
const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?/"; // Added this line

handleSlider();

function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ((passwordLength-min)*100/(max-min)) + "%100%"
}

function setIndicator(color) {
    indicator.style.backgroundColor = color;
}

function generateRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomNumber() {
    return generateRandomInt(0, 9);
}

function generateLowerCase() {
    return String.fromCharCode(generateRandomInt(97, 123));
}

function generateUpperCase() {
    return String.fromCharCode(generateRandomInt(65, 91));
}

function generateSymbol() {
    const randNum = generateRandomInt(0, symbols.length);
    return symbols.charAt(randNum);
}

function calculateStrength() {
    let hasUpper = uppercaseCheck.checked;
    let hasLower = lowercaseCheck.checked;
    let hasNum = numbersCheck.checked;
    let hasSym = symbolCheck.checked;

    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
        setIndicator("#0f0"); // green for strong
    } else if ((hasLower || hasUpper) && (hasNum || hasSym) && passwordLength >= 6) {
        setIndicator("#ff0"); // yellow for medium strength
    } else {
        setIndicator("#f00"); // red for weak
    }
}

async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copymsg.innerText = 'Copied';
    } catch (e) {
        copymsg.innerText = 'Failed';
    }
    copymsg.classList.add("active");
    setTimeout(() => {
        copymsg.classList.remove("active"); // Changed from 'add' to 'remove'
    }, 2000);
}

function shufflePassword(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swapping using destructuring
    }
    return array.join(""); // Join the shuffled array into a string
}

function handleCheckboxChange() {
    checkCount = 0;
    allcheckBox.forEach((checkbox) => {
        if (checkbox.checked) checkCount++;
    });
    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }
}

allcheckBox.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckboxChange);
});

inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider();
});

copyBtn.addEventListener('click', () => {
    if (passwordDisplay.value) copyContent();
});

generateBtn.addEventListener('click', () => {
    if (checkCount <= 0) return;
    if (passwordLength < checkCount) passwordLength = checkCount;
    handleSlider();

    password = ""; // Clear previous password

    let funcArr = [];
    if (uppercaseCheck.checked) funcArr.push(generateUpperCase);
    if (lowercaseCheck.checked) funcArr.push(generateLowerCase);
    if (symbolCheck.checked) funcArr.push(generateSymbol);
    if (numbersCheck.checked) funcArr.push(generateRandomNumber);

    // Compulsory addition
    for (let i = 0; i < funcArr.length; i++) {
        password += funcArr[i]();
    }

    // Remaining addition
    for (let i = 0; i < passwordLength - funcArr.length; i++) {
        let randIndex = generateRandomInt(0, funcArr.length);
        password += funcArr[randIndex]();
    }

    // Shuffle the password
    password = shufflePassword(Array.from(password));
    passwordDisplay.value = password; // Show in UI
    calculateStrength(); // Calculate strength
});
  
   





