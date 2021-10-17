// catégorie de restaurant:  restaurant, snacking, boire

const shops = [
  {
    id: "01",
    name: "Le Quinze",
    picture: "./shops-assets/leQuinze.jpg",
    pictureAlt: "Le Quinze",
    category: ["boire", "restaurant"],
    price_range: "€€",
    ratings: 3.8,
    trajet: 3,
    description: "Le spectacle du soir est chaudement recommandé par Thomas, notre maître à tous",
    coordonnees: "15 Rue du Surmelin",
    phone: "0143643856",
    urlItineraire: "https://goo.gl/maps/W9Thjmk5157EctMj6",
    site: "",
    style: "Bar et restaurant avec terrasse",
  },
  {
    id: "02",
    name: "Burger Lutèce",
    picture: "shops-assets/burgerLutece.jpg",
    category: ["restaurant", "snacking"],
    price_range: "€€",
    ratings: 4.8,
    trajet: 3,
    description: "Fresh & Tasty, mais nos propositions d'excuses pourront vous être utiles.",
    coordonnees: "30 Rue du Surmelin",
    phone: "0665409730",
    urlItineraire: "https://goo.gl/maps/KtQe67oYk3kpJ4Ef7",
    site: "https://www.burgerlutece.fr/",
    style: "Burger",
  },
  {
    id: "03",
    name: "Larson News",
    picture: "shops-assets/larsonNews.jpg",
    category: ["boire", "restaurant", "snacking"],
    price_range: "€",
    ratings: 4.5,
    trajet: 6,
    description: "Couscous et cocktails",
    coordonnees: "90 Av. Gambetta",
    phone: "0140318485",
    urlItineraire: "https://goo.gl/maps/TGmizXCFgaGETFNk6",
    site: "",
    style: "Bar de quartier, avec terrasse",
  },
  {
    id: "04",
    name: "Boulangerie Roux",
    picture: "shops-assets/boulangerieRoux.jpg",
    category: ["snacking"],
    price_range: "€",
    ratings: 3,
    trajet: 5, 
    description: "Boulangerie, fermée le mercredi. Livraison disponible via UberEats",
    coordonnees: "12 rue Pelleport",
    phone: "0143615739",
    urlItineraire: "https://goo.gl/maps/9MLfHzWpLXJEjUbJ9",
    site: "",
    style: "Boulangerie classique",
  },
  {
    id: "05",
    name: "Au Troquet de la place",
    picture: "shops-assets/troquetPlace.jpg",
    category: ["restaurant", "boire"],
    price_range: "€€",
    ratings: 3.8,
    trajet: 7,
    description: "Brassserie avec grande terrasse, 4.5€ les cocktails pendant happy hours",
    coordonnees: "177 Av. Gambetta",
    phone: "0140305107",
    urlItineraire: "https://goo.gl/maps/nLcSdXP6vGjKabgR6",
    site: "",
    style: "Bar, brasserie",
  },
  {
    id: "06",
    name: "Peppe Pizzeria",
    picture: "shops-assets/peppePizza.jpg",
    category: ["restaurant", "snacking"],
    price_range: "€€",
    ratings: 4.5,
    trajet: 14,
    description: "Restaurant à l'ambiance décontractée proposant un éventail de pizzas à l'italienne, ainsi que des desserts et du vin.",
    coordonnees: "2 Place Saint-Blaise",
    phone: "0145355913",
    urlItineraire: "https://goo.gl/maps/a1LvGU3XHvumXki67",
    site: "https://www.peppeparis.fr/",
    style: "Pizza",
  },
  {
    id: "07",
    name: "Boulangerie Walter Camaj",
    picture: "shops-assets/walterCamaj.jpg",
    category: ["snacking"],
    price_range: "€",
    ratings: 4.1,
    trajet: 5,
    description: "Fermée le mercredi",
    coordonnees: "177 avenue Gambetta",
    phone: "",
    urlItineraire: "https://goo.gl/maps/MipuZcRJAEQcwsvP6",
    site: "",
    style: "Boulangerie",
  },
  {
    id: "08",
    name: "Boulangerie Meunier",
    picture: "shops-assets/meunier.jpg",
    category: ["snacking"],
    price_range: "€",
    ratings: 2.8,
    trajet: 6,
    description: "Fermée dimanche et lundi",
    coordonnees: "10 rue du capitaine Ferber",
    phone: "",
    urlItineraire: "https://goo.gl/maps/sYu95cyZqEjxg8pA7",
    site: "https://www.chezmeunier.fr/",
    style: "Boulangerie",
  },
  {
    id: "09",
    name: "Aux Petits Oignons",
    picture: "shops-assets/oignons.jpg",
    category: ["restaurant", "boire", "snacking"],
    price_range: "€€",
    ratings: 4.4,
    trajet: 7,
    description: '"Plats français modernes et originaux dans un intérieur chaleureux de type bistro de quartier, avec terrasse."',
    coordonnees: "11 rue Dupont de l'Eure",
    phone: "0143641886",
    urlItineraire: "https://goo.gl/maps/wyFXsG5Vi6bVvysDA",
    site: "https://auxpetitsoignonsparis.fr",
    style: "Bistro avec terrasse",
  },
  {
    id: "10",
    name: "Bar de la place Edith Piaf",
    picture: "shops-assets/piaf.jpg",
    category: ["boire", "restaurant"],
    price_range: "€",
    ratings: 4.2,
    trajet: 6,
    description: "Fermé le vendredi, horaires variables",
    coordonnees: "22 Rue de la Py",
    phone: "0143610932",
    urlItineraire: "https://goo.gl/maps/p3quDncS778ZfpKn9",
    site: "",
    style: "Bar de quartier",
  },
  {
    id: "11",
    name: "La Gambette à Pain",
    picture: "shops-assets/gambette.jpg",
    category: ["snacking"],
    price_range: "€€",
    ratings: 4.2,
    trajet: 5,
    description: "Boulangerie, fermée le week-end",
    coordonnees: "86 Avenue Gambetta",
    phone: "0143645234",
    urlItineraire: "https://goo.gl/maps/4Bps7MRkLXMHcSXdA",
    site: "",
    style: "Boulangerie",
  },
  {
    id: "12",
    name: "Huitzilin",
    picture: "shops-assets/huitzilin.jpg",
    category: ["restaurant", "snacking"],
    price_range: "€€",
    ratings: 4.6,
    trajet: 5,
    description: "Fermé dimanche et lundi",
    coordonnees: "30 Rue de la Py",
    phone: "0143649826",
    urlItineraire: "https://goo.gl/maps/xGSqKQxFsG67o9TdA",
    site: "http://www.huitzilin.fr/",
    style: "Restaurant Mexicain",
  },
  {
    id: "13",
    name: "Il Pinocchio",
    picture: "shops-assets/pino.jpg",
    category: ["restaurant", "snacking"],
    price_range: "€€",
    ratings: 4.2,
    trajet: 7,
    description: "'Ce restaurant avec terrasse sert des plats italiens dans une salle simple décorée de luminaires à l'ancienne.' Livraison via Just-eat",
    coordonnees: "115 Avenue Gambetta",
    phone: "0143666963",
    urlItineraire: "https://goo.gl/maps/jNoWkZ7G6dQ36kfh9",
    site: "https://www.ilpinocchio.fr/",
    style: "Pizza",
  },
  {
    id: "14",
    name: "La Contrebande",
    picture: "shops-assets/contrebande.jpg",
    category: ["restaurant"],
    price_range: "€€",
    ratings: 4.7,
    trajet: 10,
    description: "Menus à emporter le midi uniquement, 15 ou 17€",
    coordonnees: "3 Rue des Tourelles",
    phone: "0140311210",
    urlItineraire: "https://goo.gl/maps/UXVKAuNcUbYdMfdq6",
    site: "https://la-contrebande.fr/",
    style: "Restaurant de quartier",
  },
  {
    id: "15",
    name: "Le Comptoir",
    picture: "shops-assets/comptoir.jpg",
    category: ["restaurant", "boire"],
    price_range: "€€",
    ratings: 4.4,
    trajet: 13,
    description: '"Ce bistrot intime et chaleureux avec salle au sous-sol propose une carte soignée et des vins biodynamiques."',
    coordonnees: "30 Rue Villiers de l'Isle Adam",
    phone: "0984552563",
    urlItineraire: "https://goo.gl/maps/NHVHVtChk5kxnzWP9",
    site: "https://lecomptoir75020.wixsite.com/gambetta",
    style: "Bistro",
  },
  {
    id: "16",
    name: "Le Palais de Pelleport",
    picture: "shops-assets/palais.jpg",
    category: ["restaurant", "snacking"],
    price_range: "€",
    ratings: 4.7,
    trajet: 7,
    description: "Fermé dimanche et lundi",
    coordonnees: "95 Rue Orfila",
    phone: "0140303511",
    urlItineraire: "https://goo.gl/maps/EeuQiTdaPkvwX3udA",
    site: "",
    style: "Vietnamien",
  },
  {
    id: "17",
    name: "Les Chaises",
    picture: "shops-assets/chaises.jpg",
    category: ["restaurant", "boire"],
    price_range: "€",
    ratings: 4.5,
    trajet: 10,
    description: '"Ce bar décontracté aux chaises toutes différentes propose des bières locales et la diffusion de matchs."',
    coordonnees: "33 rue de la Chine",
    phone: "0951650824",
    urlItineraire: "https://goo.gl/maps/Hjfp3op3zmj16hJS7",
    site: "",
    style: "Bar",
  },
  {
    id: "18",
    name: "Jeanine et Christiane",
    picture: "shops-assets/jeanine.jpg",
    category: ["snacking"],
    price_range: "€",
    ratings: 4.9,
    trajet: 4,
    description: 'Charcutier-traiteur',
    coordonnees: "8 Rue du Surmelin",
    phone: "0143615003",
    urlItineraire: "https://goo.gl/maps/ScTXEYPUFdx7za577",
    site: "https://www.jeanineetchristiane.fr/",
    style: "Charcuterie",
  },
];


export default shops; 
