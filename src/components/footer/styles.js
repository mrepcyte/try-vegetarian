import styled from "styled-components";

export const Footer = styled.footer`
    height: 30px;
    padding: 14px;
    background-color: #bbddc6;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const FooterP = styled.p`
    padding: 10px;
    text-transform: uppercase;
    font-size: 14px;

    @media (max-width: 690px) {
        font-size: 12px;
    }

    @media (max-width: 420px) {
        font-size: 10px;
    }
`;
