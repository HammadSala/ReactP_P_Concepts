import React, { ChangeEvent, Component, FormEvent, useEffect} from "react";
import SignIn from "./SignIn";
import { error } from "console";

type Props = { };

type State = {
    showSignIn : boolean,
    uname : string
};

class Home extends Component<Props, State> {
    
    constructor(props : Props) {

        super(props);
        this.state = {
            showSignIn : false,
            uname : ""
        }
    }
    showDialog = () => {
        console.log( "boolean valie before", this.state.showSignIn)
        // this.setState( { showSignIn : true});
        // console.log( "boolean valie after", this.state.showSignIn)

        this.setState(prevState => ({ showSignIn: !prevState.showSignIn }), () => {
            console.log("boolean value after", this.state.showSignIn);
        });
        
    }

    hideDialog = () => {
        this.setState ( { showSignIn : false});
    }

    G_1 = require("../images/Game_1.jpg");
    G_2 = require("../images/Game_2.jpg");
    G_3 = require("../images/Game_3.jpg");
    G_4 = require("../images/Game_4.jpg");

    handleSubmit = (event :  FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event)
    }
    checkName = (event : ChangeEvent<HTMLInputElement>) => {
        this.setState({uname : event.target.value})
        // if (this.state.uname === "john") {
        //     throw new Error("No such user as John");
        //   }
        
    }

    componentDidUpdate() {
        console.log(this.state.uname);
        if (this.state.uname === "john") {
          throw new Error("No such user as John");
        }
      }
    

    render(): React.ReactNode {

        const { showSignIn, uname } = this.state;

        // if( this.state.uname === "john")
        //     {
        //         throw new Error  ( "No suhc user as John");
        //     }

        return(
            <>
                <div className="product-section">
                    <div className="products">
                        <img src={this.G_1} alt="Image1" />
                        <button onClick={this.showDialog}>Buy Free </button>
                    </div>

                    <div className="products">
                        <img src={this.G_2} alt="Image2" />
                        <button onClick={this.showDialog}>Buy Free </button>
                    </div>

                    <div className="products">
                        <img src={this.G_3} alt="Image3" />
                        <button onClick={this.showDialog}>Buy Free </button>
                    </div>

                    <div className="products">
                        <img src={this.G_4} alt="Image4" />
                        <button onClick={this.showDialog}>Buy Free </button>
                    </div>
                </div>

                {
                    showSignIn && (
                        <SignIn header="SignIn Componenet portal">
                            <p>Hiii test , this and below are child elements of </p>
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" name="username"  onChange={this.checkName} />username
                                <br />
                                <input type="password" name="password" id="password" />password
                                <button onClick={this.hideDialog}>Hide</button>
                                <button type="submit">Submit</button>
                            </form>
                        </SignIn>
                    )

                }
            </>
        );
    }


}

export default Home;