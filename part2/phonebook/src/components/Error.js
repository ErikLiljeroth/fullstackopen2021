import React from 'react'

const Error = ({ message }) => {
	if (message === null) {
		return null
	}

	const errorStyle = {
		color: 'red',
		background: 'lightgrey',
		fontStyle: 'bold',
		fontSize: '14',
		borderStyle: 'solid',
		borderRadius: '5px',
		padding: '10px'
	}

	return (
		<div style={errorStyle}>
			{message}
		</div>
	)
}

export default Error