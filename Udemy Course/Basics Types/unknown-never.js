"use strict";
let userInput; //te deja poner cualquier tipo, pero igualmente es distinto al type any.
let userName;
userInput = 5;
userInput = 'Max';
// userName = userInput //aca se ve, que unknown es distinto a any, porque esto da error, en cambio con any no. Por eso es unknown es mejor que any.
function generateError(message, code) {
    throw { message: message, errorCode: code };
} //en este caso esta funcion nunca retorna nada, ni siquiera undefined, por que? porque genera un error, y lo que hace eso es cortar directamente el codigo, entonces no tiene posibilidad de retornar nada.
generateError('An error ocurred!', 500);
