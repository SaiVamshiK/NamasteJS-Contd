import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
    return (
        <React.Fragment>
            <h1>About Us Page</h1>
            <p>This is the Namaste React live course</p>
            <Outlet/>
        </React.Fragment>
    );
};

export default About;