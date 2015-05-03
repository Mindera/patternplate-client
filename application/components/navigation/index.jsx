import React from 'react';
import {Link} from 'react-router';

import NavigationTree from './navigation-tree.jsx';

class Navigation extends React.Component {
	displayName = 'Navigation';

	render () {
		return (
			<nav className="navigation">
				<NavigationTree data={this.props.navigation} path={this.props.path}>
					<li className="navigation-item" key="root">
						<Link to="/">Home</Link>
					</li>
				</NavigationTree>
			</nav>
		);
	}
}

export default Navigation;