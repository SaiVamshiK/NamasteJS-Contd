import useOnline from "../utils/useOnline";
const Contact = () => {

    let isOnline = useOnline();
  if(!isOnline){
    return (
      <h1>Please check your interet connection...</h1>
    );
  }
    return (
        <>
            <h1>Contact Us here : +91 9652355348</h1>
        </>
    );
}

export default Contact;