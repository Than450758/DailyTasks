class App extends React.Component {
    state = {
        items : 
                [
                    {id : 1, name : 'Apple', price: 0.99},
                   {id : 2, name : 'Apple', price: 0.89},
                ]
    }
    render(){
        return (
            <div>
                <h1>hELLO FRUIT</h1>
                <ul>
                    {this.state.items.map(i =>
                        {return (
                            <Item 
                            name={i.name}
                             price={i.price}
                             />   

                        );
                    })}
                </ul>

            </div>

        )
    }
}