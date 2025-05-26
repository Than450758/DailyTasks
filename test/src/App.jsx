import React from "react";
//import Header from "./Header";
//import Footer from "./Footer";
/*class App extends React.Component{
  render(){
    return<h1>Hello</h1>;
  }
}
export default App;*/
/*export default function App(){
    const title ="Product categories";
    const catageories = [
        "electronic",
        "jewellery",
        "menclothng",
        "womes"
     ];*/
    
    //return (
        //<div className="">
          //<Header />
          /*<div id="category-section" className="p-9">
            <p className="text-2xl text-gray-500 mb-3">{title}</p>
            <div>
              {catageories.map((category)=>(
                <button className="border border-black px-4 py-2 me-2">{category}
                </button>
              ))}
            </div>
          </div>*/
          //<Footer />

       //</div> 
    //);
//}
class Item extends React.Component{
  render(){
    return <li>
        {this.props.name},
        ${this.props.price}
    </li>;
  }
}
class App extends React.Component {
    state = {
        items : 
                [
                    {id : 1, name : 'Apple', price: 0.99},
                   {id : 2, name : 'Apple', price: 0.89},
                ]
    }

    add = () =>{
      let id= this.state.items.length +1;
      this.setState({
        items: [
          ...this.state.items,
          {id, name: `Item ${id}`, price: 0.1*id}
        ]
      });
    }
    render(){
        return (
            <div>
                <h1>hELLO FRUIT</h1>
                <ul>
                    {this.state.items.map(i =>
                        {return (
                            <Item 
                            key={i.id}
                            name={i.name}
                             price={i.price}
                             />   

                        );
                    })}
                </ul>
                <button onClick={this.add}>Add</button>

            </div>

        )
    }
}
export default App;
/*export default class Myconpo extends React.Component {
    constructor(){
        super();
        this.state= {
            days: ''
        }
        this.onChange = this.onChange.bind(this);

    }
    onChange(e){
        this.setState({
            days: e.target.value
        });
    }
render(){
    return (
        <div>
            <input defaultValue={2} onChange={this.onChange} />
            URL: {this.props.url + '/days?=' +this.state.days}
        </div>
    )
}

*/
/*class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      greeting : 'Ell ksfi'
    };
  }
  render(){
    return (
      <div> {this.state.greeting}</div>
    )
  }
}
export default App;*/

