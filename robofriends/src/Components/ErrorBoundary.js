import React, {Component} from 'react';

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasErrors:false
        };
    }

    componentDidCatch(){
        this.setState({hasErrors:true})
    }

    render(){
        if(this.state.hasErrors){
            return <h1>Ooopsssss!!!!</h1>
        }
        return this.props.children;

    }
}
export default  ErrorBoundary;