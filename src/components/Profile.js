import { useEffect, useState } from "react";

const Profile = (props) => {

    let [count,setCount] = useState(0);
    let timer;

    /*
    useEffect(() => {
        console.log('use effect');
        timer = setInterval(() => {
            console.log('Timer');
        },1000);
        // Now each time we come to the profile component a new setInterval is called.
        // Because of this multiple setIntervals are created.
        return () => {
            console.log('Clean up code here');
            clearInterval(timer);
        };
    },[]);
    console.log('Render');
    */
    // First the render is printed then use effect is printed.
    // console.log(props.name);
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