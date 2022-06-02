import React from "react";
import locale from "../../../locale";
import {
    SuggestionsContainer,
    CardContainer,
    RecipeCard,
    ListTitle,
    RecipeImg,
    Bold,
    RecipeP,
    SmallRecipeTitle,
    A,
} from "../styles";

const RecipeSuggestions = ({ data }) => {
    return (
        <SuggestionsContainer>
            <ListTitle>{locale.SUGGESTIONS}</ListTitle>
            <CardContainer>
                {data.map((recipe) => (
                    <RecipeCard key={recipe.recipe.label}>
                        <SmallRecipeTitle>{recipe.recipe.label.toLowerCase()}</SmallRecipeTitle>
                        <RecipeImg
                            src={recipe.recipe.image}
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src =
                                    "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80";
                            }}
                            alt="recipe illustration"
                        />
                        <RecipeP>
                            <Bold>{locale.CALORIES}:</Bold> {Math.round(recipe.recipe.calories)}
                        </RecipeP>
                        <A href={recipe.recipe.url} target="_blank" rel="noreferrer">
                            {locale.RECIPE_SMALL_LINK}
                        </A>
                    </RecipeCard>
                ))}
            </CardContainer>
        </SuggestionsContainer>
    );
};

export default RecipeSuggestions;
