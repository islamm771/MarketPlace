import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import NavigationAndSidebar from "../../components/NavigationAndSidebar/NavigationAndSidebar";
import "../marketPlace/MarketPlace.css";
import { useDispatch, useSelector } from "react-redux";
import { setIsLargeHidden } from "../../app/feature/outletSlice";
const MainPage = () => {
	const dispatch = useDispatch()
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

	const mainBodyRef = useRef(null)

	useEffect(() => {
		if (!isLargeHidden) {
			const handleClickOutside = (event) => {
				if (mainBodyRef.current && mainBodyRef.current.contains(event.target)) {
					dispatch(setIsLargeHidden({ value: true }));
				}
			};

			document.addEventListener('mousedown', handleClickOutside);

			// Cleanup function
			return () => {
				document.removeEventListener('mousedown', handleClickOutside);
			};
		}
	}, [isLargeHidden, dispatch]);

	return (
		<>
			<NavigationAndSidebar />
			<div ref={mainBodyRef}>
				<Outlet />
			</div>
		</>
	);
};

export default MainPage;
