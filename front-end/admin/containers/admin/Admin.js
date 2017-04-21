import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { connect } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'

import Snackbar from 'material-ui/Snackbar'
import Login from './components/Login'
import SideBar from './components/SideBar'
import * as adminActions from './actions/admin'

injectTapEventPlugin();

const styles = {
	container: {
		padding: 0,
		marginLeft: '250px',
		overflow: 'hidden',
		width: 'auto'
	}
}

class Admin extends Component {
	componentWillMount() {
		this.props.initial_state();
	}

	render() {
		const {history, loginState, user, snackbar} = this.props;
		const {change_username
			, change_password
			, show_login
			, login
			, logout
			, hide_login
			, close_snackbar} = this.props;
		const { isActive } = history;
		return (
			<MuiThemeProvider>
				<div>
					<Snackbar
						open={snackbar.open}
						message={snackbar.message}
						autoHideDuration={snackbar.autoHideDuration}
						onRequestClose={close_snackbar}
					/>
					<Login {...loginState} onChangeUserName={change_username} onChangePassword={change_password} handleLogin={login} handleCloseLogin={hide_login}/>
					<SideBar login={show_login} logout={logout} user={user} />
					<div style={styles.container}>
						{React.cloneElement(this.props.children, 
							{user: user})
						}
					</div>
				</div>
			</MuiThemeProvider>
		)
	}
}

function mapStateToProps(state) {
	return {
		loginState: state.admin.loginState,
		user: state.admin.user,
		snackbar: state.admin.snackbar
	}
}

export default connect(
	mapStateToProps,
	adminActions
)(Admin)