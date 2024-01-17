let userInput: unknown; //te deja poner cualquier tipo, pero igualmente es distinto al type any.

let userName: string;

userInput = 5;
userInput = 'Max'

// userName = userInput //aca se ve, que unknown es distinto a any, porque esto da error, en cambio con any no. Por eso es unknown es mejor que any.