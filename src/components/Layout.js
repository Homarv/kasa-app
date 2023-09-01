import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = () => {
	return (
		<div className="Layout">
			<Navigation />
			<div className="content">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
