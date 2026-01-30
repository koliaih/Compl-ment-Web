var I_I = 0;
var A_tableau = [];
var A_historique = [];


function creerTableau() {
    for (var i = 0; i < 20; i++) {
        const I_valeurAleatoire = Math.round(Math.random() * 51) + (-10);
        A_tableau.push(I_valeurAleatoire);
    }
}

function afficher() {
    var O_Affichage = document.getElementById("Table");
    O_Affichage.textContent = A_tableau[I_I] + "°C";
    var O_historique = document.getElementById("historique");
    A_historique.push(A_tableau[I_I]);
    O_historique.textContent = A_historique.join("°C, ") + "°C";
    var O_Temperature = document.getElementById("Temperature");

    if (A_tableau[I_I] <= 0) {
        O_Temperature.textContent = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !" ;
        O_Affichage.className = "bleue";
    }
    else if (A_tableau[I_I] > 0 && A_tableau[I_I] <= 20) {
        O_Temperature.textContent = "";
        O_Affichage.className = "vert";
    }
    else if (A_tableau[I_I] > 20 && A_tableau[I_I] <= 30) {
        O_Temperature.textContent = "";
        O_Affichage.className = "orange";
    }
    else{
        O_Temperature.textContent = "Caliente ! Vamos a la playa, ho hoho hoho !!";
        O_Affichage.className = "rouge";
    }

    I_I++;
    if (I_I >= A_tableau.length) {
        I_I = 0;
    }
}
const I_timer = setInterval(afficher, ((25*8)+(60/3))*5-100);

creerTableau();
afficher();