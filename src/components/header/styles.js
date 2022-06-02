import styled from "styled-components";
import { ReactComponent as FoodIcon } from "../../assets/food-icon.svg";

export const Header = styled.header`
    font-family: "Koulen", cursive;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    padding: 0 20px;
    border-bottom: 2px dashed #fff;
    box-shadow: 0 4px 2px 0 #ccc;

    @media (max-width: 690px) {
        justify-content: center;
    }
`;

export const H1 = styled.h1`
    font-size: 48px;
    transition: 0.8s ease-in;

    &:hover {
        color: #89bc00;
    }

    @media (max-width: 690px) {
        font-size: 42px;
    }
`;

export const Icon = styled(FoodIcon)`
    width: 50px;

    @media (max-width: 690px) {
        display: none;
    }
`;
