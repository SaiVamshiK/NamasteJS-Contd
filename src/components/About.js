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
        <ProfileClass name={"Vamshi Class 1"} />
      </React.Fragment>
    );
  }
}

/*
Parent Constructor
Parent Render
1st child constructor
1st child render
2nd child constructor
2nd child render
1st child did mount
2nd child did mount
Parent component did mount

REASON:
See the React Lifecycle diagram.
React renders in 2 phases: 
1. Render phase : includes constructor and render() method
2. Commit phase : place where react changes the DOM. e.g. componentDidMount()

FLOW: 
React calls the constructor-> render-> componentDidMount.
Render phase is faster than commit phase, since commit phase is updating the DOM : it is slow.
So react tries to finish the Render phase for all the childs before commit phase.
So output so far:

Parent Constructor
Parent Render
1st child constructor
1st child render
2nd child constructor
2nd child render

Now the Commit phase begins:
1st child did mount
2nd child did mount
Parent component did mount

*/


// Sequence of steps
// About.js:7 About : Constructor called - About Component lifecycle
// About.js:14 About : Render called - About Component lifecycle
// ProfileClass.js:12 Class Constructor called - Child Profile Component lifecycle
// ProfileClass.js:23 Class Render called - Child Profile Component lifecycle
// ProfileClass.js:17 Component Did Mount - Child Profile Component lifecycle ended
// About.js:11 About : Component Did Mount called - About Component lifecycle ended

export default About;
