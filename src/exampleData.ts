import {groupTypes, Ingredient} from './models/Ingredient';
import {MacroNutrients} from './models/MacroNutrients';

// alimentos segundo plato
export const rice = new Ingredient("Arroz", 2, 300, "La Laguna",
    groupTypes.Cereal, new MacroNutrients(57, 9, 18.1));

export const chicken = new Ingredient("Pollo", 2, 300, "La Laguna",
    groupTypes.Meat, new MacroNutrients(57, 9, 18.1));

export const CowMeat = new Ingredient("Carne", 2, 300, "La Laguna",
    groupTypes.Meat, new MacroNutrients(57, 9, 18.1));

export const rabbit = new Ingredient("Conejo", 2, 300, "La Laguna",
    groupTypes.Meat, new MacroNutrients(57, 9, 18.1));

export const quinoa = new Ingredient("quinoa", 2, 300, "La Laguna",
    groupTypes.Cereals, new MacroNutrients(57, 9, 18.1));

export const tofu = new Ingredient("Tofu", 2, 300, "La Laguna",
    groupTypes.Cereals, new MacroNutrients(57, 9, 18.1));

export const pasta = new Ingredient("Pasta", 2, 300, "La Laguna",
    groupTypes.Cereals, new MacroNutrients(57, 9, 18.1));

export const albondigas = new Ingredient("Albondiga", 2, 300, "La Laguna",
    groupTypes.Meat, new MacroNutrients(57, 9, 18.1));

export const berenjenas = new Ingredient("Berenjena", 2, 300, "La Laguna",
    groupTypes.Vegetables, new MacroNutrients(57, 9, 18.1));

export const calabacin = new Ingredient("Calabacin", 2, 300, "La Laguna",
    groupTypes.Vegetables, new MacroNutrients(57, 9, 18.1));

export const pescado = new Ingredient("Pescado", 2, 300, "La Laguna",
    groupTypes.Meat, new MacroNutrients(57, 9, 18.1));


