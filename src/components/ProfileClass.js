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
    this.timer = setInterval(() => {
        console.log('Timer called');
    },1000);
    // The constructor -> render ->componentDidMount : these are lifecycle methods of a react class based component.
    // This is the best place to make API call.
  }

  componentDidUpdate() {
    console.log('Component Update called');
  }

  componentWillUnmount(){
    clearInterval(this.timer);
    console.log('Component Unmount called');
    // This method is called when we leave the component and go to another component.
    // If we do not clearInterval() then a new interval keeps on adding to the JS engine each time we go to the about page.
    // In order to avoid creation of multiple intervals each time we come to the page, we need to clear the interval when we leave the component.
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

// NOW THE SEQUENCE is:
// Sequence of methods called:
// About : Constructor called
// About : Render called
// Class Constructor called Vamshi Class 1
// Class Render called Vamshi Class 1
// Component Did Mount Vamshi Class 1
// About : Component Did Mount called
// the result {json}
// Class Render called Vamshi Class 1 = re render of component since state is changed.
// Component Update called : here the componentDidUpdate() lifecycle method is called

// The componentDidUpdate() lifecycle method is called each time the state variables are updated-> render method called -> componentDidUpdate() called.
// IMP: componentDidMount() is called after 1st render and componentDidUpdate() is called after subsequent renders.


export default ProfileClass;
