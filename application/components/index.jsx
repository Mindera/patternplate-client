import React from 'react';
import {RouteHandler} from 'react-router';

import Toolbar from './navigation/toolbar.jsx';
import Navigation from './navigation/index.jsx';

class Application extends React.Component {
	displayName = 'Application';

	render () {
		return (
			<div className="application">
				<Toolbar {...this.props} />
				<Navigation {...this.props} />
				<RouteHandler {...this.props} />
			</div>
		);
	}
}

export default Application;