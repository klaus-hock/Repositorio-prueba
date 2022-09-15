export const generateRandomNumberBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min) + min);  //esto me va a generar un numero aleatorio entre el minimo y el maximo, osea que no me exeda del rango entre el min y el max.
    if(randomNumber == exclude){

     return generateRandomNumberBetween(min, max, exclude);

    }else{

     return randomNumber;
     
    }
 }