import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

class App extends Component{
	constructor(){
		super();//calls the constructor of the component
		this.state={
			robots: [],
			searchfeid: ''
		}
	}
    
    componentDidMount(){
    	fetch('http://www.json-generator.com/api/json/get/ceUuviSRHC?indent=2')
    	.then(response=> response.json())
    	.then(users=> this.setState({robots:users}));
    }
	onSearchChange = (event) => {
		this.setState({searchfeid: event.target.value})
	}
	render(){
		   const filterdRobots= this.state.robots.filter(robots =>{
       	 return robots.name.toLowerCase().includes(this.state.searchfeid.toLowerCase());
       })
	  return(
	<div className='tc'>
	 <h1 className='f1'>CatFriends</h1>	
	 <SearchBox searchChange={this.onSearchChange} />
	 <Scroll>
	 <ErrorBoundary>
        <CardList robots={filterdRobots} />
	 </ErrorBoundary>
	 </Scroll>
    </div>
	);
	}
}

export default App;