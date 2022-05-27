import React, { useState, useEffect } from "react";
import { GlobalStyle } from "./styles";
import HeaderComponent from "./components/header";
import HeroComponent from "./components/hero";
import FormComponent from "./components/form";
import ImageComponent from "./components/image";
import FooterComponent from "./components/footer";

const App = () => {
    return (
        <>
            <GlobalStyle />
            <HeaderComponent />
            <HeroComponent />
            <FormComponent />
            <ImageComponent />
            <FooterComponent />
        </>
    );
};

export default App;
