import React from 'react';

export default function Counter({ count, updateCount }) {
	return (
		<div className="counter-container">
			<button
				className="btn-counter"
				onClick={() => {
					if (count > 1) updateCount((count) => count - 1);
				}}
			>
				-
			</button>
			<span className="counter-text">{count}</span>
			<button className="btn-counter" onClick={() => updateCount((count) => count + 1)}>
				+
			</button>
		</div>
	);
}
