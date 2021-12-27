import React from 'react'

const Notification = ({ message }) => {
	if (message === null) {
		return null
	}

	const notificationStyle = {
		color: 'green',
		background: 'lightgrey',
		fontStyle: 'bold',
		fontSize: '14',
		borderStyle: 'solid',
		borderRadius: '5px',
		padding: '10px'
	}

	return (
		<div style={notificationStyle}>
			{message}
		</div>
	)
}

export default Notification