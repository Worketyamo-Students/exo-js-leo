// exercice 3 : condition if...else
let newage =prompt("entrez une nouvelle fois votre age")
function eligibilité(newage){ 
    let eligibilité="eligible"
    if (newage>=10) {
        console.log("votre age est",newage,"donc vous etes",eligibilité)
    } else {
        eligibilité="non eligible"
        console.log("votre age est",newage,"donc vous etes",eligibilité)   
    }
}
eligibilité(newage)