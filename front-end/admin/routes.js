import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'

import Admin from './containers/admin/Admin'
import Address from './containers/admin/Address'

module.exports = (
	<Route path='admin' component={Admin}>
		<IndexRedirect to="Address"/>
		<Route path="Address" component={Address} />
	</Route>
)