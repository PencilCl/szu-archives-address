import React, { Component, PropTypes } from 'react'

import HoverComponent from './HoverComponent'

const styles = {
	pagination: {
		display: 'inline-block',
		overflow: 'hidden'
	},
	paginationLi: {
		float: 'left',
		listStyle: 'none',
		fontSize: '1em',
		height: '1.5em',
		margin: '0px 0.5em',
		cursor: 'pointer',
		color: '#7fa6c1',
		lineHeight: '1.5em'
	},
	paginationLiHover: {
		textDecoration: 'underline'
	},
	currentPage: {
		float: 'left',
		listStyle: 'none',
		fontSize: '1em',
		height: '1.5em',
		margin: '0px 0.5em',
		cursor: 'pointer',
		color: '#7fa6c1',
		lineHeight: '1.5em',
		color: 'black',
		cursor: 'default'
	},
	currenetPageHover: {
		textDecoration: 'none'
	},
	paginationWrapperStyle: {
		textAlign: 'center',
		overflow: 'hidden'
	}
}

class Pagination extends Component {
	
	_changePage(id, event) {
		const {changePage} = this.props;
		changePage(id);
	}
	
	/**
	 * 生成需要显示的页面列表
	 * @return {array} [
	 *   {
	 *   	name: 上一页,
	 *   	current: false,
	 *   	id: currentPage - 1
	 *   },
	 *   ...
	 * ]
	 */
	_buildPageList() {
		const {currentPage, totlePage} = this.props;
		if (totlePage < 1) {
			return [];
		}
		let pageList = [];
		pageList.push({name: '上一页', current: currentPage == 1, id: currentPage - 1});
		let i = currentPage - 4 + (currentPage + 5 > totlePage ? totlePage - currentPage - 5 : 0);
		i = i < 1 ? 1 : i;
		while (i < currentPage) {
			pageList.push({name: i, id: i});
			++i;
		}
		pageList.push({name: i, current: true, id: i});
		++i;
		let max = i + 4 - (currentPage >= 5 ? 0 : currentPage - 5);
		max = max > totlePage ? totlePage : max;
		while (i <= max) {
			pageList.push({name: i, id: i});
			++i;
		}
		pageList.push({name: '下一页', current: currentPage == totlePage, id: currentPage + 1});
		return pageList;
	}

	render() {
		let pageList = this._buildPageList();
		return (
			<div style={styles.paginationWrapperStyle}>
				<ul style={styles.pagination}>
					{pageList.map((page, index) => (
						<HoverComponent key={index} style={page.current ? styles.currentPage : styles.paginationLi} hoverStyle={page.current ? styles.currenetPageHover : styles.paginationLiHover}>
							<li onClick={page.current ? null : (event) => this._changePage(page.id, event)}>{page.name}</li>
						</HoverComponent>
					))}
				</ul>
			</div>
		)
	}
}

Pagination.PropTypes = {
	currentPage: PropTypes.number.isRequired,
	totlePage: PropTypes.number.isRequired,
	changePage: PropTypes.func.isRequired
}

export default Pagination