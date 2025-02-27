// exercice 4 : moyenne de note
let premier=parseInt(prompt("entrez la note du premier"))
let second=parseInt(prompt("entrez la note de second"))
let troisieme=parseInt(prompt("entrez la note troisieme"))
function moyenne(premier,second,troisieme){
    let moyenne=premier/3+second/3+troisieme/3
    console.log("votre moyenne est",moyenne)
}
moyenne(premier,second,troisieme)