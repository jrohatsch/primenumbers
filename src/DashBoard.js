import React, {useState} from 'react';
import DisplayNumber from './DisplayNumber.js';
import renderNumbers from './RenderNumber.js';

export default class DashBoard extends React.Component {
	constructor(){
		super();
		this.state = {
			nArray: []		
		}
	}

	componentDidMount(){
		let localArray = this.state.nArray;
		for(let i=0;i<4999;++i){
			localArray.push(new DisplayNumber());
		}
		this.setState({nArray: localArray});
	}


	startAnimation(){
		let localArray = this.state.nArray;
		
		localArray.forEach((number,index)=>{
			if(number.isCrossedOut) return;
			for(let i=index+1;i<localArray.length;++i){
				if(localArray[i].value % number.value == 0){
					localArray[i].isCrossedOut=true;	
				}
			}			
		});
		this.setState({nArray: localArray});
		this.checkPrime();
	}

	checkPrime(){
		let localArray = this.state.nArray;
		
		localArray.forEach((number,index)=>{
			number.wasRead = true;
		});

		this.setState({nArray: localArray});
	}
			
	render(){
	return(
		<div style={{maxWidth: '80vw', marginLeft: '10vw'}}>
			<h2>Sieve of Eratosthenes in Realtime JavaScript</h2>
			<div onClick={()=>this.startAnimation()} className='startButton'>
				Start
			</div>
			
			{renderNumbers(this.state.nArray)}
		</div>	
	);
	}
}




