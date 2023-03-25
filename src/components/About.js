import React from "react";
import Profile from './Profile';
import ProfileClass from "./ProfileClass";

const About = () => {
    return (
        <React.Fragment>
            <h1>About Us Page</h1>
            <p>This is the Namaste React live course</p>
            <Profile name={"Vamshi"}/>
            <ProfileClass name={"Vamshi Class"}/>
        </React.Fragment>
    );
};

export default About;