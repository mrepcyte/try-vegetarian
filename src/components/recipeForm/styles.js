import styled from "styled-components";

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

    @media (max-width: 460px) {
        font-size: 22px;
    }
`;

export const P = styled.p`
    text-align: justify;
    font-size: 16px;
    padding-right: 18px;

    @media (max-width: 560px) {
        font-size: 14px;
    }
`;

export const Label = styled.label`
    font-size: 16px;

    @media (max-width: 560px) {
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

    @media (max-width: 560px) {
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
    -webkit-appearance: none;

    &:focus {
        outline-color: #bbddc6;
    }

    @media (max-width: 560px) {
        font-size: 16px;
        margin: 6px 0;
        padding: 6px;
    }
`;

export const Option = styled.option`
    font-family: inherit;

    @media (max-width: 560px) {
        font-size: 14px;
    }
`;

export const Search = styled.button`
    background: #bbddc6;
    border: 2px solid #000;
    border-radius: 12px;
    font-size: 16px;
    padding: 10px;
    text-transform: uppercase;
    margin: 10px 0 20px 0;
    cursor: pointer;
    transition: 0.4s;

    @media (max-width: 560px) {
        font-size: 14px;
        padding: 6px;
    }

    &:hover {
        background-color: honeydew;
    }
`;
