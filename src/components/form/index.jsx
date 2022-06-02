import React, { useState, useEffect } from "react";
import { Container, RenderRecipe } from "./styles";
import RecipeNotFound from "../recipes/recipeNotFound";
import RecipeFound from "../recipes/recipeFound";
import RecipeForm from "../recipeForm";
import RecipeSuggestions from "../recipes/recipeSuggestions";
import { presentationRecipe } from "./data";

const FormComponent = ({ children }) => {
    const [enteredCalories, setEnteredCalories] = useState("100");
    const [enteredMealType, setEnteredMealType] = useState("breakfast");
    const [enteredDishType, setEnteredDishType] = useState("starter");
    const [searchTrigger, setSearchTrigger] = useState(false);

    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState(null);
    const [renderedRecipe, setRenderedRecipe] = useState(presentationRecipe);
    const [recipeNotFound, setRecipeNotFound] = useState(false);

    const fetchRecipes = async () => {
        const response = await fetch("data.json");
        const recipes = await response.json();
        setRecipes(recipes.hits);
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    const caloriesChangeHandler = (event) => {
        setEnteredCalories(event.target.value);
    };

    const mealTypeChangeHandler = (event) => {
        setEnteredMealType(event.target.value);
    };

    const dishTypeChangeHandler = (event) => {
        setEnteredDishType(event.target.value);
    };

    const recipeRenderHandler = (event) => {
        event.preventDefault();
        const userSelectedRecipe = recipes.filter(
            (recipe) =>
                recipe.recipe.calories > enteredCalories &&
                recipe.recipe.mealType.includes(enteredMealType) &&
                recipe.recipe.dishType.includes(enteredDishType)
        );
        if (userSelectedRecipe.length === 0) {
            setRecipeNotFound(true);
            return;
        }
        setRecipeNotFound(false);

        const renderRecipe =
            userSelectedRecipe[Math.floor(Math.random() * userSelectedRecipe.length)];
        setRenderedRecipe(renderRecipe);
        setFilteredRecipes(
            userSelectedRecipe.filter((item) => item.recipe.label !== renderRecipe.recipe.label)
        );
        setSearchTrigger(true);
    };

    return (
        <>
            <Container>
                <RecipeForm
                    calories={enteredCalories}
                    onChangeCalories={caloriesChangeHandler}
                    mealType={enteredMealType}
                    onChangeMealType={mealTypeChangeHandler}
                    dishType={enteredDishType}
                    onChangeDishType={dishTypeChangeHandler}
                    onClickHandler={recipeRenderHandler}
                />
                <RenderRecipe>
                    {recipeNotFound ? (
                        <RecipeNotFound />
                    ) : (
                        <RecipeFound data={renderedRecipe} onClickHandler={recipeRenderHandler} />
                    )}
                </RenderRecipe>
            </Container>
            {searchTrigger && filteredRecipes.length > 1 && (
                <RecipeSuggestions data={filteredRecipes}>{children}</RecipeSuggestions>
            )}
        </>
    );
};

export default FormComponent;
