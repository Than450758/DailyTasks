import React,{ Component} from "react";
import {render} from "react-dom";


class FirstComponent extends Component {
    render(){
        return (
            <div>
                Hello,{this.props.name} I am a fistcompoinet
            </div>
        )
    }
}
render(
    <FirstComponent name={  'User'} />,document.getElementById('content')
);

////////////////////////////////

//Stateful component
  import React from "react";


  class SecondComponent extends Component {
    constructor (props) {
        super(props);

        this.state = {
            toggle : true
        };

        //this is to bind context when passing onClick as a callback
        this.onClick = this.onClick.bind(this);
    }
    onClick(){
        this.setState((prevState, props) => ({
            toggle : !prevState.toggle
        }));
    }
    render(){
        return (
            <div onClick={this.onClick}>
            Hello  {this.props.name} I am secon componemt<br />
            Toggle is : {this.state.toggle}
            </div>
        );
    }
  }

  //////////////////////////////////
  //higher orde component
  import React, {Component} from "react";
  const PrintHello = ComposedComponet => class extends Component {
    onClick(){
        console.log('HEllo');
    }
    render(){
        return <ComposedComponent {...this.props} onClick={this.onClick} />
    }//higher order component take another componebt as a parameter and the render it wit additional props

  }
    const FirstComponent = props =>(
        <div onClick ={ props.onClick}>
            Hello {props.name} Iam firstxon
        </div>
    );
   
const ExtendedComponent =PrintHello(FirstComponent);
  /////////////////////////////////////////

  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>

    
    
  </body>
  </html>