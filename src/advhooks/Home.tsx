import React, { ChangeEvent, Component, FormEvent, useCallback, useEffect, useState} from "react";
import SignIn from "./SignIn";
import Todo from "./Todos";


type Props = { };

type State = {
    showSignIn : boolean,
    uname : string
};

function Home ( props : Props) {

    const [ uname , setUname] = useState<String>();
    const [ showSignIn , setshowSignIn] = useState(false);
    const [ dummyState, setDummyState ] = useState<string>( 'dummy state');

    useEffect(() => {
        setTimeout(() => {
            setDummyState( 'dummy state update' );
        }, 2000);
        console.log("over")
    }, []);

    
    // constructor(props : Props) {

    //     super(props);
    //     this.state = {
    //         showSignIn : false,
    //         uname : ""
    //     }
    // }
    function showDialog () {
        console.log( "boolean valie before", showSignIn)
        // this.setState( { showSignIn : true});
        // console.log( "boolean valie after", this.state.showSignIn)

        // setUname(prevState => ({ showSignIn: !prevState.showSignIn }), () => {
        //     console.log("boolean value after", this.state.showSignIn);
        // });
        setshowSignIn(true);

        
    }

    const hideDialog = useCallback (() =>{
        console.log("Childred executino/rendering", showSignIn )
        setshowSignIn(false);
    },[])

    const G_1 = require("../images/Game_1.jpg");
    const G_2 = require("../images/Game_2.jpg");
    const G_3 = require("../images/Game_3.jpg");
    const G_4 = require("../images/Game_4.jpg");

    function handleSubmit (event :  FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        console.log(event)
    }
    function checkName  (event : ChangeEvent<HTMLInputElement>):void {
        setUname(event.target.value);
        // if (this.state.uname === "john") {
        //     throw new Error("No such user as John");
        //   }
        
    }

    useEffect(
        effectCheck
        ,[]
    );

    function effectCheck() : void  {
        console.log(uname);
        if (uname === "john") {
          throw new Error("No such user as John");
        }
      }
    

    

        // if( this.state.uname === "john")
        //     {
        //         throw new Error  ( "No suhc user as John");
        //     }

        return(
            
            <>
            State: {dummyState}
                <div className="product-section">
                    <div className="products">
                        <img src={G_1} alt="Image1" />
                        <button onClick={showDialog}>Buy Free </button>
                    </div>

                    <div className="products">
                        <img src={G_2} alt="Image2" />
                        <button onClick={showDialog}>Buy Free </button>
                    </div>

                    <div className="products">
                        <img src={G_3} alt="Image3" />
                        <button onClick={showDialog}>Buy Free </button>
                    </div>

                    <div className="products">
                        <img src={G_4} alt="Image4" />
                        <button onClick={showDialog}>Buy Free </button>
                    </div>
                </div>

                {
                    showSignIn && (
                        <SignIn header="SignIn Componenet portal" hideDialog={hideDialog} />
                    )

                }
                <Todo />
            </>
        );
    }




export default Home;