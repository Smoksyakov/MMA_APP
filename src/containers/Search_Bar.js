import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<form className="input-group" >
				<input className="form-control" />
				<span className="input-group-btn"> 
					<button 
						type="submit"
						className="btn btn-secondary">
						Submit
					</button>
				</span>
			</form>	
		);
	}
}

export default SearchBar;