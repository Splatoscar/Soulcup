// Date cible du compte à rebours
const dateCible = new Date('2023-07-23T23:59:59');

// Fonction pour mettre à jour le compte à rebours
function mettreAJourCompteARebours() {
  const maintenant = new Date().getTime();
  const tempsRestant = dateCible - maintenant;

  // Calcul du temps restant en jours, heures, minutes et secondes
  const jours = Math.floor(tempsRestant / (1000 * 60 * 60 * 24));
  const heures = Math.floor((tempsRestant % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((tempsRestant % (1000 * 60 * 60)) / (1000 * 60));
  const secondes = Math.floor((tempsRestant % (1000 * 60)) / 1000);

  // Affichage du compte à rebours dans l'élément HTML avec l'id "countdown"
  document.getElementById('countdown').innerHTML = `Fin de la Saison 1 : ${jours}j ${heures}h ${minutes}m ${secondes}s`;

  // Arrêt du compte à rebours une fois atteint
  if (tempsRestant < 0) {
    document.getElementById('countdown').innerHTML = 'Le compte à rebours est terminé !';
  }
}

// Mise à jour du compte à rebours toutes les secondes
setInterval(mettreAJourCompteARebours, 1000);

function trierTableauParScore() {
  const tableau = document.getElementById('tableau');
  const lignes = Array.from(tableau.getElementsByTagName('tr')).slice(1); // Ignorer la première ligne d'en-tête
  lignes.sort((a, b) => {
    const scoreA = parseInt(a.cells[2].textContent);
    const scoreB = parseInt(b.cells[2].textContent);
    return scoreB - scoreA;
  });
  const tbody = tableau.getElementsByTagName('tbody')[0];
  lignes.forEach((ligne) => {
    tbody.appendChild(ligne);
  });
}

trierTableauParScore();

function sortByScoreAndDifference() {
  var table = document.querySelector("table");
  var rows = Array.from(table.querySelectorAll("tbody tr"));

  rows.sort(function(a, b) {
    var scoreA = parseInt(a.cells[8].textContent);
    var scoreB = parseInt(b.cells[8].textContent);

    var differenceA = parseInt(a.cells[7].textContent);
    var differenceB = parseInt(b.cells[7].textContent);

    // Tri par score décroissant
    if (scoreA !== scoreB) {
      return scoreB - scoreA;
    }

    // Tri par différence de score décroissante
    return differenceB - differenceA;
  });

  // Réorganiser les lignes du tableau selon le nouvel ordre
  var tbody = table.querySelector("tbody");
  rows.forEach(function(row) {
    tbody.appendChild(row);
  });
}

// Initialiser la valeur du pourcentage
let percentage = 7;

// Mettre à jour la cuve avec la nouvelle valeur
function updateTank() {
  const tank = document.getElementById('liquid');
  const newHeight = percentage + '%';
  tank.style.height = newHeight;
}

// Appeler la fonction d'initialisation
updateTank();
