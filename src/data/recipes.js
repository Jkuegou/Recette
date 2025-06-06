// export const recipes = [ 
// { 
// id: 1, 
// name: "Crêpes de Grand-mère", // VOTRE recette familiale 
//     cuisine: "Française", // VOTRE culture 
//     difficulty: "Facile", // Facile/Moyen/Difficile 
//     cookTime: "20 mins", 
//     ingredients: ["2 tasses de farine", "2 œufs", "1 tasse de lait"], // VOS ingrédients 
//     instructions: "Mélanger les ingrédients secs...", // VOS étapes 
//     tags: ["petit-déjeuner", "sucré"], 
//     image: "https://example.com/crepes.jpg",
    
//   }, 
//   {
//   id: 3,
//   name: "Ndolé Traditionnel",
//   cuisine: "Camerounaise",
//   difficulty: "Difficile",
//   cookTime: "2h 30 mins",
//   ingredients: ["Feuilles de ndolé 500g", "Arachides crues 200g", "Bœuf 300g", "Poisson fumé 150g", "Crevettes séchées 100g", "Huile de palme 3 cuillères à soupe", "MAGGI Crevette 2", "Ail 3 gousses", "Gingembre 1 morceau", "Piment rouge frais 2"],
//   instructions: "Faire bouillir et piler les arachides. Nettoyer les feuilles de ndolé. Faire revenir la viande, ajouter les feuilles, puis les arachides pilées et laisser mijoter 2h.",
//   tags: ["plat principal", "traditionnel", "festif"],
//   image: "https://eatthisny.com/wp-content/uploads/2022/04/20210426_181634-1024x819.jpeg"
// },

// {
//   id: 4,
//   name: "Poulet DG",
//   cuisine: "Camerounaise", 
//   difficulty: "Moyen",
//   cookTime: "1h 15 mins",
//   ingredients: ["Poulet entier 1kg", "Plantains mûrs 3", "Haricots verts 200g", "Carotte 2", "Poivron rouge 1", "Huile végétale 4 cuillères à soupe", "MAGGI Chicken 3", "Ail 4 gousses", "Gingembre frais 2cm", "Piment scotch bonnet 1"],
//   instructions: "Découper et assaisonner le poulet. Le faire dorer. Couper les légumes et plantains en bâtonnets. Tout faire sauter ensemble avec les épices jusqu'à cuisson complète.",
//   tags: ["plat principal", "festif", "légumes"],
//   image: "https://images.unsplash.com/photo-1598515213692-d823dee3c2c4?w=400&h=300&fit=crop"
// },

// {
//   id: 5,
//   name: "Koki de Maïs",
//   cuisine: "Camerounaise",
//   difficulty: "Moyen", 
//   cookTime: "1h 30 mins",
//   ingredients: ["Maïs frais 4 épis", "Huile de palme 3 cuillères à soupe", "Feuilles de bananier", "Crevettes séchées 50g", "MAGGI Crevette 2", "Piment rouge séché 2", "Sel 1 pincée", "Eau 200ml"],
//   instructions: "Égrener et mixer le maïs avec un peu d'eau. Mélanger avec l'huile de palme, les crevettes et assaisonnements. Emballer dans les feuilles de bananier et cuire à la vapeur 1h30.",
//   tags: ["accompagnement", "traditionnel", "vapeur"],
//   image: "https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?w=400&h=300&fit=crop"
// },

// {
//   id: 6,
//   name: "Achu Soup",
//   cuisine: "Camerounaise",
//   difficulty: "Difficile",
//   cookTime: "2h",
//   ingredients: ["Coco yam 1kg", "Viande de bœuf 500g", "Poisson fumé 200g", "Huile de palme 4 cuillères à soupe", "Feuilles de légume 300g", "Limestone water 2 cuillères à soupe", "MAGGI Crevette 3", "Piment jaune 3", "Crayfish 100g"],
//   instructions: "Cuire et piler le coco yam avec limestone water. Préparer une sauce avec la viande, poisson et légumes. Servir la pâte avec la sauce riche en huile de palme.",
//   tags: ["plat principal", "traditionnel", "northwest"],
//   image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop"
// },

// {
//   id: 7,
//   name: "Mbongo Tchobi",
//   cuisine: "Camerounaise",
//   difficulty: "Difficile",
//   cookTime: "1h 45 mins", 
//   ingredients: ["Poisson frais 1kg", "Mbongo spice 100g", "Huile de palme 3 cuillères à soupe", "Oignons 2", "Tomates fraîches 3", "Ail 5 gousses", "Gingembre 3cm", "MAGGI Crevette 2", "Piment rouge 2", "Basilic africain"],
//   instructions: "Griller légèrement le poisson. Faire une sauce noire avec les épices mbongo, tomates et aromates. Y cuire le poisson délicatement pendant 45 minutes.",
//   tags: ["plat principal", "poisson", "épicé"],
//   image: "https://example.com/mbongo-tchobi.jpg"
// },

// {
//   id: 8,
//   name: "Sangah",
//   cuisine: "Camerounaise",
//   difficulty: "Moyen",
//   cookTime: "1h",
//   ingredients: ["Maïs pilé 500g", "Feuilles de manioc 400g", "Huile de palme 4 cuillères à soupe", "Poisson fumé 150g", "Crevettes séchées 80g", "MAGGI Crevette 2", "Piment rouge 2", "Ail 3 gousses", "Eau 300ml"],
//   instructions: "Mélanger le maïs pilé avec l'eau pour former une pâte. Préparer les feuilles de manioc avec le poisson et les épices. Mélanger et cuire ensemble 45 minutes.",
//   tags: ["plat principal", "traditionnel", "consistant"],
//   image: "https://example.com/sangah.jpg"
// },

// {
//   id: 9,
//   name: "Kondre de Plantain",
//   cuisine: "Camerounaise", 
//   difficulty: "Facile",
//   cookTime: "30 mins",
//   ingredients: ["Plantains mûrs 4", "Sardines en boîte 2", "Huile végétale 2 cuillères à soupe", "Oignons 2", "Tomates 2", "MAGGI Chicken 2", "Ail 2 gousses", "Persil frais", "Piment rouge 1"],
//   instructions: "Couper les plantains en rondelles et les faire dorer. Préparer une sauce avec sardines, tomates et oignons. Mélanger délicatement avec les plantains.",
//   tags: ["plat principal", "facile", "rapide"],
//   image: "https://example.com/kondre-plantain.jpg"
// },

// {
//   id: 10,
//   name: "Water Fufu avec Eru",
//   cuisine: "Camerounaise",
//   difficulty: "Moyen", 
//   cookTime: "1h 20 mins",
//   ingredients: ["Farine de garri 300g", "Water leaves 400g", "Coco yam 200g", "Poisson séché 150g", "Huile de palme 3 cuillères à soupe", "MAGGI Crevette 2", "Piment scotch bonnet 1", "Crayfish 50g", "Eau chaude 500ml"],
//   instructions: "Préparer le fufu avec la farine de garri et l'eau chaude. Cuire les water leaves avec le poisson et assaisonnements. Servir le fufu avec l'eru comme accompagnement.",
//   tags: ["plat principal", "traditionnel", "accompagnement"],
//   image: "https://example.com/water-fufu-eru.jpg"
// }
// //   {
// //    id: 2, 
// //     name: "Eru fives star", // VOTRE recette familiale 
// //     cuisine: "Camerounaise", // VOTRE culture 
// //     difficulty: "Moyen", // Facile/Moyen/Difficile 
// //     cookTime: "45 mins", 
// //     ingredients: ["Épinards 500g", "water leaves 500g", "boeuf 200g","Poisson fumé 200g","écrevisses 100g","d'eau 1/2L","MAGGI Crevette 2","Huile de palme 2cuire a soup"], // VOS ingrédients 
// //     instructions: "Mélanger les ingrédients secs...", // VOS étapes 
// //     tags: ["petit-déjeuner", "sucré"], 
// //     image: "https://example.com/crepes.jpg",
// //     },
// ];

export const recipes = [ 
  { 
    id: 1, 
    name: "Crêpes de Grand-mère",
    cuisine: "Française",  
    difficulty: "Facile",
    cookTime: "20 mins", 
    ingredients: ["2 tasses de farine", "2 œufs", "1 tasse de lait"], 
    instructions: "Mélanger les ingrédients secs, puis ajouter les œufs et le lait progressivement. Battre jusqu'à obtenir une pâte lisse. Laisser reposer 30 minutes puis cuire dans une poêle chaude.", 
    tags: ["petit-déjeuner", "sucré"], 
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&h=300&fit=crop",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Exemple de vidéo
    nutrition: {
      calories: 180,
      protein: "8g",
      carbs: "25g",
      fat: "6g",
      fiber: "2g",
      sugar: "5g"
    },
    rating: 4.5,
    totalRatings: 12
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
    image: "https://eatthisny.com/wp-content/uploads/2022/04/20210426_181634-1024x819.jpeg",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    nutrition: {
      calories: 485,
      protein: "32g",
      carbs: "18g", 
      fat: "35g",
      fiber: "8g",
      sugar: "4g"
    },
    rating: 4.8,
    totalRatings: 25
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
    image: "https://images.unsplash.com/photo-1598515213692-d823dee3c2c4?w=400&h=300&fit=crop",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    nutrition: {
      calories: 420,
      protein: "28g",
      carbs: "35g",
      fat: "22g", 
      fiber: "6g",
      sugar: "15g"
    },
    rating: 4.3,
    totalRatings: 18
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
    image: "https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?w=400&h=300&fit=crop",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    nutrition: {
      calories: 320,
      protein: "12g",
      carbs: "45g",
      fat: "12g",
      fiber: "5g", 
      sugar: "8g"
    },
    rating: 4.1,
    totalRatings: 9
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
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    nutrition: {
      calories: 520,
      protein: "35g",
      carbs: "42g",
      fat: "28g",
      fiber: "7g",
      sugar: "6g"
    },
    rating: 4.6,
    totalRatings: 14
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
    image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=400&h=300&fit=crop",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    nutrition: {
      calories: 380,
      protein: "45g", 
      carbs: "8g",
      fat: "18g",
      fiber: "3g",
      sugar: "5g"
    },
    rating: 4.7,
    totalRatings: 21
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
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    nutrition: {
      calories: 445,
      protein: "20g",
      carbs: "58g",
      fat: "16g",
      fiber: "9g",
      sugar: "3g"
    },
    rating: 3.9,
    totalRatings: 11
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
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    nutrition: {
      calories: 350,
      protein: "18g",
      carbs: "48g", 
      fat: "12g",
      fiber: "4g",
      sugar: "22g"
    },
    rating: 4.2,
    totalRatings: 16
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
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    nutrition: {
      calories: 395,
      protein: "15g",
      carbs: "65g",
      fat: "10g",
      fiber: "12g",
      sugar: "4g"
    },
    rating: 4.4,
    totalRatings: 13
  }
];