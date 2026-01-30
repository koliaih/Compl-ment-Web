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
    var O_historique = document.getElementById("Historique");
    A_historique.push(A_tableau[I_I]);
    O_historique.textContent = A_historique.join("°C, ") + "°C";
    var O_Message = document.getElementById("Message");

    if (A_tableau[I_I] <= 0) {
        O_Message.textContent = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
        O_Affichage.className = "bleue";
    }
    else if (A_tableau[I_I] > 0 && A_tableau[I_I] <= 20) {
        O_Message.textContent = "";
        O_Affichage.className = "vert";
    }
    else if (A_tableau[I_I] > 20 && A_tableau[I_I] <= 30) {
        O_Message.textContent = "";
        O_Affichage.className = "orange";
    }
    else{
        O_Message.textContent = "Caliente ! Vamos a la playa, ho hoho hoho !!";
        O_Affichage.className = "rouge";
    }

    I_I++;
    if (I_I >= A_tableau.length) {
        I_I = 0;
    }
}

'use strict';

class TabsManual {
    constructor(groupNode) {
        this.tablistNode = groupNode;

        this.tabs = [];

        this.firstTab = null;
        this.lastTab = null;

        this.tabs = Array.from(this.tablistNode.querySelectorAll('[role=tab]'));
        this.tabpanels = [];

        for (var i = 0; i < this.tabs.length; i += 1) {
            var tab = this.tabs[i];
            var tabpanel = document.getElementById(tab.getAttribute('aria-controls'));

            tab.tabIndex = -1;
            tab.setAttribute('aria-selected', 'false');
            this.tabpanels.push(tabpanel);

            tab.addEventListener('keydown', this.onKeydown.bind(this));
            tab.addEventListener('click', this.onClick.bind(this));

            if (!this.firstTab) {
                this.firstTab = tab;
            }
            this.lastTab = tab;
        }

        this.setSelectedTab(this.firstTab);
    }

    setSelectedTab(currentTab) {
        for (var i = 0; i < this.tabs.length; i += 1) {
            var tab = this.tabs[i];
            if (currentTab === tab) {
                tab.setAttribute('aria-selected', 'true');
                tab.removeAttribute('tabindex');
                this.tabpanels[i].classList.remove('is-hidden');
            } else {
                tab.setAttribute('aria-selected', 'false');
                tab.tabIndex = -1;
                this.tabpanels[i].classList.add('is-hidden');
            }
        }
    }

    moveFocusToTab(currentTab) {
        currentTab.focus();
    }

    moveFocusToPreviousTab(currentTab) {
        var index;

        if (currentTab === this.firstTab) {
            this.moveFocusToTab(this.lastTab);
        } else {
            index = this.tabs.indexOf(currentTab);
            this.moveFocusToTab(this.tabs[index - 1]);
        }
    }

    moveFocusToNextTab(currentTab) {
        var index;

        if (currentTab === this.lastTab) {
            this.moveFocusToTab(this.firstTab);
        } else {
            index = this.tabs.indexOf(currentTab);
            this.moveFocusToTab(this.tabs[index + 1]);
        }
    }

    /* EVENT HANDLERS */

    onKeydown(event) {
        var tgt = event.currentTarget,
            flag = false;

        switch (event.key) {
            case 'ArrowLeft':
                this.moveFocusToPreviousTab(tgt);
                flag = true;
                break;

            case 'ArrowRight':
                this.moveFocusToNextTab(tgt);
                flag = true;
                break;

            case 'Home':
                this.moveFocusToTab(this.firstTab);
                flag = true;
                break;

            case 'End':
                this.moveFocusToTab(this.lastTab);
                flag = true;
                break;

            default:
                break;
        }

        if (flag) {
            event.stopPropagation();
            event.preventDefault();
        }
    }

    onClick(event) {
        this.setSelectedTab(event.currentTarget);
    }
}

window.addEventListener('load', function () {
    var tablists = document.querySelectorAll('[role=tablist].manual');
    for (var i = 0; i < tablists.length; i++) {
        new TabsManual(tablists[i]);
    }
});

const I_timer = setInterval(afficher, ((25*8)+(60/3))*5-100);

creerTableau();
afficher();