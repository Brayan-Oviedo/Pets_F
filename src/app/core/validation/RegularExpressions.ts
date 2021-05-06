export abstract class RegularExpressions {

    
    static LETTERS_NUMBERS_SCRIPT_MIN1 = new RegExp(/^[a-zA-Z0-9\_\-]{1,}$/);   // Letras, numeros, guion y guion_bajo y minimo q digito
    static LETTERS_SCRIPT_MIN3 = new RegExp(/^[a-zA-Z]{3,}$/);   // Letras, numeros, guion, guion_bajo y minimo 3 digitos

}