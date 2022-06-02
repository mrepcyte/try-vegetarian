import React from "react";
import locale from "../../locale";
import { FormQuestions, H2, P, Label, Input, Dropdown, Option, Search } from "./styles";

const RecipeForm = ({
    calories,
    onChangeCalories,
    mealType,
    onChangeMealType,
    dishType,
    onChangeDishType,
    onClickHandler,
}) => {
    return (
        <FormQuestions>
            <H2>{locale.FORM_TITLE}</H2>
            <P>
                If you ever wanted to try vegetarian diet, we are here to help you. Please enter
                select the approximate amount of calories you would expect your meal to have and
                what kind of meal that is - energetic breakfast, nutritious lunch or maybe light
                dinner? We will present you with vegetarian meals packed with nutrition.
            </P>
            <Label htmlFor="calories">{locale.FORM_MIN_CALORIES} </Label>
            <Input
                type="number"
                name="calories"
                value={calories}
                autoComplete="off"
                min="10"
                max="3500"
                onChange={onChangeCalories}
            />
            <Label htmlFor="mealType">{locale.FORM_MEAL}</Label>
            <Dropdown id="mealType" name="mealType" value={mealType} onChange={onChangeMealType}>
                <Option value="breakfast">{locale.OPTION_BREAKFAST}</Option>
                <Option value="brunch">{locale.OPTION_BRUNCH}</Option>
                <Option value="lunch/dinner">{locale.OPTION_LUNCH}</Option>
            </Dropdown>
            <Label htmlFor="dishType">{locale.FORM_DISH}</Label>
            <Dropdown id="dishType" name="dishType" value={dishType} onChange={onChangeDishType}>
                <Option value="starter">{locale.OPTION_STARTER}</Option>
                <Option value="main course">{locale.OPTION_MAIN}</Option>
                <Option value="dessert">{locale.OPTION_DESSERT}</Option>
                <Option value="drinks">{locale.OPTION_DRINKS}</Option>
            </Dropdown>
            <Search type="submit" onClick={onClickHandler}>
                {locale.SEARCH}
            </Search>
        </FormQuestions>
    );
};

export default RecipeForm;
