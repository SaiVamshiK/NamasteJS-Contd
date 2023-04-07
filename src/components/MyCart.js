import { useSelector } from "react-redux";

const MyCart = () => {
    const cartItems = useSelector((store) => store);
    // useSelector is used to subscribe to the store.
    // This is the place we tell what we are subscribing to.
    // If we write store => store : it subscribes to the entire store.
    // If we write just store => store.cart : it subscribes to the cart of the store.
    console.log(cartItems);
    return (
        <div>
            <h1 className="font-bold p-5 m-5">Cart Items - {cartItems.cart.items.length}</h1>
        </div>
    );
}
export default MyCart;
