// //obj1:aire_rectangle
// function calculateRectangleArea(L,l){
//     let area=L*l
//     return area
// }
// console.log("l'aire de votre rectangle est :",calculateRectangleArea(6,3))
// // obj2:nombre pair ou impair
// let nombre=parseInt(prompt("entrez votre nombre et verifions sa parité"))
// let modulo=nombre%2
// function isEven(nombre){
//     let parité
//     if (modulo==0) {
//         parité=true
//         console.log(parité,"donc votre nombre est pair")  
//     } else {
//         parité=false
//         console.log(parité,"donc votre nombre est impair") 
//     }
// }
// isEven(nombre)
// obj3:recherche d'element dans le tableau
let tab=["leo","lio","steve","leon","lion"]
let compteur=0
let search=prompt("entrez le mot à chercher dans le tableau")
function findElement(tab,compteur){

    for (compteur;compteur<=4; compteur++) {

        if (tab[compteur]==search) {
            console.log("true")
        }else{
            console.log("false")
        } 
    }
}
console.log(findElement(tab,compteur))
