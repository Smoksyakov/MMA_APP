import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';


class SearchBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			info : [],
		};
	}

  	componentDidMount() {
  		const url = "http://ufc-data-api.ufc.com/api/v1/us/fighters"
		axios.get(url).then((response)=>{

  			const first_name = response.data.map(fighter => fighter.first_name);
  				//console.log(first_name[0])

  			const last_name = response.data.map(fighter => fighter.last_name);
  				//console.log(last_name)	

  			const full_name = response.data.map(fighter => fighter.first_name + " " + fighter.last_name);
  				//console.log(full_name);

  			const fighter_id = response.data.map(fighter=> fighter.id)
  				//console.log(fighter_id);

  			const output_test = fighter_id.map(function(obj,index){
	  			const myobj = {}
	  				myobj[full_name[index]] = obj;
	  				//console.log(myobj)
	  				return myobj
  			});
  			console.log(output_test);
  			this.setState({info:output_test})
  		});
  	}

	render() {
		return(
			<div>
				<li>
					{this.state[0]}	
				</li>
			</div>
		);
	}
}

export default SearchBar;