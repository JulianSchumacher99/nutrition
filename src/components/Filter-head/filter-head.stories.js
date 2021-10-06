import "./filter-head.css";
import filterheadfood from "./filter-head-food.html";
import filterheadrecipes from "./filter-head-recipes.html";

export default {
  title: "Components/Filter-head",
  parameters: { layout: "centered" },
};

export const FilterFood = () => filterheadfood;
export const FilterRecipes = () => filterheadrecipes;
