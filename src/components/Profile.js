import { useEffect, useState } from "react";

const Profile = (props) => {

    let [count,setCount] = useState(0);

    useEffect(() => {
        console.log('use effect');
    },[]);
    console.log('Render');
    // First the render is printed then use effect is printed.
    console.log(props.name);
    return (
        <div>
            <h2>Profile Component</h2>
            <h2>Count: {count}</h2>
            <button onClick={() => {
                setCount(10)
            }}>Change count</button>
        </div>
    );
}
export default Profile;