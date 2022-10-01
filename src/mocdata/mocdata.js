export const category = [
  {
    id: "c1",
    name: "meat",
    description: "meat",
  },
  {
    id: "c2",
    name: "vegetables",
    description: "vegetables",
  },
  {
    id: "c3",
    name: "dry",
    description: "dry",
  },
];

export const measureType = {
  m1: {
    id: "m1",
    measureName: "units",
    mesureShort: "",
  },
  m2: {
    id: "m2",
    measureName: "gram",
    measureShort: "g.",
  },
  m3: {
    id: "m3",
    measureName: "liter",
    measureShort: "l.",
  },
};

export const ingredient = [
  {
    id: "i1",
    name: "egg",
    categoryId: "c3",
    measureTypeId: "m1",
    amount: 8,
  },
  {
    id: "i2",
    name: "beef antricot",
    categoryId: "c1",
    measureTypeId: "m2",
    amount: 0,
  },
  {
    id: "i3",
    name: "chicken breast",
    categoryId: "c1",
    measureTypeId: "m2",
    amount: 200,
  },
];

export const mocRecipes = [
  {
    id: "r1",
    imageURL:
      "https://media-cdn.tripadvisor.com/media/photo-s/0e/80/e1/fc/great-stake-perfectly.jpg",
    title: "stake",
    description: "description",
    keyword: ["string"],
    ingredients: [
      {
        ingredientId: "i2",
        amount: 300,
      },
    ],
  },
  {
    id: "r2",
    imageURL:
      "https://www.inspiredtaste.net/wp-content/uploads/2016/07/Pancake-Recipe-2-1200.jpg",
    title: "pancakes",
    description: "description",
    keyword: ["string"],
    ingredients: [
      {
        ingredientId: "i1",
        amount: 3,
      },
    ],
  },
  {
    id: "r3",
    imageURL:
      "https://www.kitchensanctuary.com/wp-content/uploads/2015/02/Chicken-Shawarma-square-FS-57.jpg",
    title: "shawarma",
    description: "description",
    keyword: ["string"],
    ingredients: [
      {
        ingredientId: "i3",
        amount: 750,
      },
    ],
  },
  {
    id: "r4",
    imageURL:
      "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/2020_belgian-style-waffles_16700_760x580.jpg?ext=.jpg",
    title: "waffles",
    description: "description",
    keyword: ["string"],
    ingredients: [
      {
        ingredientId: "i1",
        amount: 2,
      },
    ],
  },
];
