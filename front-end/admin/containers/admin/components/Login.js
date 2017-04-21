import React, {Component, PropTypes} from 'react'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

class Login extends Component {
	render() {
		const {username, password, open} = this.props;
		const {onChangeUserName, onChangePassword, handleLogin, handleCloseLogin} = this.props;

		const actions = [
			<FlatButton
				label="Cancel"
				secondary={true}
				onTouchTap={handleCloseLogin}
			/>,
			<FlatButton
				label="Login"
				primary={true}
				onTouchTap={handleLogin}
			/>
		]

		return (
			<Dialog
				title="登录档案邮寄查询后台管理"
				actions={actions}
				modal={true}
				open={open}
			>
			<TextField
				floatingLabelText="UserName"
				value={username}
				fullWidth={true}
				onChange={onChangeUserName}
			/>
			<TextField
				floatingLabelText="Password"
				type="password"
				value={password}
				fullWidth={true}
				onChange={onChangePassword}
			/>
			</Dialog>
		)
	}
}

export default Login;