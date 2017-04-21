import React, { Component, PropTypes } from 'react'
import HoverComponent from './HoverComponent'
import Avatar from 'material-ui/Avatar';
import {Link} from 'react-router'

const styles = {
	personInfo: {
		paddingTop: '40px',
		marginBottom: '40px',
		textAlign: 'center',
		backgroundColor: '#222E39',
		listStyleType: 'none'
	},
	logout: {
		display: 'inline-block',
		backgroundColor: '#d75552',
		color: 'white',
		borderRadius: '5px',
		padding: '5px 8px',
		marginBottom: '10px',
		textDecoration: 'none',
		cursor: 'pointer',
		transition: 'all .5s'
	},
	logoutHovered: {
		backgroundColor: '#CA3030'
	},
	login: {
		display: 'inline-block',
		backgroundColor: '#9ADE69',
		color: 'white',
		borderRadius: '5px',
		padding: '5px 8px',
		marginBottom: '10px',
		textDecoration: 'none',
		cursor: 'pointer',
		transition: 'all .5s'
	},
	loginHovered: {
		backgroundColor: '#5DC450'
	},
	username: {
		margin: '0px',
		fontSize: '1.5em',
		textDecoration: 'none',
		transition: 'all .5s',
		color: '#627D8F'
	},
	usernameHovered: {
		color: '#7FA6C1',
		textDecoration: 'underline'
	}
}

class PersonInfo extends Component {
	render() {
		const {user} = this.props;
		const {login, logout} = this.props
		if (!user.login) {
			user.username = ""
		}
		return (
			<li style={styles.personInfo}>
				<Avatar
          color="white"
          backgroundColor="black"
          size={100}
        >
          {user.username.substr(0, 1)}
        </Avatar>
				<p id="username">
					<HoverComponent style={styles.username} hoverStyle={styles.usernameHovered}>
						<a href="#">{user.username}</a>
					</HoverComponent>
				</p>
				
				{user.login ? 
				<HoverComponent style={styles.logout} hoverStyle={styles.logoutHovered}>
					<Link id="logout" onTouchTap={logout}>退出</Link>
				</HoverComponent> :
				<HoverComponent style={styles.login} hoverStyle={styles.loginHovered}>
					<Link id="login" onTouchTap={login}>登录</Link>
				</HoverComponent>
				}
			</li>
		)
	}
}

PersonInfo.PropTypes = {
	avatar: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired
}

export default PersonInfo