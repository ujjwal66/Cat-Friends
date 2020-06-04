import React,{Component} from 'react';

class ErrorBoundary extends Component{
	constructor(props){ //to access props
		super(props);
		this.state={
			hasError: false
		}
	}
//new life cycle method in 16

componentDidCatch(error, errorInfo) {
   this.setState({hasError:true})
}

render(){
	if(this.state.hasError){
		return <h1>Failed to Load</h1>
	}
	return this.props.children
}
}
export default ErrorBoundary;