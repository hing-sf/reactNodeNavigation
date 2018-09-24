import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

class Navbar extends Component {
	constructor() {
		super();
		this.state = {
			leftNav: [],
			rightNav: []
		};
	}

	componentDidMount() {
		// fetch navlist on component Mount
		fetch("/api/navlist")
			.then(res => {
			if (res.status > 400 && res.status < 499) {
				throw Error(`Request rejected with status ${res.status}`);
			} else if (res.status >= 500) {
				throw Error(`Server error status ${res.status}`);
			} else {
				return res.json();
			}
			})
			.then(navlist => {
				let leftNav = [];
				let rightNav = [];

				navlist.forEach((element, idx) => {

					// create id:index to use as element unique key
					element['id'] = element['id'] || idx;

					// arrange nav list to correct group
					(element.className.indexOf("left") > -1) ? leftNav.push(element) : rightNav.push(element);
				});
				this.setState({ leftNav, rightNav });
			})
			.catch(console.error);
	}

	// return link based on type of link.
	loadNavLinks( link ) {
		if (link.href.indexOf('http') > -1) {
			// return link to external site
			return (
							<li className={`nav-item ${link.className}`} key={link.id }>
								<a className={link.color} target="_blank" href={link.href} >{link.label}</a>
							</li>
							)
		} else {
			// return link to internal site
			return (
							<li className={`nav-item ${link.className}`} key={link.id }>
								<NavLink exact strict className={link.color} to={link.href} activeClassName="active-link" >{link.label}</NavLink>
							</li>
							)
		}
	}

	render() {
		return (
			<header>
				<input type="checkbox" id="nav-toggle" className="nav-toggle"/>
				<div className="mobile-header">
					<label htmlFor="nav-toggle">
						<div className="hamburger-btn">
							<div className="btn-line" />
							<div className="btn-line" />
							<div className="btn-line" />
						</div>
					</label>
				</div>
				<nav>
					<ul className="navbar-left">
						{this.state.leftNav.map(link => (
							this.loadNavLinks( link )
						))}
					</ul>
					<ul className="navbar-right">
						{this.state.rightNav.map(link => (
							this.loadNavLinks( link )
						))}
					</ul>
				</nav>
			</header>
		);
	}
}

export default Navbar;