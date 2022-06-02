import React from "react";
import locale from "../../locale";
import { Footer, FooterP } from "./styles";

const FooterComponent = () => {
    return (
        <Footer>
            <FooterP>{locale.FOOTER_MESSAGE}</FooterP>
        </Footer>
    );
};

export default FooterComponent;
