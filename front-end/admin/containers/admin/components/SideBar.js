import React, { Component, PropTypes } from 'react'

import MenuList from './MenuList'

import { Link } from 'react-router'

const styles = {
	nav: {
		position: 'fixed',
		left: '0px',
		top: '0px',
		width: '250px',
		height: '100%',
		backgroundColor: '#2f4050'
	}
}

class SideBar extends Component {
	render() {
		const {user} = this.props;
		const {login, logout} = this.props;

		return (
			<nav style={styles.nav}>
				<MenuList login={login} logout={logout} user={user} />
			</nav>
		)
	}
}

export default SideBar;