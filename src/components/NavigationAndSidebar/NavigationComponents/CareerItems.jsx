import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
	setIsLargeHidden,
	setIsMobileNavOpen,
	setIsOverlayVisible,
} from "../../../app/feature/outletSlice";

const CareerItems = ({ isMobile }) => {
	const dispatch = useDispatch();
	const isLargeHidden = useSelector((state) => state.outlet.isLargeHidden);
	return (
		<>
			<li className="menu-item">
				<Link
					className="menu-item-link text-tooltip-tfr"
					to="/careers"
					onClick={() => {
						if (isMobile) {
							dispatch(setIsOverlayVisible({ value: false }));
							dispatch(setIsMobileNavOpen({ value: false }));
						} else {
							dispatch(setIsLargeHidden({ value: !isLargeHidden }));
						}
					}}
				>
					<svg
						className="menu-item-link-icon icon-events menu-item-link-icon icon-forums market-place-icon"
						xmlns="http://www.w3.org/2000/svg"
						width="1.25em"
						height="1em"
						viewBox="0 0 640 512"
					>
						<path d="M496 224c-79.59 0-144 64.41-144 144s64.41 144 144 144s144-64.41 144-144s-64.41-144-144-144m64 150.29c0 5.34-4.37 9.71-9.71 9.71h-60.57c-5.34 0-9.71-4.37-9.71-9.71v-76.57c0-5.34 4.37-9.71 9.71-9.71h12.57c5.34 0 9.71 4.37 9.71 9.71V352h38.29c5.34 0 9.71 4.37 9.71 9.71zM496 192c5.4 0 10.72.33 16 .81V144c0-25.6-22.4-48-48-48h-80V48c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h395.12c28.6-20.09 63.35-32 100.88-32M320 96H192V64h128zm6.82 224H208c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h291.43C327.1 423.96 320 396.82 320 368c0-16.66 2.48-32.72 6.82-48" />
					</svg>
					Menu Item 1
				</Link>
			</li>
			<li className="menu-item">
				<Link
					className="menu-item-link text-tooltip-tfr"
					to="/careers"
					onClick={() => {
						if (isMobile) {
							dispatch(setIsOverlayVisible({ value: false }));
							dispatch(setIsMobileNavOpen({ value: false }));
						} else {
							dispatch(setIsLargeHidden({ value: !isLargeHidden }));
						}
					}}
				>
					<svg
						className="menu-item-link-icon icon-events menu-item-link-icon icon-forums market-place-icon"
						xmlns="http://www.w3.org/2000/svg"
						width="1.25em"
						height="1em"
						viewBox="0 0 640 512"
					>
						<path d="M496 224c-79.59 0-144 64.41-144 144s64.41 144 144 144s144-64.41 144-144s-64.41-144-144-144m64 150.29c0 5.34-4.37 9.71-9.71 9.71h-60.57c-5.34 0-9.71-4.37-9.71-9.71v-76.57c0-5.34 4.37-9.71 9.71-9.71h12.57c5.34 0 9.71 4.37 9.71 9.71V352h38.29c5.34 0 9.71 4.37 9.71 9.71zM496 192c5.4 0 10.72.33 16 .81V144c0-25.6-22.4-48-48-48h-80V48c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h395.12c28.6-20.09 63.35-32 100.88-32M320 96H192V64h128zm6.82 224H208c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h291.43C327.1 423.96 320 396.82 320 368c0-16.66 2.48-32.72 6.82-48" />
					</svg>
					Menu Item 2
				</Link>
			</li>
			<li className="menu-item">
				<Link
					className="menu-item-link text-tooltip-tfr"
					to="/careers"
					onClick={() => {
						if (isMobile) {
							dispatch(setIsOverlayVisible({ value: false }));
							dispatch(setIsMobileNavOpen({ value: false }));
						} else {
							dispatch(setIsLargeHidden({ value: !isLargeHidden }));
						}
					}}
				>
					<svg
						className="menu-item-link-icon icon-events menu-item-link-icon icon-forums market-place-icon"
						xmlns="http://www.w3.org/2000/svg"
						width="1.25em"
						height="1em"
						viewBox="0 0 640 512"
					>
						<path d="M496 224c-79.59 0-144 64.41-144 144s64.41 144 144 144s144-64.41 144-144s-64.41-144-144-144m64 150.29c0 5.34-4.37 9.71-9.71 9.71h-60.57c-5.34 0-9.71-4.37-9.71-9.71v-76.57c0-5.34 4.37-9.71 9.71-9.71h12.57c5.34 0 9.71 4.37 9.71 9.71V352h38.29c5.34 0 9.71 4.37 9.71 9.71zM496 192c5.4 0 10.72.33 16 .81V144c0-25.6-22.4-48-48-48h-80V48c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h395.12c28.6-20.09 63.35-32 100.88-32M320 96H192V64h128zm6.82 224H208c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h291.43C327.1 423.96 320 396.82 320 368c0-16.66 2.48-32.72 6.82-48" />
					</svg>
					Menu Item 3
				</Link>
			</li>
		</>
	);
};

export default CareerItems;
