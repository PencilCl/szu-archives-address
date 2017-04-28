import { fromJS } from 'immutable'

const initialState = {
	province: {
		current: 0,
		items: [
			'选择省份'
		]
	},
	unit: {
		current: 0,
		items: [
			'选择派遣单位'
		]
	},
	depart: {
		current: 0,
		items: [
			'选择部门'
		]
	},
	addRecord: {
		show: false,
		form: {
			province: '',
			unit: '',
			depart: '',
			phone: '',
			address: ''
		}
	},
	deleteRecord: {
		show: false,
		id: null
	},
	editRecord: {
		show: false,
		form: {
			_id: '',
			province: '',
			unit: '',
			depart: '',
			phone: '',
			address: ''
		}
	},
	addresses: [
	]
}

let generate_new_state = (state) => {
	let newState = fromJS(state);
	return newState.toJS();
}

let change_province = (state, value) => {
	let newState = generate_new_state(state);
	newState.province.current = value;
	newState.unit.current = 0;
	newState.depart.current = 0;
	if (value !== 0) {
		newState.unit.items = ['选择派遣单位'];
		let tmp = {};
		newState.addresses.map(address => {
			if (!tmp[address.unit] && address.province == newState.province.items[value]) {
				tmp[address.unit] = true;
				newState.unit.items.push(address.unit);
			}
		})
	}
	return newState;
}

let change_unit = (state, value) => {
	let newState = generate_new_state(state);
	newState.unit.current = value;
	newState.depart.current = 0;
	if (value !== 0) {
		newState.depart.items = ['选择部门'];
		let tmp = {};
		newState.addresses.map(address => {
			if (!tmp[address.depart] && address.unit == newState.unit.items[value]) {
				tmp[address.depart] = true;
				newState.depart.items.push(address.depart);
			}
		})
	}
	return newState;
}

let change_depart = (state, value) => {
	let newState = generate_new_state(state);
	newState.depart.current = value;
	return newState;
}

let update_data = (state, data) => {
	let newState = generate_new_state(state);
	newState.addresses = data;
	newState.province.items = ['选择省份'];
	let tmp = {};
	newState.addresses.map(address => {
		if (!tmp[address.province]) {
			tmp[address.province] = true;
			newState.province.items.push(address.province);
		}
	})
	return newState;
}

let show_delete_record = (state, data) => {
	let newState = generate_new_state(state);
	newState.deleteRecord = {
		show: true,
		id: data
	};
	return newState;
}
let hide_delete_record = (state) => {
	let newState = generate_new_state(state);
	newState.deleteRecord.show = false;
	return newState;
}
let delete_record = (state, id) => {
	let newState = generate_new_state(state);
	newState.addresses = newState.addresses.filter(address => address._id != id);
	return newState;
}

let show_edit_record = (state, data) => {
	let newState = generate_new_state(state);
	newState.editRecord.show = true;
	for (let i = 0; i < newState.addresses.length; ++i) {
		if (newState.addresses[i]._id == data) {
			newState.editRecord.form = newState.addresses[i];
			break;
		}
	}
	return newState;
}
let hide_edit_record = (state, data) => {
	let newState = generate_new_state(state);
	newState.editRecord.show = false;
	return newState;
}
let change_edit_form_data = (state, data) => {
	let newState = generate_new_state(state);
	newState.editRecord.form[data.field] = data.value;
	return newState;
}
let edit_record = (state, data) => {
	let newState = generate_new_state(state);
	for (let i = 0; i < newState.addresses.length; ++i) {
		if (newState.addresses[i]._id == data._id) {
			newState.addresses[i] = data;
			break;
		}
	}
	return newState;
}

let show_add_record = (state) => {
	let newState = generate_new_state(state);
	let {province, unit, depart} = newState;
	newState.addRecord.show = true;
	newState.addRecord.form = {
		province: province.current == 0 ? '' : province.items[province.current],
		unit: unit.current == 0 ? '' : unit.items[unit.current],
		depart: depart.current == 0 ? '' : depart.items[depart.current],
		phone: '',
		address: ''
	}
	return newState;
}
let hide_add_record = (state) => {
	let newState = generate_new_state(state);
	newState.addRecord.show = false;
	return newState;
}
let change_add_form_data = (state, data) => {
	let newState = generate_new_state(state);
	newState.addRecord.form[data.field] = data.value;
	return newState;
}
let add_record = (state, data) => {
	let newState = generate_new_state(state);
	newState.addresses.push(data);
	return newState;
}

const CHANGE_PROVINCE = "CHANGE_PROVINCE"
const CHANGE_UNIT = "CHANGE_UNIT"
const CHANGE_DEPART = "CHANGE_DEPART"

const UPDATE_DATA = "UPDATE_DATA"

const DELETE_RECORD = "DELETE_RECORD"
const SHOW_DELETE_RECORD = "SHOW_DELETE_RECORD"
const HIDE_DELETE_RECORD = "HIDE_DELETE_RECORD"

const EDIT_RECORD = "EDIT_RECORD"
const SHOW_EDIT_RECORD = "SHOW_EDIT_RECORD"
const HIDE_EDIT_RECORD = "HIDE_EDIT_RECORD"
const CHANGE_EDIT_FORM_DATA = "CHANGE_EDIT_FORM_DATA"

const ADD_RECORD = "ADD_RECORD"
const SHOW_ADD_RECORD = "SHOW_ADD_RECORD"
const HIDE_ADD_RECORD = "HIDE_ADD_RECORD"
const CHANGE_ADD_FORM_DATA = "CHANGE_ADD_FORM_DATA"

export default function address (state = initialState, action) {
	switch (action.type) {
		case CHANGE_PROVINCE:
			return change_province(state, action.data)
		case CHANGE_UNIT:
			return change_unit(state, action.data)
		case CHANGE_DEPART:
			return change_depart(state, action.data)
		case UPDATE_DATA:
			return update_data(state, action.data)
		case ADD_RECORD:
			return add_record(state, action.data)
		case SHOW_ADD_RECORD:
			return show_add_record(state)
		case HIDE_ADD_RECORD:
			return hide_add_record(state)
		case EDIT_RECORD:
			return edit_record(state, action.data);
		case SHOW_EDIT_RECORD:
			return show_edit_record(state, action.data)
		case HIDE_EDIT_RECORD:
			return hide_edit_record(state)
		case DELETE_RECORD: 
			return delete_record(state, action.data)
		case SHOW_DELETE_RECORD:
			return show_delete_record(state, action.data)
		case HIDE_DELETE_RECORD:
			return hide_delete_record(state)
		case CHANGE_EDIT_FORM_DATA:
			return change_edit_form_data(state, action.data)
		case CHANGE_ADD_FORM_DATA:
			return change_add_form_data(state, action.data)
		default:
			return state
	}
}