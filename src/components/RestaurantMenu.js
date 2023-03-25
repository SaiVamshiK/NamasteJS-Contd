import { useParams } from "react-router";

const RestaurantMenu = () => {
    const params = useParams();
    const {id} = params;
    return (
        <>
            <h1>Restauran Id : {id}</h1>
            <h2>Namaste</h2>
        </>
    );  
}

export default RestaurantMenu;