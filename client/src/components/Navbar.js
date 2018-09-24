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
			.then(res => res.json())
			.then(navlist => {
				let leftNav = [];
				let rightNav = [];

				navlist.forEach((element, idx) => {

					// add index as id to element
					element['id'] = element['id'] || idx;

					// arrange nav list to placement
					if (element.className.indexOf("left") > -1) {
						leftNav.push(element);
					} else {
						rightNav.push(element);
					}
				});
				this.setState({ leftNav, rightNav });
			});
	}

	// load link based on type
	loadLinks( link ) {
		if (link.href.indexOf('http') > -1) {
			return (
							<li className={`nav-item ${link.className}`} key={link.id }>
									<a target="_blank" href={link.href}>{link.label}</a>
							</li>)
		} else {
			return (
							<NavLink exact strict to={link.href} activeClassName="active-link" key={link.id }>
								<li className={`nav-item ${link.className}`}>
									{link.label}
								</li>
							</NavLink>)
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
							this.loadLinks( link )
						))}
					</ul>
					<ul className="navbar-right">
						{this.state.rightNav.map(link => (
							this.loadLinks( link )
						))}
					</ul>
				</nav>
			</header>
		);
	}
}

export default Navbar;