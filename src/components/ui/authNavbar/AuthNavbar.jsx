import React, { useState } from "react";
import { Link } from "react-router-dom";
// import navbarLogo from "../../../assests/icons/navbar-logo.png";
import navbarLogoTwo from "../../../assests/logo/Abncw-Logo.svg";
import unitedStateFlag from "../../../assests/flags/united-states.svg";
import chinaFlag from "../../../assests/flags/china.svg";
import germanyFlag from "../../../assests/flags/germany.svg";
import "./auth-navbar.css";

const languages = [
	{
		lang: "en",
		name: "English",
		flag: unitedStateFlag,
	},
	{
		lang: "zh",
		name: "Mandarin",
		flag: chinaFlag,
	},

	{
		lang: "de",
		name: "German",
		flag: germanyFlag,
	},
];

const AuthNavbar = () => {
	const [flagLang, setFlagLang] = useState(languages[0].flag);
	const [openLangMenu, setOpenLanMenu] = useState(false);
	return (
		<nav className="login-nav-container">
			<div className="nav-left-side">
				<div className="nav-img-logo">
					{/* <img src={navbarLogoTwo} alt="" /> */}
					<img src="/img/flockyFavicon.svg" alt="" />
					<img src="/img/FlockyLogoWhite.svg" alt="" className="flokky-logo" />
					{/* <img src={navbarLogo} alt="" /> */}
				</div>
			</div>

			<div className="lang-container">
				<p onClick={() => setOpenLanMenu(!openLangMenu)} className="lang-text">
					<span>
						<img src={flagLang} alt="" />
					</span>
					<span> Language</span>
				</p>
				<div
					className="flags-menu-container"
					style={{ height: `${openLangMenu ? "95px" : "0px"}` }}
				>
					{languages.map((l) => (
						<div
							className="flag-box"
							key={l.lang}
							onClick={() => {
								setFlagLang(l.flag);
								setOpenLanMenu(!openLangMenu);
							}}
						>
							<Link to="#" className="flag-item">
								<span className="">
									<img className="rounded-1" src={l.flag} alt="metronic" />
								</span>
								{l.name}
							</Link>
						</div>
					))}
				</div>
			</div>
		</nav>
	);
};

export default AuthNavbar;
