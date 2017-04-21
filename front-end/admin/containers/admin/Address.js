import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
	container: {
		paddingLeft: '10px'
	}
}

class Address extends Component {
	state = {
		value: 1
	}

	handleChange = (event, index, value) => {
		this.setState({value: value});
	}

	render() {
		return (
			<div style={styles.container}>
				<h3>Address</h3>
				<SelectField
          floatingLabelText="Frequency"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="Custom width" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </SelectField>
			</div>
		)
	}
}

export default Address;