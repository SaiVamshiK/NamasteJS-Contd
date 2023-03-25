import { useRouteError } from "react-router";

// useRouteError is a hook;
// This hook provides more details about the errors so that we can use it in displaying a meaningful error page.
const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Oops!!</h1>  
            <h2>Something went wrong!</h2>  
        </div>
    );
};

export default Error;