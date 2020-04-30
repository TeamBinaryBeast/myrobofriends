import React from 'react';
import './Scroll.css';

const Scroll = (props) =>{
	return (
		<div style={{ overflowY:'scroll', height:'800px',margin:'40px'}}>
			{props.children}
		</div>

		)
}

export default Scroll;