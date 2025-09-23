export default class ErrorCustom {
    afficher(value) {
        if ( value > 10) {
            console.log("C'est plus grand") ;
        } 
        if (value < 10 ) {
            throw new Error("Le nombre est plus petit que 10");
        }
    }
}