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
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';

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
	},
	operationButton: {
		marginLeft: '10px'
	},
  timeLabel: {
    textAlign: 'right',
    display: 'block',
    marginTop: '15px'
  }
}

let formatDate = (date, format) => {
  var paddNum = num => {
    num += "";
    return num.replace(/^(\d)$/,"0$1");
  }
  //指定格式字符
  var cfg = {
     yyyy : date.getFullYear() //年 : 4位
    ,yy : date.getFullYear().toString().substring(2)//年 : 2位
    ,M  : date.getMonth() + 1  //月 : 如果1位的时候不补0
    ,MM : paddNum(date.getMonth() + 1) //月 : 如果1位的时候补0
    ,d  : date.getDate()   //日 : 如果1位的时候不补0
    ,dd : paddNum(date.getDate())//日 : 如果1位的时候补0
    ,hh : date.getHours()  //时
    ,mm : date.getMinutes() //分
    ,ss : date.getSeconds() //秒
  }
  format || (format = "yyyy-MM-dd hh:mm:ss");
  return format.replace(/([a-z])(\1)*/ig, m => cfg[m]);
}

class Address extends Component {

  state = {
    openAddMenu: false,
    openDeleteMenu: false,
    openFilterMenu: false,
    openImportDialog: false
  }

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
		const {province, city, depart, manual, modified} = this.props;

  	// 过滤手动添加的数据
  	if (manual) {
  		if (address.autoImport) {
  			return false;
  		}
  	}

  	// 过滤编辑过的数据
  	if (modified) {
  		if (address.modified == false) {
  			return false;
  		}
  	}

  	if (province.current == 0) {
  		return true;
  	}
  	
  	// 过滤省份
  	if (address.province == province.items[province.current]) {
			if (city.current == 0) {
				return true;
			}

			// 过滤派遣单位
			if (address.city == city.items[city.current]) {
				if (depart.current == 0) {
					return true;
				}
				
				// 过滤部门
				return address.depart == depart.items[depart.current];
			}
  	}
  	return false;
  }

  chooseXml = () => {
		this.refs.xml.click();
  }

  showAddMenu = (event) => {
    this.setState({
      openAddMenu: true,
      addMenuAnchorEl: event.currentTarget
    });
  }

  showDeleteMenu = (event) => {
    this.setState({
      openDeleteMenu: true,
      deleteMenuAnchorEl: event.currentTarget
    })
  }

  showFilterMenu = (event) => {
    this.setState({
      openFilterMenu: true,
      filterMenuAnchorEl: event.currentTarget
    })
  }

  hideAddMenu = () => {
    this.setState({
      openAddMenu: false
    })
  }

  hideDeleteMenu = () => {
    this.setState({
      openDeleteMenu: false
    })
  }

  hideFilterMenu = () => {
    this.setState({
      openFilterMenu: false
    })
  }

  showImportDialog = () => {
    this.setState({
      openImportDialog: true
    })
  }

  hideImportDialog = () => {
    this.setState({
      openImportDialog: false
    })
  }

	render() {
		const {province, city, depart, manual, modified, addresses, addRecord, deleteRecord, editRecord, xlsFile} = this.props;
		const {
			changeProvince,
			changeCity,
			changeDepart,
			filter_manual,
			filter_modified,

			show_add_record,
			hide_add_record,
			add_record,

			show_delete_record,
			hide_delete_record,
			delete_record,

			show_edit_record,
			hide_edit_record,
			edit_record,

			fetch_address_data,

			upload_xls,
      change_xls,

      filterManual,
      filterModified,

      export_xls
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
	   	],
      import: [
        <FlatButton
          label="取消"
          primary={true}
          onTouchTap={this.hideImportDialog}
        />,
        <FlatButton
          label="导入"
          secondary={true}
          disabled={xlsFile == null}
          onTouchTap={() => {
            this.hideImportDialog();
            upload_xls(fetch_address_data);
          }}
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
          确认删除？
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
            floatingLabelText="市/区"
            value={editRecord.form.city}
            data-field="city"
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
            floatingLabelText="派遣单位"
            value={editRecord.form.unit}
            data-field="unit"
            onChange={this.handleChangeEditForm}
            multiLine={true}
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
          <TextField
            floatingLabelText="邮编"
            value={editRecord.form.postcode}
            data-field="postcode"
            onChange={this.handleChangeEditForm}
            multiLine={true}
            fullWidth={true}
          />
          <TextField
            floatingLabelText="联系方式"
            value={editRecord.form.contact}
            data-field="contact"
            onChange={this.handleChangeEditForm}
            multiLine={true}
            fullWidth={true}
          />
          <label style={styles.timeLabel}>{(editRecord.form.createAt == editRecord.form.updateAt ? "创建于 " : "编辑于 ") + formatDate(new Date(editRecord.form.updateAt))}</label>
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
            floatingLabelText="市/区"
            value={addRecord.form.city}
            data-field="city"
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
            floatingLabelText="派遣单位"
            value={addRecord.form.unit}
            data-field="unit"
            onChange={this.handleChangeAddForm}
            multiLine={true}
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
          <TextField
            floatingLabelText="邮编"
            value={addRecord.form.postcode}
            data-field="postcode"
            onChange={this.handleChangeAddForm}
            multiLine={true}
            fullWidth={true}
          />
          <TextField
            floatingLabelText="联系方式"
            value={addRecord.form.contact}
            data-field="contact"
            onChange={this.handleChangeAddForm}
            multiLine={true}
            fullWidth={true}
          />
        </Dialog>

        <Dialog
          title="批量导入"
          actions={actions.import}
          modal={false}
          open={this.state.openImportDialog}
          onRequestClose={this.hideImportDialog}
          autoScrollBodyContent={true}
        >
          <div style={{marginTop: '24px'}}>
            <h4>导入表格格式说明: <br />
            表格第一行需包含如下信息<br />
            省份、地区、派遣单位主管部门、派遣单位名称、派遣单位地址、派遣单位办公电话、派遣单位邮编(顺序任意)<br />
            表格第二行及以后后为邮寄地址信息<br />
              <a href="/admin/example.xlsx" download="邮寄地址-示例.xlsx">下载示例文件</a>            
            </h4>
            {xlsFile == null ? "请选择xls文件 " : xlsFile.name}
            <FlatButton
              label="选择文件"
              onTouchTap={this.chooseXml}
              style={{marginLeft: '20px'}} />
          </div>
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
	          floatingLabelText="市/区"
	          value={city.current}
	          onChange={changeCity}
	          autoWidth={true}
	        >
	        	{city.items.map((item, index) =>
							<MenuItem key={index} value={index} primaryText={item} />
	        	)}
	        </SelectField>
        : null}

				{city.current !== 0 ? 
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

        <div>
        	操作: 
          <RaisedButton 
            onTouchTap={this.showAddMenu}
            label="添加记录"
            style={styles.operationButton} />
          <RaisedButton 
            onTouchTap={this.showDeleteMenu}
            label="删除记录"
            style={styles.operationButton} />
          <RaisedButton 
            onTouchTap={this.showFilterMenu}
            label="过滤记录"
            style={styles.operationButton} />
          <a style={{display: 'none'}} href="" download="邮寄地址.xlsx" id="hf"></a>
          <RaisedButton 
            onTouchTap={() => export_xls(addresses.filter(this.filterAddress))}
            label="导出记录"
            style={styles.operationButton} />
          <Popover
            open={this.state.openFilterMenu}
            anchorEl={this.state.filterMenuAnchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.hideFilterMenu}
          >
            <Menu>
              <MenuItem primaryText="只显示手动添加记录" insetChildren={true} checked={filterManual} onTouchTap={filter_manual} />
              <MenuItem primaryText="只显示编辑过的记录" insetChildren={true} checked={filterModified} onTouchTap={filter_modified} />
            </Menu>
          </Popover>
          <Popover
            open={this.state.openAddMenu}
            anchorEl={this.state.addMenuAnchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.hideAddMenu}
          >
            <Menu onItemTouchTap={this.hideAddMenu}>
              <MenuItem primaryText="手动添加" onTouchTap={show_add_record} />
              <MenuItem primaryText="批量导入" onTouchTap={this.showImportDialog} />
            </Menu>
          </Popover>
          <Popover
            open={this.state.openDeleteMenu}
            anchorEl={this.state.deleteMenuAnchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.hideDeleteMenu}
          >
            <Menu onItemTouchTap={this.hideDeleteMenu}>
              <MenuItem primaryText="删除全部" onTouchTap={() => show_delete_record("all")} />
              <MenuItem primaryText="删除手动添加数据" onTouchTap={() => show_delete_record("manual")} />
              <MenuItem primaryText="删除导入数据" onTouchTap={() => show_delete_record("import")} />
            </Menu>
          </Popover>

        	<div style={{display: 'none'}}>
        		<input 
        			ref="xml" 
        			type="file"
              onChange={change_xls}/>
        	</div>
        </div>

        <AddressTable 
        	onDelete={show_delete_record} 
        	onEdit={show_edit_record} 
        	addresses={addresses.filter(this.filterAddress)} />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		province: state.address.province,
		city: state.address.city,
		depart: state.address.depart,
		manual: state.address.filterManual,
		modified: state.address.filterModified,
		addresses: state.address.addresses,
		addRecord: state.address.addRecord,
		deleteRecord: state.address.deleteRecord,
		editRecord: state.address.editRecord,
    filterManual: state.address.filterManual,
    filterModified: state.address.filterModified,
    xlsFile: state.address.xlsFile
	}
}

export default connect(
	mapStateToProps,
	addressActions
)(Address);