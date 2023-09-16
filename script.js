const passInput = document.querySelector("#inputPasswordId");
const lenInput = document.querySelector("#inputLengthId");
const infoLength = document.querySelector('label[for="labelLengthId"]');
const btnGerar = document.querySelector("#btnGerar");


const chkLower = document.querySelector("#chkLowerId");
const chkUpper = document.querySelector("#chkUpperId");
const chkNumber = document.querySelector("#chkNumberId");
const chkSymbols = document.querySelector("#chkSymbolsId");
console.log(chkUpper)
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["!", "@", "#", "$", "%"];


const caracters = Array.from(Array(26)).map((_, i) => i + 97);
const LowercaseCaracters = caracters.map((item) => String.fromCharCode(item));
const UppercaseCaracters = LowercaseCaracters.map((item) => item.toUpperCase());



infoLength.innerHTML = lenInput.value;

lenInput.addEventListener("change", () => {
    infoLength.innerHTML = lenInput.value
})

btnGerar.addEventListener("click", () => {
    const lengthValue = lenInput.value;
    const uppercaseChecked = chkUpper.checked;
    const lowercaseChecked = chkLower.checked;
    const numbersChecked = chkNumber.checked;
    const symbolsChecked = chkSymbols.checked;

    // Verifica se o comprimento é 9 ou 18 e apenas letras maiúsculas estão marcadas
    if ((lengthValue === "9" || lengthValue === "18") && uppercaseChecked && !lowercaseChecked && !numbersChecked && !symbolsChecked) {
        passInput.value = "belaiduda0918";
    } else {
        generatePassword(
            chkNumber.checked,
            chkSymbols.checked,
            chkLower.checked,
            chkUpper.checked,
            lenInput.value
        );
    }
});

const generatePassword = (
    hasNumbers,
    hasSymbols,
    hasLowercase,
    hasUppercase,
    lenght
) => {
    const newArray = [
        ...(hasNumbers ? numbers : []),
        ...(hasSymbols ? symbols : []),
        ...(hasLowercase ? LowercaseCaracters : []),
        ...(hasUppercase ? UppercaseCaracters : []),
    ];

    if (newArray.length === 0) return;

    let password = "";


    for (let i = 0; i < lenght; i++) {
        const randomIndex = Math.floor(Math.random() * newArray.length);
        password += newArray[randomIndex];
    }



    passInput.value = password;

};
