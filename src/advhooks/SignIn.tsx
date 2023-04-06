import React, { Component, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import Todo from "./Todos";

type Prop = {
    header : string,
    hideDialog : Function
}

function SignIn  (props : Prop) {

    
    
    const el = document.createElement('div');

    function tagElement(): void {

        document.getElementById('sig-in')?.appendChild(el);
        console.log("did Mount happened", el)
    }
    useEffect( tagElement,[]);

    function unTagElement(): void {
        document.getElementById('sig-in')?.removeChild(el);
        console.log("did Un Mount happened", el)

    }
    useEffect ( unTagElement, []);

    // render(): React.ReactNode {
        const element = (
            <div>
                
                <h3 id="head"> Header {props.header}</h3>
                {/* <div id="page"> Childers props {props.children}</div> */}
                <Todo />
            </div>
        )

        return ReactDOM.createPortal(element, el);
    // }

}

export default SignIn;