import React, { Component } from "react";
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
		fetch("/api/navlist")
			.then(res => res.json())
			.then(navlist => {
				let leftNav = [];
				let rightNav = [];

				navlist.forEach(element => {
					if (element.className.indexOf("left") > -1) {
						leftNav.push(element);
					} else {
						rightNav.push(element);
					}
				});
				this.setState({ leftNav, rightNav });
			});
	}

	render() {
		return <nav>
						<ul className="navbar-left">
							{this.state.leftNav.map(link => (
								<li className={link.className} key={link.label}>
									<a>{link.label}</a>
								</li>
							))}
						</ul>
						<ul className="navbar-right">
								{this.state.rightNav.map(link => (
									<li
										className={link.className}
										key={link.label}>
										<a>{link.label}</a>
									</li>
								))}
							</ul>
					</nav>;
			}
		}

export default Navbar;
