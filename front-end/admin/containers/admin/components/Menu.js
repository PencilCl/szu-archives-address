import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

const styles = {
	list: {
		margin: 0,
		padding: 0,
		listStyleType: 'none'
	},
	linkStyle: {
		textDecoration: 'none',
		transition: 'all .5s',
		display: 'block',
		height: '50px',
		lineHeight: '50px',
		fontSize: '1.3em'
	},
	menuFocus: {
		textDecoration: 'none',
		backgroundColor: '#222E39',
		color: '#7FA6C1'
	},
	i: {
		width: '50px',
		height: '50px',
		textAlign: 'center',
		lineHeight: '50px'
	}
}

class Menu extends Component {

	handleFocus(e) {
		e.target.blur();
	}

	render() {
		const { link, icon, description, style } = this.props;

		return (
			<li className="list" style={style}>
				<Link style={styles.linkStyle} onFocus={this.handleFocus} onlyActiveOnIndex={true} to={link} activeStyle={styles.menuFocus}>
					<i style={styles.i} className={"fa " + icon}></i>
					<span>{description}</span>
				</Link>
			</li>
		)
	}
}

Menu.PropTypes = {
	link: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
}

export default Menu