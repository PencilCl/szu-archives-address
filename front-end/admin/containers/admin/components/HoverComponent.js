import React, {Component} from 'react'

let mergeStyle = (style1, style2) => {
	var result = {};
	for (var attr in style1) {
		result[attr] = style1[attr];
	}
	for (var attr in style2) {
		result[attr] = style2[attr];
	}
	return result;
};

class HoverComponent extends Component {
	state = {
		hovered: false
	}

	onMouseEnter = () => {
		this.setState({hovered: true});
	}

	onMouseLeave = () => {
		this.setState({hovered: false});
	}

	render() {
		const {style, hoverStyle} = this.props;
		const hovered = this.state.hovered;

		return React.cloneElement(this.props.children, 
			{style: hovered ? mergeStyle(style, hoverStyle) : style, 
			 onMouseEnter: this.onMouseEnter, 
			 onMouseLeave: this.onMouseLeave})
	}
}

export default HoverComponent;