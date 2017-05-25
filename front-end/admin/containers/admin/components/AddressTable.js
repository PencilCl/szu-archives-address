import React, {Component} from 'react';

import {
	Table, 
	TableRow, 
	TableBody, 
	TableHeader, 
	TableRowColumn, 
	TableHeaderColumn	
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import Pagination from './Pagination'

const ROWS = 10;

class AddressTable extends Component {

	state = {
		currentPage: 1
	}

	changePage = (page) => {
		this.setState({currentPage: page});
	}

	handleDelete = id => {
		return () => {
			this.props.onDelete(id);
		}
	}

	handleEdit = id => {
		return () => {
			this.props.onEdit(id);
		}
	}

	componentWillReceiveProps(nextProps) {
		const {addresses} = nextProps;
		const {currentPage} = this.state;

		let totlePage = Math.ceil(addresses.length / ROWS);
		if (totlePage > 0 && currentPage > totlePage) {
			this.setState({
				currentPage: totlePage
			})
		}
	}

	render() {
		const {addresses} = this.props;
		const {currentPage} = this.state;

		return (
			<div>
				<Table
		    	selectable={false}
				>
			    <TableHeader
			    	displaySelectAll={false}
			    	adjustForCheckbox={false}
			    >
			      <TableRow>
			        <TableHeaderColumn width={60}>省份</TableHeaderColumn>
			        <TableHeaderColumn width={60}>市/区</TableHeaderColumn>
			        <TableHeaderColumn>主管部门</TableHeaderColumn>
			        <TableHeaderColumn>地址</TableHeaderColumn>
			        <TableHeaderColumn width={80}>操作</TableHeaderColumn>
			        <TableHeaderColumn width={80}>删除</TableHeaderColumn>
			      </TableRow>
			    </TableHeader>
			    <TableBody
			    	displayRowCheckbox={false}
			    	showRowHover={true}
			    >
			    {addresses.map((address, index) => (index >= (currentPage - 1) * ROWS && index < currentPage * ROWS) ? 
			    	<TableRow key={index}>
			    	  <TableRowColumn width={60}>{address.province}</TableRowColumn>
			    	  <TableRowColumn width={60}>{address.city}</TableRowColumn>
			    	  <TableRowColumn>{address.depart}</TableRowColumn>
			    	  <TableRowColumn>{address.address}</TableRowColumn>
			    	  <TableRowColumn width={80}><FlatButton onTouchTap={this.handleEdit(address._id)} label="查看/编辑" primary={true} /></TableRowColumn>
			    	  <TableRowColumn width={80}><FlatButton onTouchTap={this.handleDelete(address._id)} label="删除" secondary={true} /></TableRowColumn>
			    	</TableRow>
			    	: null
			    )}
			    </TableBody>
			  </Table>

				<Pagination changePage={this.changePage} currentPage={this.state.currentPage} totlePage={Math.ceil(addresses.length / ROWS)} />
			</div>
			
		)
	}
}

export default AddressTable;