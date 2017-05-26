import React, {Component} from 'react'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

class FindogAppContainer extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		return (
			<h1>Findog App</h1>
		)
	}
}

FindogAppContainer = connect(mapStateToProps, mapDispatchToProps)(FindogAppContainer);

export default FindogAppContainer;
