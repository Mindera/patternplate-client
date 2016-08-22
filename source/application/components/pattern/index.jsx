import React, {PropTypes as t} from 'react';
import {merge} from 'lodash';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import autobind from 'autobind-decorator';
import pure from 'pure-render-decorator';


import PatternHeader from './pattern-header';
import PatternCode from './pattern-code';
import PatternDependencies from './pattern-dependencies';
import PatternDocumentation from './pattern-documentation';
import PatternControl from './pattern-control';
import PatternDemo from './pattern-demo';

import Icon from '../common/icon';
import urlQuery from '../../utils/url-query';

const formatMap = {
	source: 'in',
	buffer: 'out',
	demoSource: 'in',
	demoBuffer: 'out'
};

@pure
class Pattern extends React.Component {
	displayName = 'Pattern';

	static propTypes = {
		base: t.string.isRequired,
		id: t.string.isRequired,
		config: t.object.isRequired,
		manifest: t.object.isRequired,
		results: t.object.isRequired,
		environment: t.string.isRequired,
		onEnvironmentChange: t.func.isRequired,
		onDataRequest: t.func.isRequired,
		location: t.object.isRequired,
		loading: t.bool.isRequired,
		reloading: t.bool.isRequired
	};

	static defaultProps = {
		environment: 'index',
		reloading: false,
		onEnvironmentChange: () => {},
		onDataRequest: () => {}
	};

	static contextTypes = {
		router: t.any
	};

	comprehend(results, id) {
		const items = [];

		if (!results) {
			return [];
		}

		if (!results.index) {
			return [];
		}

		for (const resultName of Object.keys(results.index)) {
			const resultConfig = this.props.config.results[resultName];

			if (!resultConfig) {
				continue;
			}

			const result = results.index[resultName];
			const name = resultConfig.name || resultName;
			const keys = Array.isArray(resultConfig.use) ?
				resultConfig.use :
				[resultConfig.use];

			const [contentKey] = keys.filter(key => result[key]);

			const formatKey = formatMap[contentKey];

			if (typeof result !== 'object' || typeof contentKey === 'undefined') {
				continue;
			}

			items.push({
				name,
				key: [id, name].join('/'),
				controlKey: [id, name, 'control'].join('/'),
				id: [id, name].join('/'),
				shortid: name.toLowerCase(),
				format: result[formatKey] || 'html',
				content: result[contentKey],
				source: result.source
			});
		}

		return items;
	}

	componentWillMount() {
		this.items = this.comprehend(this.props.results, this.props.id);
	}

	componentWillReceiveProps(props) {
		this.items = this.comprehend(props.results, props.id);
	}

	updateControls(id, checked) {
		const {location} = this.props;
		const fragments = id.split('/').filter(Boolean);
		const shortid = fragments[fragments.length - 1].toLowerCase();
		this.context.router.push({
			pathname: location.pathname,
			query: {...location.query, source: checked ? shortid : null}
		});
	}

	@autobind
	handleChange(e) {
		this.updateControls(e.target.id, e.target.checked);
	}

	@autobind
	handleEnvironmentChange({target: {value}}) {
		const {location} = this.props;
		const {query} = location;
		const parsed = urlQuery.parse(location.pathname);
		const result = merge({}, parsed, {query: {environment: value}});
		const pathname = urlQuery.format(result);
		this.context.router.push({pathname, query});
	}

	@autobind
	handleReloadClick() {
		const {id, base} = this.props;
		const query = {environment: this.props.environment};
		this.props.onDataRequest(id, query, {reloading: true, loading: false, base});
	}

	render() {
		const {
			base,
			id,
			environment,
			reloading,
			loading,
			manifest: {
				demoEnvironments = [],
				displayName,
				name,
				patterns,
				dependentPatterns = {},
				tags = [],
				flag,
				version
			},
			location
		} = this.props;

		const dependencies = Object.entries(patterns)
			.filter(entry => entry[1] !== id)
			.map(entry => {
				const [name, id] = entry;
				return {name, id};
			});

		const dependents = Object.values(dependentPatterns)
			.map(dependentPattern => {
				const name = dependentPattern.displayName || dependentPattern.name;
				const {id} = dependentPattern;
				return {name, id};
			});

		const hasRelations = Object.keys(dependencies).length > 0 ||
			Object.keys(dependents).length > 0;

		const results = [];
		const controls = [];

		const fullscreen = urlQuery.format({
			pathname: `${base}demo/${id}/index.html`,
			query: {environment}
		});

		for (const item of this.items) {
			const isDoc = (item.name === 'Documentation' || item.name === 'Dependencies');
			const isActive = item.shortid === location.query.source;

			if (item.content.length === 0) {
				continue;
			}

			results.push(
				<input
					className="pattern-state"
					type="checkbox"
					name="pattern-content"
					id={item.id}
					key={item.controlKey}
					checked={isActive}
					onChange={this.handleChange}
					/>
				);
			results.push(isDoc ?
				<PatternDocumentation {...item} base={base}>
					{item.source}
				</PatternDocumentation> :
				<PatternCode {...item} base={base}>
					{item.content}
				</PatternCode>
			);
			controls.push(
				<PatternControl
					key={item.controlKey}
					active={isActive}
					name={item.name}
					shortid={item.shortid}
					location={location}
					base={base}
					/>
				);
		}

		return (
			<div className="pattern">
				<PatternHeader
					id={id}
					name={displayName || name || id}
					version={version}
					flag={flag}
					tags={tags}
					location={location}
					loading={loading}
					reloading={reloading}
					onReloadClick={this.handleReloadClick}
					base={base}
					/>
				<PatternDemo environment={environment} target={id} base={base}/>
				<CSSTransitionGroup
					component="div"
					className="pattern-toolbar"
					transitionName="pattern-toolbar"
					transitionEnterTimeout={300}
					transitionLeaveTimeout={300}
					>
					<div className="pattern-toolbar-container" key="toolbar">
						{controls}
						<div className="pattern-tools">
							{
								demoEnvironments.length > 1 &&
									<label className="pattern-selection">
										<span>Environment: </span>
										<select
											className="native"
											onChange={this.handleEnvironmentChange}
											value={environment}
											title={`Change environment for pattern ${id}`}
											>
											{
												demoEnvironments
													.map(env => {
														return (
															<option
																key={env.name}
																value={env.name}
																>
																{env.displayName || env.name}
															</option>
														);
													})
											}
										</select>
										<Icon className="pattern-selection__arrow" base={base} symbol="arrow-right"/>
									</label>
							}
							{
								hasRelations &&
									<PatternControl
										className="pattern-tool"
										shortid="dependencies-state"
										active={location.query.source === 'dependencies-state'}
										name={<Icon base={base} symbol="dependencies" description="Relations"/>}
										title={`Show relations for pattern ${id}`}
										location={location}
										base={base}
										/>
							}
							<a
								className="pattern-control pattern-tool"
								href={fullscreen}
								target="_blank"
								title={`Show fullscreen demo for pattern ${id}`}
								rel="nofollow"
								>
								<Icon
									base={base}
									inline={false}
									symbol="fullscreen"
									description="Fullscreen"
									/>
							</a>
						</div>
					</div>
				</CSSTransitionGroup>
				<div className="pattern-content">
					{results}
					{
						hasRelations &&
							[
								<input
									className="pattern-state"
									type="checkbox"
									id={`${id}/dependencies-state`}
									key={`${id}/dependencies-state`}
									checked={location.query.source === 'dependencies-state'}
									onChange={this.handleChange}
									/>,
								<PatternCode
									name="Relations"
									highlight={false}
									key={`${id}/dependencies`}
									copy={false}
									base={base}
									>
									<PatternDependencies
										id={id}
										name={displayName || name}
										dependents={dependents}
										dependencies={dependencies}
										location={location}
										base={base}
										/>
								</PatternCode>
							]
					}
				</div>
			</div>
		);
	}
}

export default Pattern;
