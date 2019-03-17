import React, {Component} from 'react';

class Test1 extends Component {

    constructor(props){
        super();
        this.state={
            username:'cuichao'
        }

        // this.handleChange = this.handleChange.bind(this)

    }

    handleChange (e){
        this.setState({
            username: e.target.value
        })
    }

    render() {
        return (
            <div>
                hello {this.state.username}<br/>

                {/* better way  */}
                <input type="text" value={this.state.username} onChange={e=>this.handleChange(e)}/>

                {/* <input type="text" value={this.state.username} onChange={this.handleChange}/> */}
            </div>)
    }
}

export  default Test1