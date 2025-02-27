// obj1
function calculatesum(x,y){
    sum=x+y
    console.log("la somme des deux nombres est",sum)
}
calculatesum(1,2)
// obj2
let x=parseInt(prompt("premier nombre"))
let y=parseInt(prompt("second nombre"))
let z=parseInt(prompt("troisieme nombre"))
let nbr=[x,y,z];
function calculateaverage(nbr)
{
   let average=(nbr[0]+nbr[1]+nbr[2])/3
   console.log(average)
}
calculateaverage(nbr)
// obj3
let chaine=prompt("entez un mot")
function convertToUpperCase(chaine){
    chaine=chaine.toUpperCase()
    console.log("votre texte en majuscule",chaine)
}
convertToUpperCase(chaine)

