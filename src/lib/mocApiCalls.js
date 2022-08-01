import {
  mocRecipes,
  category,
  measureType,
  ingredient,
} from "../mocdata/mocdata";

export function getAllItems() {
  return ingredient;
}

export function getItemsByCat(catId) {
  const result = ingredient.filter((item) => item.categoryId === catId);
  return result;
}

export function getAllRecipes() {
  return mocRecipes;
}

export function getAllCategories() {
  return category;
}

export function getMeasureType(id) {
  return measureType[id];
}

export function getUserInventory() {
  const inventory = localStorage.getItem("inventory");
  if (inventory === undefined) {
    return [];
  }
  return inventory;
}

export function updateUserInventory(updatedInventory) {
  localStorage.setItem("inventory", updatedInventory);
}
