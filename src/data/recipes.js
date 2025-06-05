export const recipes = [ 
{ 
id: 1, 
name: "Crêpes de Grand-mère", // VOTRE recette familiale 
    cuisine: "Française", // VOTRE culture 
    difficulty: "Facile", // Facile/Moyen/Difficile 
    cookTime: "20 mins", 
    ingredients: ["2 tasses de farine", "2 œufs", "1 tasse de lait"], // VOS ingrédients 
    instructions: "Mélanger les ingrédients secs...", // VOS étapes 
    tags: ["petit-déjeuner", "sucré"], 
    image: "https://example.com/crepes.jpg",
    
  }, 
  {
  id: 3,
  name: "Ndolé Traditionnel",
  cuisine: "Camerounaise",
  difficulty: "Difficile",
  cookTime: "2h 30 mins",
  ingredients: ["Feuilles de ndolé 500g", "Arachides crues 200g", "Bœuf 300g", "Poisson fumé 150g", "Crevettes séchées 100g", "Huile de palme 3 cuillères à soupe", "MAGGI Crevette 2", "Ail 3 gousses", "Gingembre 1 morceau", "Piment rouge frais 2"],
  instructions: "Faire bouillir et piler les arachides. Nettoyer les feuilles de ndolé. Faire revenir la viande, ajouter les feuilles, puis les arachides pilées et laisser mijoter 2h.",
  tags: ["plat principal", "traditionnel", "festif"],
  image: "https://eatthisny.com/wp-content/uploads/2022/04/20210426_181634-1024x819.jpeg"
},

{
  id: 4,
  name: "Poulet DG",
  cuisine: "Camerounaise", 
  difficulty: "Moyen",
  cookTime: "1h 15 mins",
  ingredients: ["Poulet entier 1kg", "Plantains mûrs 3", "Haricots verts 200g", "Carotte 2", "Poivron rouge 1", "Huile végétale 4 cuillères à soupe", "MAGGI Chicken 3", "Ail 4 gousses", "Gingembre frais 2cm", "Piment scotch bonnet 1"],
  instructions: "Découper et assaisonner le poulet. Le faire dorer. Couper les légumes et plantains en bâtonnets. Tout faire sauter ensemble avec les épices jusqu'à cuisson complète.",
  tags: ["plat principal", "festif", "légumes"],
  image: "https://images.unsplash.com/photo-1598515213692-d823dee3c2c4?w=400&h=300&fit=crop"
},

{
  id: 5,
  name: "Koki de Maïs",
  cuisine: "Camerounaise",
  difficulty: "Moyen", 
  cookTime: "1h 30 mins",
  ingredients: ["Maïs frais 4 épis", "Huile de palme 3 cuillères à soupe", "Feuilles de bananier", "Crevettes séchées 50g", "MAGGI Crevette 2", "Piment rouge séché 2", "Sel 1 pincée", "Eau 200ml"],
  instructions: "Égrener et mixer le maïs avec un peu d'eau. Mélanger avec l'huile de palme, les crevettes et assaisonnements. Emballer dans les feuilles de bananier et cuire à la vapeur 1h30.",
  tags: ["accompagnement", "traditionnel", "vapeur"],
  image: "https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?w=400&h=300&fit=crop"
},

{
  id: 6,
  name: "Achu Soup",
  cuisine: "Camerounaise",
  difficulty: "Difficile",
  cookTime: "2h",
  ingredients: ["Coco yam 1kg", "Viande de bœuf 500g", "Poisson fumé 200g", "Huile de palme 4 cuillères à soupe", "Feuilles de légume 300g", "Limestone water 2 cuillères à soupe", "MAGGI Crevette 3", "Piment jaune 3", "Crayfish 100g"],
  instructions: "Cuire et piler le coco yam avec limestone water. Préparer une sauce avec la viande, poisson et légumes. Servir la pâte avec la sauce riche en huile de palme.",
  tags: ["plat principal", "traditionnel", "northwest"],
  image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop"
},

{
  id: 7,
  name: "Mbongo Tchobi",
  cuisine: "Camerounaise",
  difficulty: "Difficile",
  cookTime: "1h 45 mins", 
  ingredients: ["Poisson frais 1kg", "Mbongo spice 100g", "Huile de palme 3 cuillères à soupe", "Oignons 2", "Tomates fraîches 3", "Ail 5 gousses", "Gingembre 3cm", "MAGGI Crevette 2", "Piment rouge 2", "Basilic africain"],
  instructions: "Griller légèrement le poisson. Faire une sauce noire avec les épices mbongo, tomates et aromates. Y cuire le poisson délicatement pendant 45 minutes.",
  tags: ["plat principal", "poisson", "épicé"],
  image: "https://example.com/mbongo-tchobi.jpg"
},

{
  id: 8,
  name: "Sangah",
  cuisine: "Camerounaise",
  difficulty: "Moyen",
  cookTime: "1h",
  ingredients: ["Maïs pilé 500g", "Feuilles de manioc 400g", "Huile de palme 4 cuillères à soupe", "Poisson fumé 150g", "Crevettes séchées 80g", "MAGGI Crevette 2", "Piment rouge 2", "Ail 3 gousses", "Eau 300ml"],
  instructions: "Mélanger le maïs pilé avec l'eau pour former une pâte. Préparer les feuilles de manioc avec le poisson et les épices. Mélanger et cuire ensemble 45 minutes.",
  tags: ["plat principal", "traditionnel", "consistant"],
  image: "https://example.com/sangah.jpg"
},

{
  id: 9,
  name: "Kondre de Plantain",
  cuisine: "Camerounaise", 
  difficulty: "Facile",
  cookTime: "30 mins",
  ingredients: ["Plantains mûrs 4", "Sardines en boîte 2", "Huile végétale 2 cuillères à soupe", "Oignons 2", "Tomates 2", "MAGGI Chicken 2", "Ail 2 gousses", "Persil frais", "Piment rouge 1"],
  instructions: "Couper les plantains en rondelles et les faire dorer. Préparer une sauce avec sardines, tomates et oignons. Mélanger délicatement avec les plantains.",
  tags: ["plat principal", "facile", "rapide"],
  image: "https://example.com/kondre-plantain.jpg"
},

{
  id: 10,
  name: "Water Fufu avec Eru",
  cuisine: "Camerounaise",
  difficulty: "Moyen", 
  cookTime: "1h 20 mins",
  ingredients: ["Farine de garri 300g", "Water leaves 400g", "Coco yam 200g", "Poisson séché 150g", "Huile de palme 3 cuillères à soupe", "MAGGI Crevette 2", "Piment scotch bonnet 1", "Crayfish 50g", "Eau chaude 500ml"],
  instructions: "Préparer le fufu avec la farine de garri et l'eau chaude. Cuire les water leaves avec le poisson et assaisonnements. Servir le fufu avec l'eru comme accompagnement.",
  tags: ["plat principal", "traditionnel", "accompagnement"],
  image: "https://example.com/water-fufu-eru.jpg"
}
//   {
//    id: 2, 
//     name: "Eru fives star", // VOTRE recette familiale 
//     cuisine: "Camerounaise", // VOTRE culture 
//     difficulty: "Moyen", // Facile/Moyen/Difficile 
//     cookTime: "45 mins", 
//     ingredients: ["Épinards 500g", "water leaves 500g", "boeuf 200g","Poisson fumé 200g","écrevisses 100g","d'eau 1/2L","MAGGI Crevette 2","Huile de palme 2cuire a soup"], // VOS ingrédients 
//     instructions: "Mélanger les ingrédients secs...", // VOS étapes 
//     tags: ["petit-déjeuner", "sucré"], 
//     image: "https://example.com/crepes.jpg",
//     },
];