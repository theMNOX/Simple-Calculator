import { add, dec, sli, pow } from "./math.js";

document.getElementById("btnadd").addEventListener('click', () => {
    mathing("+");
});
document.getElementById("btndec").addEventListener('click', () => {
    mathing("-");
});
document.getElementById("btnsli").addEventListener('click', () => {
    mathing("/");
});
document.getElementById("btnpow").addEventListener('click', () => {
    mathing("*");
});

const msgfinaly = document.getElementById("msgfinal");

function mathing(nupil) {
    const num = document.getElementById("num").value.trim();
    const num2 = document.getElementById("num2").value.trim();

    if (num === "" || num2 === "") {
        msgfinaly.innerText = "Enter valid numbers!";
        return;
    }

    const number1 = parseFloat(num);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
        msgfinaly.innerText = "Enter valid numbers!";
        return;
    }

    let result;
    switch (nupil) {
        case "+":
            result = add(number1, number2);
            break;
        case "-":
            result = dec(number1, number2);
            break;
        case "*":
            result = pow(number1, number2);
            break;
        case "/":
            if (number2 === 0) {
                msgfinaly.innerText = "Cannot divide by zero!";
                return;
            }
            result = sli(number1, number2);
            break;
        default:
            msgfinaly.innerText = "Invalid operation!";
            return;
    }

    msgfinaly.innerText = "Result: " + result;
}
