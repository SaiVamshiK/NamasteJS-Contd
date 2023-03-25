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
        console.log('Class Constructor called');
    }

    componentDidMount(){
        // this function is called after render()
        console.log('Component Did Mount');
        // The constructor -> render ->componentDidMount : these are lifecycle methods of a react class based component.
        // This is the best place to make API call.
    }

    render() {
        console.log('Class Render called')
        return (
            <>
                <h1>Profile Class Component</h1>
                <h2>Name : {this.props.name}</h2>
                <h2>Count1: {this.state.count1}</h2>
                <h2>Count2: {this.state.count2}</h2>
                <button onClick={() => {
                    this.setState({
                        count1 : 10
                    })
                }}>Change count1</button>
                <button onClick={() => {
                    this.setState({
                        count2 : 10
                    })
                }}>Change count2</button>
            </>
        );
    }
}

export default ProfileClass;