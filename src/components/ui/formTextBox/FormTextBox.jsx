import React, { useState } from "react";
import "./FormTextBox.css";

const FormTextBox = ({ label, name,cols,rows, setValue, value, ...rest }) => {
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
		<div className="form-row">
			<div className="form-item form-item-css">
				<div
					className={`form-input ${focused ? "active" : value !== "" && value ? "active" : ""} `}>
					<label htmlFor={name}>{label}</label>
					<textarea
                        {...rest}
                        cols={cols}
                        rows={rows}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default FormTextBox;
