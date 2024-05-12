import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavigationAndSidebar from "../../components/NavigationAndSidebar/NavigationAndSidebar";
import "../marketPlace/MarketPlace.css";
import { useSelector } from "react-redux";
const MainPage = ({isRealOpen}) => {
	const isLargeHidden = useSelector((state) => state.outlet.isLargeHidden);
	const isChatsOpen = useSelector((state) => state.outlet.isChatsOpen);
	const isChatOpen = useSelector((state) => state.outlet.isChatOpen);
	const [width, setWidth] = useState(window.innerWidth);
	const [isHidden, setIsHidden] = useState(false);
	const [currentPath, setCurrentPath] = useState(window.location.pathname);
	const breakpointForGrid = 1365;
	const breakpoint = 680;

	useEffect(() => {
		const handleResizeWindow = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResizeWindow);

		return () => {
			window.removeEventListener("resize", handleResizeWindow);
		};
	}, []);

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const threshold = 100;
		setIsHidden(scrollPosition > threshold);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<NavigationAndSidebar />
			<>
				<Outlet />
			</>
		</>
	);
};

export default MainPage;
