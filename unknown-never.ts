let userInput: unknown; // typ jaki wprowadzi user nie jest znany (nie wiemy jeszcze); może przechowywać obojętnie jaki typ bez zwracania nam błędów

let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {}
}

generateError('An error occurred!', 500);
