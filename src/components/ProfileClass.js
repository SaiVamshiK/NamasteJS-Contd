import React from "react";

class ProfileClass extends React.Component {
    render() {
        return (
            <>
                <h1>Profile Class Component</h1>
                <h2>Name : {this.props.name}</h2>
            </>
        );
    }
}

export default ProfileClass;