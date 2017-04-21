import React, {Component} from 'react';
import { connect } from 'react-redux';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import AddressTable from './components/AddressTable'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import RefreshIcon from 'material-ui/svg-icons/navigation/refresh';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

import * as addressActions from './actions/address'

const styles = {
	container: {
		paddingLeft: '10px'
	},
	select: {
		marginRight: '20px'
	},
	refreshButton: {
		position: 'fixed',
		right: '5em',
		bottom: '5em'
	}
}

class Address extends Component {

	handleChangeEditForm = event => {
		this.props.change_edit_form_data(event.target.dataset.field, event.target.value);
	}

	handleChangeAddForm = event => {
		this.props.change_add_form_data(event.target.dataset.field, event.target.value);
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.user.login == false && nextProps.user.login == true) {
			setTimeout(() => {
				this.props.fetch_address_data()
			}, 500);
		}
	}

	filterAddress = (address) => {
		const {province, unit, depart} = this.props;
  	if (province.current == 0) {
  		return true;
  	}
  	// 过滤省份
  	if (address.province == province.items[province.current]) {
			if (unit.current == 0) {
				return true;
			}

			// 过滤派遣单位
			if (address.unit == unit.items[unit.current]) {
				if (depart.current == 0) {
					return true;
				}
				
				// 过滤部门
				return address.depart == depart.items[depart.current];
			}
  	}
  	return false;
  }

	render() {
		const {province, unit, depart, addresses, addRecord, deleteRecord, editRecord} = this.props;
		const {
			changeProvince,
			changeUnit,
			changeDepart,

			show_add_record,
			hide_add_record,
			add_record,

			show_delete_record,
			hide_delete_record,
			delete_record,

			show_edit_record,
			hide_edit_record,
			edit_record,

			fetch_address_data
		} = this.props;

		const actions = {
			del: [
	      <FlatButton
	        label="取消"
	        primary={true}
	        onTouchTap={hide_delete_record}
	      />,
	      <FlatButton
	        label="确认"
	        secondary={true}
	        onTouchTap={delete_record}
	      />
	    ],
	    add: [
		    <FlatButton
		      label="取消"
		      primary={true}
		      onTouchTap={hide_add_record}
		    />,
		    <FlatButton
		      label="添加"
		      secondary={true}
		      onTouchTap={add_record}
		    />
	    ],
	    edit: [
		    <FlatButton
		      label="取消"
		      primary={true}
		      onTouchTap={hide_edit_record}
		    />,
		    <FlatButton
		      label="保存"
		      secondary={true}
		      onTouchTap={edit_record}
		    />
	   	]
  	};

		return (
			<div style={styles.container}>
				<FloatingActionButton onTouchTap={fetch_address_data} secondary={true} style={styles.refreshButton}>
					<RefreshIcon />
				</FloatingActionButton>

				<Dialog
          title="提示"
          actions={actions.del}
          modal={false}
          open={deleteRecord.show}
          onRequestClose={hide_delete_record}
        >
          确认删除该记录？
        </Dialog>

				<Dialog
          title="邮寄地址详情"
          actions={actions.edit}
          modal={false}
          open={editRecord.show}
          onRequestClose={hide_edit_record}
          autoScrollBodyContent={true}
        >
          <TextField
            floatingLabelText="省份"
            value={editRecord.form.province}
            data-field="province"
            onChange={this.handleChangeEditForm}
            fullWidth={true}
          />
          <TextField
            floatingLabelText="派遣单位"
            value={editRecord.form.unit}
            data-field="unit"
            onChange={this.handleChangeEditForm}
            fullWidth={true}
          />
          <TextField
            floatingLabelText="部门"
            value={editRecord.form.depart}
            data-field="depart"
            onChange={this.handleChangeEditForm}
            fullWidth={true}
          />
          <TextField
            floatingLabelText="电话"
            value={editRecord.form.phone}
            data-field="phone"
            onChange={this.handleChangeEditForm}
            fullWidth={true}
          />
          <TextField
            floatingLabelText="地址"
            value={editRecord.form.address}
            data-field="address"
            onChange={this.handleChangeEditForm}
            multiLine={true}
            fullWidth={true}
          />
        </Dialog>

        <Dialog
          title="添加记录"
          actions={actions.add}
          modal={false}
          open={addRecord.show}
          onRequestClose={hide_add_record}
          autoScrollBodyContent={true}
        >
          <TextField
            floatingLabelText="省份"
            value={addRecord.form.province}
            data-field="province"
            onChange={this.handleChangeAddForm}
            fullWidth={true}
          />
          <TextField
            floatingLabelText="派遣单位"
            value={addRecord.form.unit}
            data-field="unit"
            onChange={this.handleChangeAddForm}
            fullWidth={true}
          />
          <TextField
            floatingLabelText="部门"
            value={addRecord.form.depart}
            data-field="depart"
            onChange={this.handleChangeAddForm}
            fullWidth={true}
          />
          <TextField
            floatingLabelText="电话"
            value={addRecord.form.phone}
            data-field="phone"
            onChange={this.handleChangeAddForm}
            fullWidth={true}
          />
          <TextField
            floatingLabelText="地址"
            value={addRecord.form.address}
            data-field="address"
            onChange={this.handleChangeAddForm}
            multiLine={true}
            fullWidth={true}
          />
        </Dialog>

				<h3>地址</h3>
				<SelectField
					style={styles.select}
          floatingLabelText="省份"
          value={province.current}
          onChange={changeProvince}
          autoWidth={true}
        >
        	{province.items.map((item, index) =>
						<MenuItem key={index} value={index} primaryText={item} />
        	)}
        </SelectField>

				{province.current !== 0 ? 
	        <SelectField
						style={styles.select}
	          floatingLabelText="派遣单位"
	          value={unit.current}
	          onChange={changeUnit}
	          autoWidth={true}
	        >
	        	{unit.items.map((item, index) =>
							<MenuItem key={index} value={index} primaryText={item} />
	        	)}
	        </SelectField>
        : null}

				{unit.current !== 0 ? 
	        <SelectField
						style={styles.select}
	          floatingLabelText="部门"
	          value={depart.current}
	          onChange={changeDepart}
	          autoWidth={true}
	        >
	        	{depart.items.map((item, index) =>
							<MenuItem key={index} value={index} primaryText={item} />
	        	)}
	        </SelectField>
        : null}

        <div style={{textAlign: 'center'}}><FlatButton onTouchTap={show_add_record} label="没有记录?点此添加" secondary={true} /></div>

        <AddressTable onDelete={show_delete_record} onEdit={show_edit_record} addresses={addresses.filter(this.filterAddress)} />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		province: state.address.province,
		unit: state.address.unit,
		depart: state.address.depart,
		addresses: state.address.addresses,
		addRecord: state.address.addRecord,
		deleteRecord: state.address.deleteRecord,
		editRecord: state.address.editRecord
	}
}

export default connect(
	mapStateToProps,
	addressActions
)(Address);