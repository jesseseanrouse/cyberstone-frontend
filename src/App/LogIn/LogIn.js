import React from 'react';

function LogIn() {
	// set the form data to blank
	const [formData, setFormData] = React.useState([
		{ name: '' },
		{ password: '' },
	]);

	// Allows the data in the form to be changed
	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};
	return (
		<>
			<form>
				<div>Username:</div>
				<input
					type='text'
					name='name'
					value={formData.name}
					onChange={handleChange}
					placeholder='Username'
				/>
				<div>Password:</div>
				<input
					type='text'
					name='name'
					value={formData.password}
					onChange={handleChange}
					placeholder='Password'
				/>
			</form>
		</>
	);
}

export default LogIn;
