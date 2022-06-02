import styled from "styled-components";

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

export const RenderRecipe = styled.div`
    padding-left: 20px;
    width: 47%;
    height: 100%;

    @media (max-width: 860px) {
        width: 90%;
    }
`;
