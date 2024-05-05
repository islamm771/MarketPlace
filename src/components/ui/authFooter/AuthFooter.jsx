import React from "react";
import "./auth-footer.css";
import { Link } from "react-router-dom";

const AuthFooter = ({ isMobileView, style }) => {
	return (
		<footer
			style={{ ...style }}
			className={`${
				isMobileView ? "" : "isMobileView"
			} text-center fw-semibold fs-6 login-footer`}
		>
			{/* begin::Link */}
			<div className="footer-links-container">
				<Link to="/auth">Terms of use</Link>
				<Link to="/auth">Privacy Policy</Link>
				<Link to="/auth">Contact Us</Link>
				<Link to="/auth">About</Link>
				<Link to="/auth">Blog</Link>
				<Link to="/auth">Events</Link>
			</div>
			<p className="copyrights">&copy; 2024 ABNCW</p>
			{/* end::Link */}
		</footer>
	);
};

export default AuthFooter;
