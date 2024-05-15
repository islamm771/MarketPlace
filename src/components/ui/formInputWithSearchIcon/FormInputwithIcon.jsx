import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const FormInputwithIcon = ({ name, id, label }) => {
	const [focused, setFocused] = useState(false);

	const handleFocus = () => {
		setFocused(true);
		console.log(focused);
	};

	const handleBlur = (e) => {
		if (!e.target.value) {
			setFocused(false);
		}
	};

	return (
		<div
			className={`form-input ${focused ? "active" : ""} small with-button`}
			style={{ marginBottom: "15px" }}
		>
			<label htmlFor={id}>{label}</label>
			<input
				type="text"
				id={id}
				name={name}
				onFocus={handleFocus}
				onBlur={handleBlur}
				style={{ fontSize: `${focused ? "1rem" : ""}` }}
			/>
			<button className="button primary">
				{/* <svg className="icon-magnifying-glass">
					<use xlinkHref="#svg-magnifying-glass"></use>
				</svg> */}
				<FaMagnifyingGlass className="w-[20px] h-[20px] mx-auto" />
			</button>
		</div>
	);
};

export default FormInputwithIcon;
