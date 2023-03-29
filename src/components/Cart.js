import { useState } from "react";

const Section = ({ title, description, isShow,setFunc,refreshFunc }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold">
        {title}{" "}
        <button
          className="border bg-blue-50 m-2 p-2"
          onClick={() => {
            if(isShow){
                refreshFunc();
            }else{
                setFunc();
            }
          }}
        >
          {" "}
          {isShow ? "Hide" : "Show"}
        </button>
      </h3>
      {isShow ? <p>{description}</p> : <></>}
    </div>
  );
};

const Cart = () => {
  const [sectionConfig, setSectionConfig] = useState({
    showReact: true,
    showJS: false,
    showCSS: false,
  });
  return (
    <div>
      <h1 className="text-3xl p-2 m-2, font-bold">InstaMart</h1>
      <Section
        title={"Namaste React"}
        description={
          "This is the React section of Instamart. JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web.JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced."
        }
        isShow={sectionConfig.showReact}
        setFunc = {() => {
            setSectionConfig({
                showReact: true,
                showJS: false,
                showCSS: false,
            })
        }}
        refreshFunc = {() => {
            setSectionConfig({
                showReact: false,
                showJS: false,
                showCSS: false,
            });
        }}
      />
      <Section
        title={"Namaste JS"}
        description={
          "This is the JS section of Instamart. JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web.JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced."
        }
        isShow={sectionConfig.showJS}
        setFunc = {() => {
            setSectionConfig({
                showReact: false,
                showJS: true,
                showCSS: false,
            })
        }}
        refreshFunc = {() => {
            setSectionConfig({
                showReact: false,
                showJS: false,
                showCSS: false,
            });
        }}
      />
      <Section
        title={"Namaste CSS"}
        description={
          "This is the CSS section of Instamart. JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web.JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced."
        }
        isShow={sectionConfig.showCSS}
        setFunc = {() => {
            setSectionConfig({
                showReact: false,
                showJS: false,
                showCSS: true,
            })
        }}
        refreshFunc = {() => {
            setSectionConfig({
                showReact: false,
                showJS: false,
                showCSS: false,
            });
        }}
      />
    </div>
  );
};
export default Cart;
