import styled from "styled-components";
import { ReactComponent as FoodIcon } from "../../assets/food-icon.svg";

export const Header = styled.header`
    background-color: #bbddc6;
    font-family: "Koulen", cursive;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    border-bottom: 1px dashed #fff;
    padding: 0 20px;
`;

export const H1 = styled.h1`
    font-size: 48px;
`;

export const Icon = styled(FoodIcon)`
    width: 50px;
`;
