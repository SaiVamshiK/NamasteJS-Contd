import { useState } from "react";

const Section = ({ title, description }) => {
    const [isShow,setIsShow] = useState(true);
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold">
        {title} <button className="border bg-blue-50 m-2 p-2" onClick={() => {
            if(isShow){
                setIsShow(false);
            }else{
                setIsShow(true);
            }
        }}> {isShow ? "Hide": "Show"}</button>
      </h3>
      {isShow ? <p>{description}</p> : <></>}
    </div>
  );
};

const Cart = () => {
  return (
    <div>
      <h1 className="text-3xl p-2 m-2, font-bold">InstaMart</h1>
      <Section
        title={"Namaste React"}
        description={
          "This is the React section of Instamart. JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web.JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced."
        }
      />
      <Section
        title={"Namaste JS"}
        description={
          "This is the JS section of Instamart. JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web.JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced."
        }
      />
      <Section
        title={"Namaste CSS"}
        description={
          "This is the CSS section of Instamart. JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web.JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced."
        }
      />
    </div>
  );
};
export default Cart;
