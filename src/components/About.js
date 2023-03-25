import React from "react";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
export class About extends React.Component {
  constructor(props) {
    super(props);
    console.log('About : Constructor called');
  }
  componentDidMount() {
    // Best place to make an API call
    console.log('About : Component Did Mount called');
  }
  render() {
    console.log('About : Render called');
    return (
      <React.Fragment>
        <h1>About Us Page</h1>
        <p>This is the Namaste React live course</p>
        <ProfileClass name={"Vamshi Class"} />
      </React.Fragment>
    );
  }
}

// Sequence of steps
// About.js:7 About : Constructor called - About Component lifecycle
// About.js:14 About : Render called - About Component lifecycle
// ProfileClass.js:12 Class Constructor called - Child Profile Component lifecycle
// ProfileClass.js:23 Class Render called - Child Profile Component lifecycle
// ProfileClass.js:17 Component Did Mount - Child Profile Component lifecycle ended
// About.js:11 About : Component Did Mount called - About Component lifecycle ended

export default About;
