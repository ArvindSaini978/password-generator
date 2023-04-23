const passwordBox = document.querySelector('.pass');
const togglePass = document.querySelector('.showPass');
const passOverlay = document.querySelector('.pass-overlay');
const togglePassImg = document.querySelector('.showPass img');
const passLengthBox = document.getElementById('passLength');
const uppercaseBox = document.getElementById('uppercase');
const lowercaseBox = document.getElementById('lowercase');
const numberBox = document.getElementById('number');
const specialBox = document.getElementById('special');
let passLength = 12;
let uppercaseInclude = false;
let lowercaseInclude = false;
let numberInclude = false;
let specialInclude = false;
const smallLetters = "abcdefghijklmnopqrstuvwxyz";
const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberLetters = "1234567890";
const specialCharacters = "!@#$%^&*()-_`~";

window.onload = () => {
    if (window.innerWidth < 440) {
        passOverlay.innerHTML = "# # # # # # # # #"
    }
    else {
        passOverlay.innerHTML = "# # # # # # # # # # # #"
    }
}
window.onresize = () => {
    if (window.innerWidth < 440) {
        passOverlay.innerHTML = "# # # # # # # # #"
    }
    else {
        passOverlay.innerHTML = "# # # # # # # # # # # #"
    }
}

passLengthBox.addEventListener('input', (e) => {
    passLength = +e.target.value;
})

const getCheckboxValue = async () => {
    passLength = +passLengthBox.value;
    if (uppercaseBox.checked) {
        uppercaseInclude = true;
    }
    else {
        uppercaseInclude = false;
    }
    if (lowercaseBox.checked) {
        lowercaseInclude = true;
    }
    else {
        lowercaseInclude = false;
    }
    if (numberBox.checked) {
        numberInclude = true;
    }
    else {
        numberInclude = false;
    }
    if (specialBox.checked) {
        specialInclude = true;
    }
    else {
        specialInclude = false;
    }
}
const showHidePassword = async () => {
    passOverlay.classList.toggle('show-hide')
    if (passOverlay.matches('.show-hide')) {
        togglePassImg.src = "./static/images/hide.png"
    }
    else {
        togglePassImg.src = "./static/images/show.png"
    }
}
togglePass.addEventListener('click', showHidePassword);

const getRandamCharacter = async () => {
    let randLower = smallLetters[(Math.round((Math.random()) * (smallLetters.length)))];
    let randUpper = capitalLetters[(Math.round((Math.random()) * (capitalLetters.length)))];
    let randNum = numberLetters[(Math.round((Math.random()) * (numberLetters.length)))];
    let randSpecial = specialCharacters[(Math.round((Math.random()) * (specialCharacters.length)))];
    if (randLower == undefined) {
        randLower = smallLetters[smallLetters.length - 1]
    } if (randUpper == undefined) {
        randUpper = capitalLetters[capitalLetters.length - 1]
    } if (randNum == undefined) {
        randNum = numberLetters[numberLetters.length - 1]
    } if (randSpecial == undefined) {
        randSpecial = specialCharacters[specialCharacters.length - 1]
    }
    return { randLower, randUpper, randNum, randSpecial };
};

const createPassword = async () => {
    await getCheckboxValue();

    let numberOfChar = 2;

    if (passLength <= 12) {
        numberOfChar = 2;
    }
    else if (12 < passLength && passLength < 16) {
        numberOfChar = 3;
    }
    else {
        numberOfChar = (Math.round((Math.random() * 1.67) + 1.99))
    }

    const mergepass = async () => {
        let lchar = "";
        let uchar = "";
        let nchar = "";
        let schar = "";
        for (let index = 0; index < numberOfChar; index++) {
            let { randLower, randUpper, randNum, randSpecial } = await getRandamCharacter();
            lchar += randLower;
            uchar += randUpper;
            nchar += randNum;
            schar += randSpecial;
        }
        return { lchar, uchar, nchar, schar };
    }

    let finalPassword = "";

    for (let index = 0; index < passLength / 4; index++) {
        let { lchar, uchar, nchar, schar } = await mergepass();
        if (uppercaseInclude == true && lowercaseInclude == true && numberInclude == true && specialInclude == true) {
            finalPassword += lchar;
            finalPassword += schar;
            finalPassword += uchar;
            finalPassword += nchar;
        }
        else if (uppercaseInclude == false && lowercaseInclude == true && numberInclude == true && specialInclude == true) {
            finalPassword += lchar;
            finalPassword += schar;
            finalPassword += nchar;

        }
        else if (uppercaseInclude == true && lowercaseInclude == false && numberInclude == true && specialInclude == true) {
            finalPassword += uchar;
            finalPassword += schar;
            finalPassword += nchar;

        }
        else if (uppercaseInclude == true && lowercaseInclude == true && numberInclude == false && specialInclude == true) {
            finalPassword += lchar;
            finalPassword += schar;
            finalPassword += uchar;

        }
        else if (uppercaseInclude == true && lowercaseInclude == true && numberInclude == true && specialInclude == false) {
            finalPassword += uchar;
            finalPassword += nchar;
            finalPassword += lchar;

        }
        else if (uppercaseInclude == false && lowercaseInclude == false && numberInclude == true && specialInclude == true) {
            finalPassword += nchar;
            finalPassword += schar;

        }
        else if (uppercaseInclude == false && lowercaseInclude == true && numberInclude == false && specialInclude == true) {
            finalPassword += lchar;
            finalPassword += schar;

        }
        else if (uppercaseInclude == false && lowercaseInclude == true && numberInclude == true && specialInclude == false) {
            finalPassword += lchar;
            finalPassword += nchar;

        }
        else if (uppercaseInclude == true && lowercaseInclude == false && numberInclude == false && specialInclude == true) {
            finalPassword += schar;
            finalPassword += uchar;

        }
        else if (uppercaseInclude == true && lowercaseInclude == false && numberInclude == true && specialInclude == false) {
            finalPassword += nchar;
            finalPassword += uchar;

        }
        else if (uppercaseInclude == true && lowercaseInclude == true && numberInclude == false && specialInclude == false) {
            finalPassword += lchar;
            finalPassword += uchar;

        }
        else if (uppercaseInclude == false && lowercaseInclude == false && numberInclude == false && specialInclude == true) {
            finalPassword += schar;

        }
        else if (uppercaseInclude == false && lowercaseInclude == false && numberInclude == true && specialInclude == false) {
            finalPassword += nchar;

        }
        else if (uppercaseInclude == false && lowercaseInclude == true && numberInclude == false && specialInclude == false) {
            finalPassword += lchar;
        }
        else if (uppercaseInclude == true && lowercaseInclude == false && numberInclude == false && specialInclude == false) {
            finalPassword += uchar;
        }
        else if (uppercaseInclude == false && lowercaseInclude == false && numberInclude == false && specialInclude == false) {
            finalPassword = false;
        }
    }
    return finalPassword;

}

const generatePassword = async (e) => {
    e.preventDefault();
    let password = await createPassword();
    if (password == false) {
        alert("Please select at lease one checkbox.")
        return;
    }
    else if (password.length < passLength) {
        for (let index = 0; index < ((passLength - (password.length)) / (2)); index++) {
            let passwordToAdd = await createPassword();
            password += passwordToAdd;
        }
    }
    else if (password.length < passLength) {
        for (let index = 0; index < 2; index++) {
            let passwordToAdd = await createPassword();
            password += passwordToAdd;
        }
    }
    let finalpassword = password.slice(0, passLength);
    // adding password to website
    passwordBox.innerHTML = finalpassword;

}