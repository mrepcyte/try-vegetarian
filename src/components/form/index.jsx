import React, { useState, useEffect } from "react";
import {
    Container,
    FoodBoxHeader,
    FormQuestions,
    H2,
    P,
    Label,
    Input,
    Dropdown,
    Option,
    Search,
    RenderRecipe,
    RecipeTitle,
    RecipeImg,
    RecipeP,
    RecipeButton,
    Bold,
    A,
} from "./styles";

const FormComponent = () => {
    const presentationRecipe = {
        count: 1,
        recipe: {
            label: "the name for your recipe!",
            calories: "1200",
            ingredientLines: ["2 spoons of magic", "2 spoons of sugar", "a little bit of flair"],
            totalNutrients: {
                PROCNT: {
                    title: "protein",
                    quantity: 1,
                },
                FAT: {
                    title: "fat",
                    quantity: 1,
                },
                CHOCDF: {
                    title: "carbs",
                    quantity: 1,
                },
            },
        },
    };

    const [enteredCalories, setEnteredCalories] = useState("100");
    const [enteredMealType, setEnteredMealType] = useState("breakfast");
    const [enteredDishType, setEnteredDishType] = useState("starter");

    //these are all fetched recipes (10) according to selected calories and selected meal type:
    const [recipes, setRecipes] = useState([]);
    //this will be one recipe suggested to the user:
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
        console.log(recipes);
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
        setRenderedRecipe(
            userSelectedRecipe[Math.floor(Math.random() * userSelectedRecipe.length)]
        );
    };

    return (
        <Container>
            <FormQuestions>
                <H2>pick your meal ✨</H2>
                <P>
                    If you ever wanted to try vegetarian diet, we are here to help you. Please enter
                    select the approximate amount of calories you would expect your meal to have and
                    what kind of meal that is - energetic breakfast, nutritious lunch or maybe light
                    dinner? We will present you with vegetarian meals packed with nutrition.
                </P>
                <Label htmlFor="calories">Minimum amount of calories: </Label>
                <Input
                    type="number"
                    name="calories"
                    value={enteredCalories}
                    autoComplete="off"
                    min="10"
                    max="3500"
                    onChange={caloriesChangeHandler}
                />
                <Label htmlFor="mealType">I want to eat this for... </Label>
                <Dropdown
                    id="mealType"
                    name="mealType"
                    value={enteredMealType}
                    onChange={mealTypeChangeHandler}
                >
                    <Option value="breakfast">breakfast</Option>
                    <Option value="brunch">brunch</Option>
                    <Option value="lunch/dinner">lunch/dinner</Option>
                </Dropdown>
                <Label htmlFor="dishType">Dish type:</Label>
                <Dropdown
                    id="dishType"
                    name="dishType"
                    value={enteredDishType}
                    onChange={dishTypeChangeHandler}
                >
                    <Option value="starter">starter</Option>
                    <Option value="main course">main course</Option>
                    <Option value="dessert">dessert</Option>
                    <Option value="drinks">drinks</Option>
                </Dropdown>
                <Search type="submit" onClick={recipeRenderHandler}>
                    search
                </Search>
            </FormQuestions>
            <RenderRecipe>
                {recipeNotFound ? (
                    <>
                        <H2>
                            <FoodBoxHeader />
                        </H2>
                        <RecipeTitle>Recipe not found 😔 </RecipeTitle>
                        <RecipeP>
                            We apologize, but we haven't been able to find a recipe that would
                            correspond to your selected parameters. Not to worry, we're constantly
                            updating our database - please make sure to check later! In the
                            meantime, check out this recipe of spinach lasagna:
                        </RecipeP>
                        <a
                            href="https://www.delish.com/cooking/recipe-ideas/recipes/a55655/easy-spinach-lasagna-recipe/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <RecipeImg
                                src="https://hips.hearstapps.com/del.h-cdn.co/assets/17/38/2048x1365/gallery-1506010503-spinach-lasagna-delish.jpg?resize=980:*"
                                alt="spinach lasagna"
                            />
                        </a>
                    </>
                ) : (
                    <>
                        <H2>
                            <FoodBoxHeader />
                        </H2>
                        <RecipeTitle>{renderedRecipe.recipe.label.toLowerCase()}</RecipeTitle>
                        <RecipeP>
                            <Bold>Calories:</Bold> {Math.round(renderedRecipe.recipe.calories)}
                        </RecipeP>
                        <RecipeP>
                            <Bold>Ingredients: </Bold>
                            {renderedRecipe.recipe.ingredientLines.join(", ")}
                        </RecipeP>
                        <RecipeP>
                            <Bold>Proteins: </Bold>
                            {Math.round(
                                renderedRecipe["recipe"]["totalNutrients"]["PROCNT"]["quantity"]
                            )}
                        </RecipeP>
                        <RecipeP>
                            <Bold>Fat: </Bold>
                            {Math.round(
                                renderedRecipe["recipe"]["totalNutrients"]["FAT"]["quantity"]
                            )}
                        </RecipeP>
                        <RecipeP>
                            <Bold>Carbs: </Bold>
                            {Math.round(
                                renderedRecipe["recipe"]["totalNutrients"]["CHOCDF"]["quantity"]
                            )}
                        </RecipeP>
                        <RecipeP>
                            <A href={renderedRecipe.recipe.url} target="_blank" rel="noreferrer">
                                Click here for detailed recipe instructions
                            </A>
                        </RecipeP>
                        <RecipeButton onClick={recipeRenderHandler}>
                            give me another recipe
                        </RecipeButton>
                    </>
                )}
            </RenderRecipe>
        </Container>
    );
};

export default FormComponent;
