import React, { useEffect, useState } from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	setIsMiniMenuHidden,
	setIsLargeHidden,
} from "../../../app/feature/outletSlice";
import { useLocation } from "react-router-dom";
import "../NavigationAndSidebar.css";
import MiniNavigationMarketplaceItems from "../NavigationComponents/MiniNavigationMarketplaceItems";
import MiniNavigationCareerItems from "../NavigationComponents/MiniNavigationCareerItems";
import MiniNavigationCrea8Items from "../NavigationComponents/MiniNavigationCrea8Items";

const MiniNavigation = () => {
	const location = useLocation();
	const isMiniMenuHidden = useSelector(
		(state) => state.outlet.isMiniMenuHidden
	);

	const dispatch = useDispatch();
	const isLargeHidden = useSelector((state) => state.outlet.isLargeHidden);
	const breakPoint = 680;
	const [width, setWidth] = useState(window.innerWidth);

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const threshold = 100;
		dispatch(setIsMiniMenuHidden({ value: scrollPosition > threshold }));
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		const handleResizeWindow = () => {
			if (window.innerWidth < breakPoint) {
				dispatch(setIsLargeHidden({ value: true }));
				dispatch(setIsMiniMenuHidden({ value: false }));
			}
			setWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleResizeWindow);
		return () => {
			window.removeEventListener("resize", handleResizeWindow);
		};
	}, []);

	return (
		<nav
			id="navigation-widget-small"
			className={`small-nav navigation-widget ${
				location.pathname.toString().includes("/marketplace") &&
				width < breakPoint
					? "mini-menu-secondary-pages"
					: "navigation-widget-desktop"
			} closed sidebar left ${
				isMiniMenuHidden && width < breakPoint ? "hidden" : ""
			}  ${isLargeHidden ? "active delayed" : "hidden"}`}
		>
			<div className="profile-image">
				<div className="profile-image-content">
					<img src="/img/avatar/01.jpg" alt="Profile" />
					<RiVerifiedBadgeFill
						className="nav-small-verify"
						color={"#36e9f7"}
						size={16}
					/>
					<MdAdminPanelSettings
						className="nav-small-admin"
						color={"#d7006a"}
						size={16}
					/>
					<div className="badge-container-nav">
						<img src="/img/download.png" alt="Padge" />
						<p className="badge-number-nav">12</p>
					</div>
				</div>
			</div>

			<ul
				className="menu small"
				style={{
					paddingLeft: "0",
					paddingBottom: `${isMiniMenuHidden ? "0" : "15px"}`,
				}}
			>
				{location.pathname.includes("/marketplace") && (
					<MiniNavigationMarketplaceItems />
				)}
				{location.pathname.includes("/careers") && (
					<MiniNavigationCareerItems />
				)}
				{location.pathname.includes("/crea8") && <MiniNavigationCrea8Items />}
				{(location.pathname.toString().includes("/marketplace") ||
					location.pathname.toString().includes("/careers") ||
					location.pathname.toString().includes("/crea8")) && (
					<div className="mini-menu-border"></div>
				)}
				<li
					className={`menu-item ${location.pathname === "/" ? "active" : ""}`}
				>
					<Link
						className="menu-item-link text-tooltip-tfr"
						to="/"
						data-title="Newsfeed"
					>
						<svg className="menu-item-link-icon icon-newsfeed">
							<use xlinkHref="#svg-newsfeed"></use>
						</svg>
					</Link>
				</li>

				<li
					className={`menu-item ${
						location.pathname.includes("/directory") ? "active" : ""
					}`}
				>
					<Link
						className="menu-item-link text-tooltip-tfr"
						to="/directory"
						data-title="Overview"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							className="menu-item-link-icon icon-directory"
						>
							<path d="M1,13 C0.44771525,13 0,12.5522847 0,12 C0,11.4477153 0.44771525,11 1,11 L1.41604369,11 C2.18760031,9.23409522 3.94968096,8 6,8 C7.82440303,8 9.42058775,8.97711876 10.2937745,10.4365766 C10.7845275,10.1580384 11.3764731,10 12,10 C12.6235269,10 13.2154725,10.1580384 13.7062255,10.4365766 C14.5794122,8.97711876 16.175597,8 18,8 C20.050319,8 21.8123997,9.23409522 22.5839563,11 L23,11 C23.5522847,11 24,11.4477153 24,12 C24,12.5522847 23.5522847,13 23,13 C23,15.7614237 20.7614237,18 18,18 C15.2385763,18 13,15.7614237 13,13 C13,12.8312503 13.0083597,12.6644531 13.0246876,12.5 L13,12.5 C13,12.2965729 12.6045695,12 12,12 C11.3954305,12 11,12.2965729 11,12.5 L10.9753124,12.5 C10.9916403,12.6644531 11,12.8312503 11,13 C11,15.7614237 8.76142375,18 6,18 C3.23857625,18 1,15.7614237 1,13 Z M6,16 C7.65685425,16 9,14.6568542 9,13 C9,11.3431458 7.65685425,10 6,10 C4.34314575,10 3,11.3431458 3,13 C3,14.6568542 4.34314575,16 6,16 Z M18,16 C19.6568542,16 21,14.6568542 21,13 C21,11.3431458 19.6568542,10 18,10 C16.3431458,10 15,11.3431458 15,13 C15,14.6568542 16.3431458,16 18,16 Z"></path>
						</svg>
					</Link>
				</li>

				<li
					className={`menu-item ${
						location.pathname.includes("/affiliations") ? "active" : ""
					}`}
				>
					<Link
						className="menu-item-link text-tooltip-tfr"
						to="/affiliations"
						data-title="Groups"
					>
						<svg className="menu-item-link-icon icon-group">
							<use xlinkHref="#svg-group"></use>
						</svg>
					</Link>
				</li>

				<li
					className={`menu-item ${
						location.pathname.includes("/businesses") ? "active" : ""
					}`}
				>
					<Link
						className="menu-item-link text-tooltip-tfr"
						to="/businesses"
						data-title="Members"
					>
						<svg
							className="menu-item-link-icon icon-directory"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<path
								// fill="#f79f58"
								d="M5,21 L5,1 L7,1 L7,2 L21.1247446,2 L18.1259893,7.99991055 L21.126034,14 L7,14 L7,21 L8,21 L8,23 L4,23 L4,21 L5,21 Z M7,12 L17.889966,12 L15.8900107,8.00008945 L17.8892554,4 L7,4 L7,12 Z"
							></path>
						</svg>
					</Link>
				</li>

				<li
					className={`menu-item ${
						location.pathname.includes("/connections") ? "active" : ""
					}`}
				>
					<Link
						className="menu-item-link text-tooltip-tfr"
						to={"/connections"}
						data-title="Badges"
					>
						<svg className="menu-item-link-icon icon-forums">
							<use xlinkHref="#svg-forums"></use>
						</svg>
					</Link>
				</li>

				<li
					className={`menu-item ${
						location.pathname.includes("/sidekicks") ? "active" : ""
					}`}
				>
					<Link
						className="menu-item-link text-tooltip-tfr"
						to="/sidekicks"
						data-title="Quests"
					>
						<svg
							className="menu-item-link-icon icon-directory"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"></path>
						</svg>
					</Link>
				</li>

				<li
					className={`menu-item ${
						location.pathname.includes("/reviews") ? "active" : ""
					}`}
				>
					<Link
						className="menu-item-link text-tooltip-tfr"
						to={"/reviews"}
						data-title="Streams"
					>
						<svg className="menu-item-link-icon icon-quests">
							<use xlinkHref="#svg-quests"></use>
						</svg>
					</Link>
				</li>

				<li
					className={`menu-item job-icon ${
						location.pathname.includes("/jobsandprojects") ? "active" : ""
					}`}
				>
					<Link
						className="menu-item-link text-tooltip-tfr"
						to="/jobsandprojects"
						data-title="Events"
					>
						<svg
							className="menu-item-link-icon icon-directory"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							style={{
								color: location.pathname.includes("/jobsandprojects")
									? "white"
									: "#adafca",
							}}
						>
							<rect
								fill="none"
								x="2"
								y="7"
								width="20"
								height="14"
								rx="2"
								ry="2"
							></rect>
							<path
								fill="none"
								d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
							></path>
						</svg>
					</Link>
				</li>

				{!location.pathname.includes("/marketplace") && (
					<li
						className={`menu-item market-icon ${
							location.pathname.includes("/marketplace") ? "active" : ""
						}`}
					>
						<Link
							className="menu-item-link text-tooltip-tfr"
							to="/marketplace"
							data-title="Forums"
						>
							<svg
								className="menu-item-link-icon icon-directory"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 30 30"
							>
								<path
									fill={
										location.pathname.includes("/marketplace")
											? "white"
											: "#adafca"
									}
									d="M23 14c-.7 0-1.4-.2-2-.6-.6.3-1.3.6-2 .6s-1.4-.2-2-.6c-.6.3-1.3.6-2 .6s-1.4-.2-2-.6c-.6.3-1.3.6-2 .6s-1.4-.2-2-.6c-.6.4-1.3.6-2 .6s-1.4-.2-2-.5c-.6.3-1.3.5-2 .5v11c0 1.1.9 2 2 2h12V17h6v10h2c1.1 0 2-.9 2-2V14c-.7 0-1.4-.2-2-.5-.6.3-1.3.5-2 .5zm-10 9H7v-6h6v6zM26 6V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v1l-3 4c0 1.1.9 2 2 2s2-.9 2-2l2-4h3l-1 4c0 1.1.9 2 2 2s2-.9 2-2V6h4v4c0 1.1.9 2 2 2s2-.9 2-2l-1-4h3l2 4c0 1.1.9 2 2 2s2-.9 2-2l-3-4z"
								></path>
							</svg>
						</Link>
					</li>
				)}

				<li
					className={`menu-item ${
						location.pathname.includes("/offers") ? "active" : ""
					}`}
				>
					<Link
						className="menu-item-link text-tooltip-tfr"
						to={"/offers"}
						data-title="Marketplace"
					>
						<svg
							className="menu-item-link-icon icon-directory"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<path d="M5.5,7A1.5,1.5 0 0,1 4,5.5A1.5,1.5 0 0,1 5.5,4A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 5.5,7M21.41,11.58L12.41,2.58C12.05,2.22 11.55,2 11,2H4C2.89,2 2,2.89 2,4V11C2,11.55 2.22,12.05 2.59,12.41L11.58,21.41C11.95,21.77 12.45,22 13,22C13.55,22 14.05,21.77 14.41,21.41L21.41,14.41C21.78,14.05 22,13.55 22,13C22,12.44 21.77,11.94 21.41,11.58Z"></path>
						</svg>
					</Link>
				</li>

				<li
					className={`menu-item ${
						location.pathname.includes("/events") ? "active" : ""
					}`}
				>
					<Link
						className="menu-item-link text-tooltip-tfr"
						to={"/events"}
						data-title="Marketplace"
					>
						<svg
							className="menu-item-link-icon icon-directory"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<path d="M20,8 L20,5 L18,5 L18,6 L16,6 L16,5 L8,5 L8,6 L6,6 L6,5 L4,5 L4,8 L20,8 Z M20,10 L4,10 L4,20 L20,20 L20,10 Z M18,3 L20,3 C21.1045695,3 22,3.8954305 22,5 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,5 C2,3.8954305 2.8954305,3 4,3 L6,3 L6,2 L8,2 L8,3 L16,3 L16,2 L18,2 L18,3 Z M9,14 L7,14 L7,12 L9,12 L9,14 Z M13,14 L11,14 L11,12 L13,12 L13,14 Z M17,14 L15,14 L15,12 L17,12 L17,14 Z M9,18 L7,18 L7,16 L9,16 L9,18 Z M13,18 L11,18 L11,16 L13,16 L13,18 Z"></path>
						</svg>
					</Link>
				</li>

				<li
					className={`menu-item ${
						location.pathname.includes("/forum") ? "active" : ""
					}`}
				>
					<Link
						className="menu-item-link text-tooltip-tfr"
						to={"/forum"}
						data-title="Marketplace"
					>
						<svg className="menu-item-link-icon icon-forums">
							<use xlinkHref="#svg-forums"></use>
						</svg>
					</Link>
				</li>
			</ul>
		</nav>
		
	);
};

export default MiniNavigation;
