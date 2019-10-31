import React, { Component } from 'react';
import styles from './header.css';

function Header() {
	return (
		<header className="super">
			<div class="container-fluid bg-white controledWidth">
				<h1 class="display-4 text-center">
					<i class="fas fa-tasks text-info"></i> To<span class="text-info">Do List</span>
				</h1>
			</div>
		</header>
	)
}

export default Header;