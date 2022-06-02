import React from "react";
import locale from "../../locale";
import { Header, H1, Icon } from "./styles";

const HeaderComponent = () => {
    return (
        <Header>
            <Icon />
            <H1>{locale.PROJECT_NAME}</H1>
            <Icon />
        </Header>
    );
};

export default HeaderComponent;
