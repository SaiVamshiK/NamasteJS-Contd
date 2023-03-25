import { useState } from "react";

const Profile = (props) => {

    let [count,setCount] = useState(0);

    console.log(props.name);
    return (
        <div>
            <h2>Profile Component</h2>
            <h2>Count: {count}</h2>
        </div>
    );
}
export default Profile;