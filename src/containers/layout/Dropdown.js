import React, { useState } from 'react';
import {
	Dropdown as Menu,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap';

const Dropdown = ({ items, onClick }) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [selected, setSelected] = useState('Select category');

	const toggle = () => setDropdownOpen((prevState) => !prevState);

	const handleSelected = (item) => {
		setSelected(item);
		onClick(item);
	};

	return (
		<div className='dropdown'>
			<Menu isOpen={dropdownOpen} toggle={toggle}>
				<DropdownToggle caret>{selected}</DropdownToggle>
				<DropdownMenu>
					{items.map((item) => (
						<DropdownItem key={item} onClick={() => handleSelected(item)}>
							{item}
						</DropdownItem>
					))}
				</DropdownMenu>
			</Menu>
		</div>
	);
};

export default Dropdown;
