// import React
import React from 'react';
import { Link } from 'react-router-dom';
// Font awesome for bars
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import css
import './NavBar.css';

function NavBar() {
	const handleClickBars = () => {
		let nav = document.getElementById('linksList');
		if (nav.style.display === 'flex') {
			nav.style.display = 'none';
		} else {
			nav.style.display = 'flex';
		}
	};
	const handleClick = () => {
		let nav = document.getElementById('linksList');
		nav.style.display = 'none';
	};
	return (
		<div className='navBar'>
			<header className='mobileNavBar'>
				<Link className='appTitle' to='/' onClick={handleClick}>
					<div>CyberStone</div>
				</Link>
				<div className='navIcon' onClick={handleClickBars}>
					<FontAwesomeIcon className='appTitle' icon={faBars} />
				</div>
			</header>
			<nav id='linksList'>
				<Link className='navAbout' to='/about' onClick={handleClick}>
					About
				</Link>
				<Link className='navInformation' to='/info' onClick={handleClick}>
					Information
				</Link>
			</nav>
		</div>
	);
}

export default NavBar;
