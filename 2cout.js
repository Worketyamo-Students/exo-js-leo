// exercice 2 : cout des inscriptions
let cout=parseInt(prompt("entrez la note du premier"))
let nbrparticipant=parseInt(prompt("entrez la note de second"))
function couttotal(cout,nbrparticipant){
    let couttotal=cout*nbrparticipant
    console.log("le cout total est",couttotal)
}
couttotal(cout,nbrparticipant)