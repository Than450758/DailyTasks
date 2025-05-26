import React from "react";
export default class Myconpo extends React.Component {
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

}


