import React, { Component, PropTypes } from 'react'
import Menu from './Menu'
import PersonInfo from './PersonInfo'

const styles = {
	listGroup: {
		margin: '0px',
		padding: '0px'
	}
}

class MenuList extends Component {

	render() {
		const {user} = this.props;
		const {login, logout} = this.props;

		return (
			<ul style={styles.listGroup} id="nav-list">
				<PersonInfo login={login} logout={logout} user={user} />
				<Menu focus={true} link="/admin/Address" icon="fa-home" description="Address" />
			</ul>
		)
	}
}

export default MenuList