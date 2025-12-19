const PRIX_LIVRE = 800;

const REMISES = {
  1: 0,
  2: 0.05,
  3: 0.10,
  4: 0.20,
  5: 0.25,
};

const memoire = {};

export const cost = (livres) => {
  if (livres.length === 0) return 0;

  let comptes = [0, 0, 0, 0, 0];
  for (let livre of livres) {
    comptes[livre - 1]++;
  }

  let panier = comptes.filter(c => c > 0).sort((a, b) => b - a).join(',');

  return calculerPrixMinimum(panier);
};

function calculerPrixMinimum(panier) {
  if (panier === "") return 0;
  if (memoire[panier]) return memoire[panier];

  let nombres = panier.split(',').map(Number);
  let prixLePlusBas = Infinity;

  for (let tailleGroupe = 1; tailleGroupe <= nombres.length; tailleGroupe++) {
    let resteDuPanier = [];
    
    for (let i = 0; i < nombres.length; i++) {
      if (i < tailleGroupe) {
        if (nombres[i] - 1 > 0) {
          resteDuPanier.push(nombres[i] - 1);
        }
      } else {
        resteDuPanier.push(nombres[i]);
      }
    }
    resteDuPanier.sort((a, b) => b - a);

    let prixGroupe = tailleGroupe * PRIX_LIVRE * (1 - REMISES[tailleGroupe]);
    let prixTotal = prixGroupe + calculerPrixMinimum(resteDuPanier.join(','));

    if (prixTotal < prixLePlusBas) {
      prixLePlusBas = prixTotal;
    }
  }

  memoire[panier] = prixLePlusBas;
  return prixLePlusBas;
}