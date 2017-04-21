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
			        <TableHeaderColumn>派遣单位</TableHeaderColumn>
			        <TableHeaderColumn>部门</TableHeaderColumn>
			        <TableHeaderColumn>电话</TableHeaderColumn>
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
			    	  <TableRowColumn>{address.unit}</TableRowColumn>
			    	  <TableRowColumn>{address.depart}</TableRowColumn>
			    	  <TableRowColumn>{address.phone}</TableRowColumn>
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