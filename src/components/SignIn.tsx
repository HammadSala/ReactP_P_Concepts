import React, { Component} from "react";
import ReactDOM from "react-dom";

type Prop = {
    header : string,
    children : React.ReactNode
}

class SignIn extends Component < Prop> {
    el = document.createElement('div');

    componentDidMount(): void {
        document.getElementById('sig-in')?.appendChild(this.el);
        console.log("did Mount happened", this.el)
    }

    componentWillUnmount(): void {
        document.getElementById('sig-in')?.removeChild(this.el);
        console.log("did Un Mount happened", this.el)

    }

    render(): React.ReactNode {
        const element = (
            <div>
                
                <h3 id="head"> Header {this.props.header}</h3>
                <div id="page"> Childers props {this.props.children}</div>
            </div>
        )

        return ReactDOM.createPortal(element, this.el);
    }

}

export default SignIn;