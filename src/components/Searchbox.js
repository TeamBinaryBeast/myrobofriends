import React from 'react';

const Searchbox = ({ searchfield,searchChange }) => {
	return (
		<div className='pa2'>
		<input 
		className='pa3 ba b--orange bg-lightt-red'
		type='search' 
		placeholder='Search robots'
		onChange={searchChange} 
		/>
		</div>
		);
}

export default Searchbox;