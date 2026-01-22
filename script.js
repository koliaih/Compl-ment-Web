var I_I = 0;
var A_tableau = [];

function creerTableau() {
    for (var i = 0; i < 20; i++) {
        const I_valeurAleatoire = Math.round(Math.random() * 51) + (-10);
        A_tableau.push(I_valeurAleatoire);
    }
}

function afficher() {
    var O_Affichage = document.getElementById("Table");
    O_Affichage.textContent = A_tableau[I_I];
    I_I++;
    if (I_I >= A_tableau.length) {
        I_I = 0;
    }

    if (I_valeurAleatoire <= 0) {
        O_Affichage.className = "bleue";
    }
    else if (I_valeurAleatoire > 0 && I_valeurAleatoire <= 20) {
        O_Affichage.className = "verte";
    }
    else if (I_valeurAleatoire > 20 && I_valeurAleatoire <= 30) {
        O_Affichage.className = "orange";
    }
    else{
        O_Affichage.className = "rouge";
    }
}
const I_timer = setInterval(afficher, 2000);

creerTableau();
afficher();