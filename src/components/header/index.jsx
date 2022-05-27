import React from "react";
import { Header, H1, Icon } from "./styles";

const HeaderComponent = () => {
    return (
        <Header>
            <Icon />
            <H1>try vegetarian</H1>
            <nav className="navBar">
                {/* <button>hey</button> */}
                <ul>
                    <li>about us</li>
                    <li>vegetarian</li>
                    <li>vegan</li>
                </ul>
            </nav>
        </Header>
    );
};

export default HeaderComponent;
