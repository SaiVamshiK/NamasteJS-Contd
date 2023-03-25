import React from "react";

class ProfileClass extends React.Component {
    constructor(props){
        super(props);
        // constructor is the place used for initialization.
        // here the state variables are created.
        this.state = {
            count1 : 0,
            count2 : 0
        };
    }
    render() {
        return (
            <>
                <h1>Profile Class Component</h1>
                <h2>Name : {this.props.name}</h2>
                <h2>Count1: {this.state.count1}</h2>
                <h2>Count2: {this.state.count2}</h2>
            </>
        );
    }
}

export default ProfileClass;