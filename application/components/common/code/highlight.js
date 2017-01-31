'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = highlight;

var _lodash = require('lodash');

var _core = require('lowlight/lib/core');

var _core2 = _interopRequireDefault(_core);

var _prettyData = require('pretty-data');

var _css = require('highlight.js/lib/languages/css.js');

var _css2 = _interopRequireDefault(_css);

var _less = require('highlight.js/lib/languages/less.js');

var _less2 = _interopRequireDefault(_less);

var _scss = require('highlight.js/lib/languages/scss.js');

var _scss2 = _interopRequireDefault(_scss);

var _stylus = require('highlight.js/lib/languages/stylus.js');

var _stylus2 = _interopRequireDefault(_stylus);

var _javascript = require('highlight.js/lib/languages/javascript.js');

var _javascript2 = _interopRequireDefault(_javascript);

var _typescript = require('highlight.js/lib/languages/typescript.js');

var _typescript2 = _interopRequireDefault(_typescript);

var _json = require('highlight.js/lib/languages/json.js');

var _json2 = _interopRequireDefault(_json);

var _xml = require('highlight.js/lib/languages/xml.js');

var _xml2 = _interopRequireDefault(_xml);

var _markdown = require('highlight.js/lib/languages/markdown.js');

var _markdown2 = _interopRequireDefault(_markdown);

var _bash = require('highlight.js/lib/languages/bash.js');

var _bash2 = _interopRequireDefault(_bash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// CSS and friends
_core2.default.registerLanguage('css', _css2.default);
_core2.default.registerLanguage('less', _less2.default);
_core2.default.registerLanguage('scss', _scss2.default);
_core2.default.registerLanguage('stylus', _stylus2.default);

// JS and friends
_core2.default.registerLanguage('js', _javascript2.default);
_core2.default.registerLanguage('javascript', _javascript2.default);
_core2.default.registerLanguage('jsx', _javascript2.default);
_core2.default.registerLanguage('ts', _typescript2.default);
_core2.default.registerLanguage('tsx', _typescript2.default);
_core2.default.registerLanguage('typescript', _typescript2.default);
_core2.default.registerLanguage('json', _json2.default);

// HTML and friends
_core2.default.registerLanguage('html', _xml2.default);
_core2.default.registerLanguage('xml', _xml2.default);
_core2.default.registerLanguage('md', _markdown2.default);
_core2.default.registerLanguage('markdown', _markdown2.default);

// (s)hell(ish)s
_core2.default.registerLanguage('bash', _bash2.default);
// low.registerLanguage('shell', bash);

var languages = ['css', 'less', 'scss', 'stylus', 'js', 'javascript', 'jsx', 'ts', 'tsx', 'typescript', 'json', 'html', 'xml', 'md', 'markdown', 'bash'];

var prettyPrinted = ['xml', 'html'];

function highlight(language, source) {
	if (!(0, _lodash.includes)(languages, language)) {
		return source;
	}
	var code = (0, _lodash.includes)(prettyPrinted, language) ? _prettyData.pd.xml(source) : source;

	var _low$highlight = _core2.default.highlight(language, code),
	    children = _low$highlight.value;

	return children;
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9jb2RlL2hpZ2hsaWdodC5qcyJdLCJuYW1lcyI6WyJoaWdobGlnaHQiLCJyZWdpc3Rlckxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwicHJldHR5UHJpbnRlZCIsImxhbmd1YWdlIiwic291cmNlIiwiY29kZSIsInhtbCIsImNoaWxkcmVuIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQWtEd0JBLFM7O0FBbER4Qjs7QUFDQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7QUFFQTtBQUNBLGVBQUlDLGdCQUFKLENBQXFCLEtBQXJCO0FBQ0EsZUFBSUEsZ0JBQUosQ0FBcUIsTUFBckI7QUFDQSxlQUFJQSxnQkFBSixDQUFxQixNQUFyQjtBQUNBLGVBQUlBLGdCQUFKLENBQXFCLFFBQXJCOztBQUVBO0FBQ0EsZUFBSUEsZ0JBQUosQ0FBcUIsSUFBckI7QUFDQSxlQUFJQSxnQkFBSixDQUFxQixZQUFyQjtBQUNBLGVBQUlBLGdCQUFKLENBQXFCLEtBQXJCO0FBQ0EsZUFBSUEsZ0JBQUosQ0FBcUIsSUFBckI7QUFDQSxlQUFJQSxnQkFBSixDQUFxQixLQUFyQjtBQUNBLGVBQUlBLGdCQUFKLENBQXFCLFlBQXJCO0FBQ0EsZUFBSUEsZ0JBQUosQ0FBcUIsTUFBckI7O0FBRUE7QUFDQSxlQUFJQSxnQkFBSixDQUFxQixNQUFyQjtBQUNBLGVBQUlBLGdCQUFKLENBQXFCLEtBQXJCO0FBQ0EsZUFBSUEsZ0JBQUosQ0FBcUIsSUFBckI7QUFDQSxlQUFJQSxnQkFBSixDQUFxQixVQUFyQjs7QUFFQTtBQUNBLGVBQUlBLGdCQUFKLENBQXFCLE1BQXJCO0FBQ0E7O0FBRUEsSUFBTUMsWUFBWSxDQUNqQixLQURpQixFQUNWLE1BRFUsRUFDRixNQURFLEVBQ00sUUFETixFQUNnQixJQURoQixFQUNzQixZQUR0QixFQUNvQyxLQURwQyxFQUMyQyxJQUQzQyxFQUNpRCxLQURqRCxFQUVqQixZQUZpQixFQUVILE1BRkcsRUFFSyxNQUZMLEVBRWEsS0FGYixFQUVvQixJQUZwQixFQUUwQixVQUYxQixFQUVzQyxNQUZ0QyxDQUFsQjs7QUFLQSxJQUFNQyxnQkFBZ0IsQ0FBQyxLQUFELEVBQVEsTUFBUixDQUF0Qjs7QUFFZSxTQUFTSCxTQUFULENBQW1CSSxRQUFuQixFQUE2QkMsTUFBN0IsRUFBcUM7QUFDbkQsS0FBSSxDQUFDLHNCQUFTSCxTQUFULEVBQW9CRSxRQUFwQixDQUFMLEVBQW9DO0FBQ25DLFNBQU9DLE1BQVA7QUFDQTtBQUNELEtBQU1DLE9BQU8sc0JBQVNILGFBQVQsRUFBd0JDLFFBQXhCLElBQW9DLGVBQU9HLEdBQVAsQ0FBV0YsTUFBWCxDQUFwQyxHQUF5REEsTUFBdEU7O0FBSm1ELHNCQUt6QixlQUFJTCxTQUFKLENBQWNJLFFBQWQsRUFBd0JFLElBQXhCLENBTHlCO0FBQUEsS0FLckNFLFFBTHFDLGtCQUs1Q0MsS0FMNEM7O0FBTW5ELFFBQU9ELFFBQVA7QUFDQSIsImZpbGUiOiJoaWdobGlnaHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luY2x1ZGVzfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGxvdyBmcm9tICdsb3dsaWdodC9saWIvY29yZSc7XG5pbXBvcnQge3BkIGFzIHByZXR0eX0gZnJvbSAncHJldHR5LWRhdGEnO1xuXG5pbXBvcnQgY3NzIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2Nzcy5qcyc7XG5pbXBvcnQgbGVzcyBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9sZXNzLmpzJztcbmltcG9ydCBzY3NzIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3Njc3MuanMnO1xuaW1wb3J0IHN0eWx1cyBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9zdHlsdXMuanMnO1xuXG5pbXBvcnQganMgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvamF2YXNjcmlwdC5qcyc7XG5pbXBvcnQgdHMgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvdHlwZXNjcmlwdC5qcyc7XG5pbXBvcnQganNvbiBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9qc29uLmpzJztcblxuaW1wb3J0IHhtbCBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy94bWwuanMnO1xuaW1wb3J0IG1kIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL21hcmtkb3duLmpzJztcblxuaW1wb3J0IGJhc2ggZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYmFzaC5qcyc7XG5cbi8vIENTUyBhbmQgZnJpZW5kc1xubG93LnJlZ2lzdGVyTGFuZ3VhZ2UoJ2NzcycsIGNzcyk7XG5sb3cucmVnaXN0ZXJMYW5ndWFnZSgnbGVzcycsIGxlc3MpO1xubG93LnJlZ2lzdGVyTGFuZ3VhZ2UoJ3Njc3MnLCBzY3NzKTtcbmxvdy5yZWdpc3Rlckxhbmd1YWdlKCdzdHlsdXMnLCBzdHlsdXMpO1xuXG4vLyBKUyBhbmQgZnJpZW5kc1xubG93LnJlZ2lzdGVyTGFuZ3VhZ2UoJ2pzJywganMpO1xubG93LnJlZ2lzdGVyTGFuZ3VhZ2UoJ2phdmFzY3JpcHQnLCBqcyk7XG5sb3cucmVnaXN0ZXJMYW5ndWFnZSgnanN4JywganMpO1xubG93LnJlZ2lzdGVyTGFuZ3VhZ2UoJ3RzJywgdHMpO1xubG93LnJlZ2lzdGVyTGFuZ3VhZ2UoJ3RzeCcsIHRzKTtcbmxvdy5yZWdpc3Rlckxhbmd1YWdlKCd0eXBlc2NyaXB0JywgdHMpO1xubG93LnJlZ2lzdGVyTGFuZ3VhZ2UoJ2pzb24nLCBqc29uKTtcblxuLy8gSFRNTCBhbmQgZnJpZW5kc1xubG93LnJlZ2lzdGVyTGFuZ3VhZ2UoJ2h0bWwnLCB4bWwpO1xubG93LnJlZ2lzdGVyTGFuZ3VhZ2UoJ3htbCcsIHhtbCk7XG5sb3cucmVnaXN0ZXJMYW5ndWFnZSgnbWQnLCBtZCk7XG5sb3cucmVnaXN0ZXJMYW5ndWFnZSgnbWFya2Rvd24nLCBtZCk7XG5cbi8vIChzKWhlbGwoaXNoKXNcbmxvdy5yZWdpc3Rlckxhbmd1YWdlKCdiYXNoJywgYmFzaCk7XG4vLyBsb3cucmVnaXN0ZXJMYW5ndWFnZSgnc2hlbGwnLCBiYXNoKTtcblxuY29uc3QgbGFuZ3VhZ2VzID0gW1xuXHQnY3NzJywgJ2xlc3MnLCAnc2NzcycsICdzdHlsdXMnLCAnanMnLCAnamF2YXNjcmlwdCcsICdqc3gnLCAndHMnLCAndHN4Jyxcblx0J3R5cGVzY3JpcHQnLCAnanNvbicsICdodG1sJywgJ3htbCcsICdtZCcsICdtYXJrZG93bicsICdiYXNoJ1xuXTtcblxuY29uc3QgcHJldHR5UHJpbnRlZCA9IFsneG1sJywgJ2h0bWwnXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGlnaGxpZ2h0KGxhbmd1YWdlLCBzb3VyY2UpIHtcblx0aWYgKCFpbmNsdWRlcyhsYW5ndWFnZXMsIGxhbmd1YWdlKSkge1xuXHRcdHJldHVybiBzb3VyY2U7XG5cdH1cblx0Y29uc3QgY29kZSA9IGluY2x1ZGVzKHByZXR0eVByaW50ZWQsIGxhbmd1YWdlKSA/IHByZXR0eS54bWwoc291cmNlKSA6IHNvdXJjZTtcblx0Y29uc3Qge3ZhbHVlOiBjaGlsZHJlbn0gPSBsb3cuaGlnaGxpZ2h0KGxhbmd1YWdlLCBjb2RlKTtcblx0cmV0dXJuIGNoaWxkcmVuO1xufVxuIl19