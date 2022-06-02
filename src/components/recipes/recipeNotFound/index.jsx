import React from "react";
import locale from "../../../locale";
import { H2, FoodBoxHeader, RecipeTitle, RecipeP, BigRecipeImg } from "../styles";

const RecipeNotFound = () => {
    return (
        <>
            <H2>
                <FoodBoxHeader />
            </H2>
            <RecipeTitle>{locale.MISSING_RECIPE_TITLE}</RecipeTitle>
            <RecipeP>{locale.MISSING_RECIPE_TEXT}</RecipeP>
            <a
                href="https://www.delish.com/cooking/recipe-ideas/recipes/a55655/easy-spinach-lasagna-recipe/"
                target="_blank"
                rel="noreferrer"
            >
                <BigRecipeImg
                    src="https://hips.hearstapps.com/del.h-cdn.co/assets/17/38/2048x1365/gallery-1506010503-spinach-lasagna-delish.jpg?resize=980:*"
                    alt="spinach lasagna"
                />
            </a>
        </>
    );
};

export default RecipeNotFound;
