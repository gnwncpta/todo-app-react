let math = Math.random();

function generateKey(){
    let key = 0;

    if(math > 0.10 && math < 0.19){
        key = 1;
    } else if(math > 0.20 && math < 0.29){
        key = 2;
    } else if(math > 0.30 && math < 0.39){
        key = 3;
    } else if(math > 0.40 && math < 0.49){
        key = 4;
    } else if(math > 0.50 && math < 0.59){
        key = 5;
    } else if(math > 0.60 && math < 0.69){
        key = 6;
    } else if(math > 0.70 && math < 0.79){
        key = 7;
    } else if(math > 0.80 && math < 0.89){
        key = 8;
    } else if(math > 0.90 && math < 0.99){
        key = 9;
    } else if(math == 1.0 ){
        key = 10;
    }

    return key;
}

export default function createRandom(){
    const alphabet = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];

    const number = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ];

    let result = '';

    for(let i = 0; i < 3; i++){
        math = Math.random();

        let key = generateKey();
        
        result += alphabet[key];
        result += number[key];
    }

    return result;
}