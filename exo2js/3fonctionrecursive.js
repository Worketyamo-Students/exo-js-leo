// obj1 :n-iem nbr
let nombrefibo
let nombre=parseInt(prompt("entrez le quantieme nombre de fibonacci"))
function fibonacci(nombrefibo,nombre){
// definissons la suite de fibonnacci
    let suitefibo=[0,1]
    for (let i = 2; i < nombre; i++) {
        suitefibo.splice(i,0,suitefibo[i-1]+suitefibo[i-2])
    }
    console.log(suitefibo)
    nombrefibo=suitefibo[nombre-1]
    console.log("le",nombre,"ieme nombre de fibonacci est :",nombrefibo)
}
fibonacci(nombrefibo,nombre)
// obj2 :factorielle
// let compteur
// let n=parseInt(prompt("entrez votre nombre"))
// function factorial(n){
//     for (compteur=1 ; compteur<=n-1 ; compteur++) {
//         n=n*(n-compteur)
//     }
//     let factoriel=n
//     console.log(factoriel)
// }
// console.log(factorial(n))