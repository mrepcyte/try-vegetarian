import React from "react";
import locale from "../../../locale";
import { H2, FoodBoxHeader, RecipeTitle, RecipeP, Bold, A } from "../styles";

const RecipeFound = ({ data }) => {
    return (
        <>
            <H2>
                <FoodBoxHeader />
            </H2>
            <RecipeTitle>{data.recipe.label.toLowerCase()}</RecipeTitle>
            <RecipeP>
                <Bold>{locale.CALORIES}:&nbsp;</Bold>
                {Math.round(data.recipe.calories)}
            </RecipeP>
            <RecipeP>
                <Bold>{locale.INGREDIENTS}:&nbsp;</Bold>
                {data.recipe.ingredientLines.join(", ")}
            </RecipeP>
            <RecipeP>
                <Bold>{locale.PROTEINS}:&nbsp;</Bold>
                {Math.round(data["recipe"]["totalNutrients"]["PROCNT"]["quantity"])}
            </RecipeP>
            <RecipeP>
                <Bold>{locale.FAT}:&nbsp;</Bold>
                {Math.round(data["recipe"]["totalNutrients"]["FAT"]["quantity"])}
            </RecipeP>
            <RecipeP>
                <Bold>{locale.CARBS}:&nbsp;</Bold>
                {Math.round(data["recipe"]["totalNutrients"]["CHOCDF"]["quantity"])}
            </RecipeP>
            <RecipeP>
                <A href={data.recipe.url} target="_blank" rel="noreferrer">
                    {locale.RECIPE_LINK}
                </A>
            </RecipeP>
        </>
    );
};

export default RecipeFound;
