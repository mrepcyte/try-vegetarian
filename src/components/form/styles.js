import styled from "styled-components";
import { ReactComponent as FoodBox } from "../../assets/food-box.svg";

export const Container = styled.div`
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 90vw;
    height: 90vh;
    margin: 16px auto;
    border: 2px solid #000;
    border-radius: 12px;
    box-shadow: 8px 6px #bbddc6;
    padding: 20px;

    @media (max-width: 860px) {
        flex-direction: column;
        height: auto;
    }
`;

export const FoodBoxHeader = styled(FoodBox)`
    text-align: center;
    width: 50px;
    height: auto;
`;

// styles for the Form component:

export const FormQuestions = styled.form`
    width: 50%;
    height: 100%;
    border-right: 2px dotted #000;
    position: relative;

    @media (max-width: 860px) {
        width: 100%;
        border-right: none;
        border-bottom: 2px dotted #000;
    }
`;

export const H2 = styled.h2`
    font-size: 28px;
    font-weight: 500;
    text-align: center;

    @media (max-width: 860px) {
        font-size: 22px;
    }
`;

export const P = styled.p`
    text-align: justify;
    font-size: 16px;
    padding-right: 18px;

    @media (max-width: 860px) {
        font-size: 14px;
    }
`;

export const Label = styled.label`
    font-size: 16px;

    @media (max-width: 860px) {
        font-size: 14px;
    }
`;

export const Input = styled.input`
    display: block;
    border: 2px solid #000;
    font-size: 18px;
    margin: 10px 0;
    padding: 10px;
    width: 50%;

    &:focus {
        outline-color: #bbddc6;
    }

    @media (max-width: 860px) {
        font-size: 16px;
        margin: 6px 0;
        padding: 6px;
    }
`;

export const Dropdown = styled.select`
    display: block;
    border: 2px solid #000;
    margin: 10px 0;
    padding: 10px;
    width: 54%;
    font-family: inherit;
    font-size: 18px;

    &:focus {
        outline-color: #bbddc6;
    }

    @media (max-width: 860px) {
        font-size: 16px;
        margin: 6px 0;
        padding: 6px;
    }
`;

export const Option = styled.option`
    font-family: inherit;

    @media (max-width: 880px) {
        font-size: 14px;
    }
`;

export const Search = styled.button`
    background: #bbddc6;
    border: 2px solid #000;
    border-radius: 12px;
    font-size: 16px;
    padding: 8px;
    text-transform: uppercase;
    margin: 10px 0 20px 0;
    cursor: pointer;

    @media (max-width: 860px) {
        font-size: 14px;
        padding: 6px;
    }
`;

// styles for the Render Recipe component:

export const RenderRecipe = styled.div`
    padding-left: 20px;
    width: 47%;
    height: 100%;

    @media (max-width: 860px) {
        width: 90%;
    }
`;

export const RecipeImg = styled.img`
    height: auto;
    width: 60%;
    border-radius: 12px;
    margin: 10px 0;
`;

export const RecipeButton = styled(Search)`
    float: right;
    font-size: 14px;

    @media (max-width: 860px) {
        font-size: 12px;
    }
`;

// font styles:

export const RecipeTitle = styled.p`
    text-align: center;
    font-size: 20px;

    @media (max-width: 860px) {
        font-size: 18px;
    }
`;

export const RecipeP = styled.p`
    font-size: 15px;

    @media (max-width: 860px) {
        font-size: 13px;
    }
`;

export const Bold = styled.strong`
    font-weight: 700;
    color: #46a46c;
    display: inline-block;
    margin: 0;
`;

export const A = styled.a`
    text-decoration: none;
    text-align: center;
    color: #000;
    border-bottom: 1px solid #46a46c;

    &:hover {
        color: #46a46c;
    }
`;
