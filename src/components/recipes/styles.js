import styled from "styled-components";
import { ReactComponent as FoodBox } from "../../assets/food-box.svg";

export const H2 = styled.h2`
    font-size: 28px;
    font-weight: 500;
    text-align: center;

    @media (max-width: 560px) {
        font-size: 22px;
    }
`;

export const FoodBoxHeader = styled(FoodBox)`
    text-align: center;
    width: 50px;
    height: auto;

    @media (max-width: 560px) {
        margin-top: 10px;
    }
`;

export const RecipeTitle = styled.p`
    text-align: center;
    font-size: 20px;

    @media (max-width: 560px) {
        font-size: 18px;
    }
`;

export const RecipeP = styled.p`
    font-size: 15px;

    @media (max-width: 680px) {
        font-size: 14px;
    }

    @media (max-width: 560px) {
        font-size: 13px;
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

    @media (max-width: 560px) {
        font-size: 14px;
        padding: 6px;
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

    @media (max-width: 680px) {
        font-size: 14px;
    }

    @media (max-width: 560px) {
        font-size: 12px;
    }
`;

export const SuggestionsContainer = styled.div`
    box-sizing: border-box;
    margin: 16px auto;
    border: 2px solid #000;
    border-radius: 12px;
    box-shadow: 8px 6px #bbddc6;
    padding: 20px;
    height: auto;
    width: 90vw;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const RecipeCard = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: auto;
    width: 29%;
    margin: 12px;
    padding: 8px 10px;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: #f5f5f5;

    @media (max-width: 890px) {
        width: 33%;
        margin: 10px;
    }
`;

export const ListTitle = styled.h2`
    font-size: 30px;
    font-weight: 400;
    text-align: center;
    margin: 0 0 26px 0;
    color: #46a46c;
`;

export const SmallRecipeTitle = styled.h3`
    font-size: 16px;
    text-align: center;

    @media (max-width: 890px) {
        font-size: 14px;
    }

    @media (max-width: 560px) {
        font-size: 12px;
    }
`;

export const RecipeImg = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    object-position: center;

    @media (max-width: 890px) {
        width: 150px;
        height: 150px;
    }

    @media (max-width: 680px) {
        width: 100px;
        height: 100px;
    }
`;
