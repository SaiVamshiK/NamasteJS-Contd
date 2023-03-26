import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    // constructor is the place used for initialization.
    // here the state variables are created.
    this.state = {
        githubData : {}
    }
    console.log("Class Constructor called " + this.props.name);
  }

  async componentDidMount() {
    // this function is called after render()
    console.log("Component Did Mount " + this.props.name);
    const data = await fetch("https://api.github.com/users/SaiVamshiK");
    const json = await data.json();
    console.log(json);
    this.setState(
        {
            githubData : json
        }
    );
    // The constructor -> render ->componentDidMount : these are lifecycle methods of a react class based component.
    // This is the best place to make API call.
  }

  render() {
    console.log("Class Render called " + this.props.name);
    return (
      <>
        <h1>Profile Class Component</h1>
        <h2>Name : {this.state.githubData.name}</h2>
    
      </>
    );
  }
}

// Sequence of methods called:
// About : Constructor called
// About : Render called
// Class Constructor called Vamshi Class 1
// Class Render called Vamshi Class 1
// Component Did Mount Vamshi Class 1
// About : Component Did Mount called
// the result {json}
// Class Render called Vamshi Class 1 = re render of component since state is changed.


export default ProfileClass;
