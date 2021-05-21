export abstract class RegularExpressions {

    
    static LETTERS_NUMBERS_SCRIPT_MIN1 = new RegExp(/^[a-zA-Z0-9\_\-]{1,}$/);   // Letras, numeros, guion y guion_bajo y minimo 1 digito
    static LETTERS_MIN1 = new RegExp(/^[a-zA-Z]{1,}$/);   // Letras y minimo 3 digitos

}