import React from 'react';
import { useState } from 'react';

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [playerName, setPlayerName] = useState(initialName);

	const handleEditClick = () => {
		setIsEditing(isEditing => !isEditing);
		if (isEditing) {
			onChangeName(symbol, playerName);
		}
	};

	const handleChange = e => {
		setPlayerName(e.target.value);
	};

	return (
		<li className={isActive ? 'active' : undefined}>
			<span className='player'>
				{!isEditing ? (
					<span className='player-name'>{playerName}</span>
				) : (
					<input type='text' value={playerName} onChange={handleChange} required />
				)}

				<span className='player-symbol'>{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
		</li>
	);
};

export default Player;
