'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _github = require('hast-util-sanitize/lib/github');

var _github2 = _interopRequireDefault(_github);

var _lodash = require('lodash');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _remark = require('remark');

var _remark2 = _interopRequireDefault(_remark);

var _remarkGemojiToEmoji = require('remark-gemoji-to-emoji');

var _remarkGemojiToEmoji2 = _interopRequireDefault(_remarkGemojiToEmoji);

var _remarkVdom = require('remark-vdom');

var _remarkVdom2 = _interopRequireDefault(_remarkVdom);

var _markdownLink = require('./markdown-link');

var _markdownLink2 = _interopRequireDefault(_markdownLink);

var _markdownCode = require('./markdown-code');

var _markdownCode2 = _interopRequireDefault(_markdownCode);

var _markdownHeadline = require('./markdown-headline');

var _markdownHeadline2 = _interopRequireDefault(_markdownHeadline);

var _wrap = require('./wrap');

var _wrap2 = _interopRequireDefault(_wrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = render;


function render(source, options) {
	var base = options.base,
	    hash = options.hash,
	    highlights = options.highlights,
	    highlight = options.highlight,
	    query = options.query,
	    pathname = options.pathname,
	    onHashChange = options.onHashChange;

	var h = _react2.default.createElement;
	var headline = (0, _wrap2.default)(_markdownHeadline2.default);

	var table = (0, _wrap2.default)(strictChildren(MarkdownGeneric, ['thead', 'tbody']));
	var tbody = (0, _wrap2.default)(strictChildren(MarkdownGeneric, ['tr']));
	var tr = (0, _wrap2.default)(strictChildren(MarkdownGeneric, ['td', 'th']));
	var td = (0, _wrap2.default)(MarkdownGeneric);

	var link = { base: base, hash: hash, query: query, pathname: pathname, onHashChange: onHashChange };
	var code = { highlights: highlights, highlight: highlight };

	var components = {
		a: (0, _wrap2.default)(_markdownLink2.default, link),
		code: (0, _wrap2.default)(_markdownCode2.default, code),
		h1: headline,
		h2: headline,
		h3: headline,
		h4: headline,
		h5: headline,
		h6: headline,
		table: table,
		thead: tbody,
		tbody: tbody,
		tr: tr,
		th: td,
		td: td
	};

	var sanitize = (0, _lodash.merge)({}, _github2.default);
	sanitize.attributes = {
		a: ['href', 'title'],
		code: ['className'],
		img: ['src', 'alt']
	};

	var opts = { h: h, components: components, sanitize: sanitize };

	return (0, _remark2.default)().use(_remarkVdom2.default, opts).use(_remarkGemojiToEmoji2.default).process(source).contents;
}

function MarkdownGeneric(props) {
	var Component = props.tagName;
	return _react2.default.createElement(
		Component,
		null,
		props.children
	);
}

MarkdownGeneric.propTypes = {
	tagName: _react.PropTypes.string,
	children: _react.PropTypes.any
};

function strictChildren(Component, tagNames) {
	function StrictChildren(props) {
		var children = _react.Children.toArray(props.children).filter(function (child) {
			return (typeof child === 'undefined' ? 'undefined' : (0, _typeof3.default)(child)) === 'object' && (0, _lodash.includes)(tagNames, child.props.tagName);
		});
		return _react2.default.createElement(
			Component,
			props,
			children
		);
	}

	StrictChildren.propTypes = {
		children: _react.PropTypes.any
	};

	return StrictChildren;
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9tYXJrZG93bi9yZW5kZXIuanMiXSwibmFtZXMiOlsicmVuZGVyIiwic291cmNlIiwib3B0aW9ucyIsImJhc2UiLCJoYXNoIiwiaGlnaGxpZ2h0cyIsImhpZ2hsaWdodCIsInF1ZXJ5IiwicGF0aG5hbWUiLCJvbkhhc2hDaGFuZ2UiLCJoIiwiY3JlYXRlRWxlbWVudCIsImhlYWRsaW5lIiwidGFibGUiLCJzdHJpY3RDaGlsZHJlbiIsIk1hcmtkb3duR2VuZXJpYyIsInRib2R5IiwidHIiLCJ0ZCIsImxpbmsiLCJjb2RlIiwiY29tcG9uZW50cyIsImEiLCJoMSIsImgyIiwiaDMiLCJoNCIsImg1IiwiaDYiLCJ0aGVhZCIsInRoIiwic2FuaXRpemUiLCJhdHRyaWJ1dGVzIiwiaW1nIiwib3B0cyIsInVzZSIsInByb2Nlc3MiLCJjb250ZW50cyIsInByb3BzIiwiQ29tcG9uZW50IiwidGFnTmFtZSIsImNoaWxkcmVuIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiYW55IiwidGFnTmFtZXMiLCJTdHJpY3RDaGlsZHJlbiIsInRvQXJyYXkiLCJmaWx0ZXIiLCJjaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVlQSxNOzs7QUFFZixTQUFTQSxNQUFULENBQWdCQyxNQUFoQixFQUF3QkMsT0FBeEIsRUFBaUM7QUFBQSxLQUN6QkMsSUFEeUIsR0FDMkNELE9BRDNDLENBQ3pCQyxJQUR5QjtBQUFBLEtBQ25CQyxJQURtQixHQUMyQ0YsT0FEM0MsQ0FDbkJFLElBRG1CO0FBQUEsS0FDYkMsVUFEYSxHQUMyQ0gsT0FEM0MsQ0FDYkcsVUFEYTtBQUFBLEtBQ0RDLFNBREMsR0FDMkNKLE9BRDNDLENBQ0RJLFNBREM7QUFBQSxLQUNVQyxL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cG9ydCBnaCBmcm9tICdoYXN0LXV0aWwtc2FuaXRpemUvbGliL2dpdGh1Yic7XG5pbXBvcnQge2luY2x1ZGVzLCBtZXJnZX0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0LCBDaGlsZHJlbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHJlbWFyayBmcm9tICdyZW1hcmsnO1xuaW1wb3J0IGVtb2ppIGZyb20gJ3JlbWFyay1nZW1vamktdG8tZW1vamknO1xuaW1wb3J0IHZkb20gZnJvbSAncmVtYXJrLXZkb20nO1xuXG5pbXBvcnQgTWFya2Rvd25MaW5rIGZyb20gJy4vbWFya2Rvd24tbGluayc7XG5pbXBvcnQgTWFya2Rvd25Db2RlIGZyb20gJy4vbWFya2Rvd24tY29kZSc7XG5pbXBvcnQgTWFya2Rvd25IZWFkbGluZSBmcm9tICcuL21hcmtkb3duLWhlYWRsaW5lJztcbmltcG9ydCB3cmFwIGZyb20gJy4vd3JhcCc7XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlcjtcblxuZnVuY3Rpb24gcmVuZGVyKHNvdXJjZSwgb3B0aW9ucykge1xuXHRjb25zdCB7YmFzZSwgaGFzaCwgaGlnaGxpZ2h0cywgaGlnaGxpZ2h0LCBxdWVyeSwgcGF0aG5hbWUsIG9uSGFzaENoYW5nZX0gPSBvcHRpb25zO1xuXHRjb25zdCBoID0gUmVhY3QuY3JlYXRlRWxlbWVudDtcblx0Y29uc3QgaGVhZGxpbmUgPSB3cmFwKE1hcmtkb3duSGVhZGxpbmUpO1xuXG5cdGNvbnN0IHRhYmxlID0gd3JhcChzdHJpY3RDaGlsZHJlbihNYXJrZG93bkdlbmVyaWMsIFsndGhlYWQnLCAndGJvZHknXSkpO1xuXHRjb25zdCB0Ym9keSA9IHdyYXAoc3RyaWN0Q2hpbGRyZW4oTWFya2Rvd25HZW5lcmljLCBbJ3RyJ10pKTtcblx0Y29uc3QgdHIgPSB3cmFwKHN0cmljdENoaWxkcmVuKE1hcmtkb3duR2VuZXJpYywgWyd0ZCcsICd0aCddKSk7XG5cdGNvbnN0IHRkID0gd3JhcChNYXJrZG93bkdlbmVyaWMpO1xuXG5cdGNvbnN0IGxpbmsgPSB7YmFzZSwgaGFzaCwgcXVlcnksIHBhdGhuYW1lLCBvbkhhc2hDaGFuZ2V9O1xuXHRjb25zdCBjb2RlID0ge2hpZ2hsaWdodHMsIGhpZ2hsaWdodH07XG5cblx0Y29uc3QgY29tcG9uZW50cyA9IHtcblx0XHRhOiB3cmFwKE1hcmtkb3duTGluaywgbGluayksXG5cdFx0Y29kZTogd3JhcChNYXJrZG93bkNvZGUsIGNvZGUpLFxuXHRcdGgxOiBoZWFkbGluZSxcblx0XHRoMjogaGVhZGxpbmUsXG5cdFx0aDM6IGhlYWRsaW5lLFxuXHRcdGg0OiBoZWFkbGluZSxcblx0XHRoNTogaGVhZGxpbmUsXG5cdFx0aDY6IGhlYWRsaW5lLFxuXHRcdHRhYmxlLFxuXHRcdHRoZWFkOiB0Ym9keSxcblx0XHR0Ym9keSxcblx0XHR0cixcblx0XHR0aDogdGQsXG5cdFx0dGRcblx0fTtcblxuXHRjb25zdCBzYW5pdGl6ZSA9IG1lcmdlKHt9LCBnaCk7XG5cdHNhbml0aXplLmF0dHJpYnV0ZXMgPSB7XG5cdFx0YTogWydocmVmJywgJ3RpdGxlJ10sXG5cdFx0Y29kZTogWydjbGFzc05hbWUnXSxcblx0XHRpbWc6IFsnc3JjJywgJ2FsdCddXG5cdH07XG5cblx0Y29uc3Qgb3B0cyA9IHtoLCBjb21wb25lbnRzLCBzYW5pdGl6ZX07XG5cblx0cmV0dXJuIHJlbWFyaygpXG5cdFx0LnVzZSh2ZG9tLCBvcHRzKVxuXHRcdC51c2UoZW1vamkpXG5cdFx0LnByb2Nlc3Moc291cmNlKVxuXHRcdC5jb250ZW50cztcbn1cblxuZnVuY3Rpb24gTWFya2Rvd25HZW5lcmljKHByb3BzKSB7XG5cdGNvbnN0IENvbXBvbmVudCA9IHByb3BzLnRhZ05hbWU7XG5cdHJldHVybiA8Q29tcG9uZW50Pntwcm9wcy5jaGlsZHJlbn08L0NvbXBvbmVudD47XG59XG5cbk1hcmtkb3duR2VuZXJpYy5wcm9wVHlwZXMgPSB7XG5cdHRhZ05hbWU6IHQuc3RyaW5nLFxuXHRjaGlsZHJlbjogdC5hbnlcbn07XG5cbmZ1bmN0aW9uIHN0cmljdENoaWxkcmVuKENvbXBvbmVudCwgdGFnTmFtZXMpIHtcblx0ZnVuY3Rpb24gU3RyaWN0Q2hpbGRyZW4ocHJvcHMpIHtcblx0XHRjb25zdCBjaGlsZHJlbiA9IENoaWxkcmVuLnRvQXJyYXkocHJvcHMuY2hpbGRyZW4pXG5cdFx0XHQuZmlsdGVyKGNoaWxkID0+IHtcblx0XHRcdFx0cmV0dXJuIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgaW5jbHVkZXModGFnTmFtZXMsIGNoaWxkLnByb3BzLnRhZ05hbWUpO1xuXHRcdFx0fSk7XG5cdFx0cmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfT57Y2hpbGRyZW59PC9Db21wb25lbnQ+O1xuXHR9XG5cblx0U3RyaWN0Q2hpbGRyZW4ucHJvcFR5cGVzID0ge1xuXHRcdGNoaWxkcmVuOiB0LmFueVxuXHR9O1xuXG5cdHJldHVybiBTdHJpY3RDaGlsZHJlbjtcbn1cbiJdfQ==