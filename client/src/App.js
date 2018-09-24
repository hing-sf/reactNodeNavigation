import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar"
import Women from "./components/Women";
import Designer from "./components/Designer";
import Basement from "./components/Basement";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Navbar />
					<Switch>
						<Route exact strict path="/products/women" component={Women} />
						<Route exact strict path="/products/designer" component={Designer} />
						<Route exact strict path="/products/maternity" render={ () => { return (<div className="container"><h1>Maternity</h1></div>) }} />
						<Route exact strict path="/products/women/shoes" render={ () => { return (<div className="container"><h1>Shoes</h1></div>) }} />
						<Route exact strict path="/products/women/handbags" render={ () => { return (<div className="container"><h1>Handbags</h1></div>) }} />
						<Route exact strict path="/products/girls" render={ () => { return (<div className="container"><h1>Girls</h1></div>) }} />
						<Route exact strict path="/products/boys" render={ () => { return (<div className="container"><h1>Boys</h1></div>) }} />
						<Route exact strict path="/products/women/basement" component={Basement} />
						<Route exact strict path="/badassmoms/karina" render={ () => { return (<div className="container"><h1>Bad Ass Moms</h1></div>) }} />
						<Route path="/p/cleanout" render={ () => { return (<div className="container"><h1 className="green">SELL</h1></div>) }} />
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}

export default App;






