"use strict";
let userInput; // typ jaki wprowadzi user nie jest znany (nie wiemy jeszcze); może przechowywać obojętnie jaki typ bez zwracania nam błędów
let userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
    // while (true) {}
}
generateError('An error occurred!', 500);;
