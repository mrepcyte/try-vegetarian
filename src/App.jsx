import React from "react";
import { GlobalStyle } from "./styles";
import HeaderComponent from "./components/header";
import MainComponent from "./components/main";
import FooterComponent from "./components/footer";

const App = () => {
    return (
        <>
            <GlobalStyle />
            <HeaderComponent />
            <MainComponent />
            <FooterComponent />
        </>
    );
};

export default App;
