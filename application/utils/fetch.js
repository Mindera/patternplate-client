'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

require('isomorphic-fetch');

var _lodash = require('lodash');

exports.default = fetch;


var defaultHeaders = {
	headers: { accept: 'application/json' },
	credentials: 'include'
};

function fetch(uri, userHeaders) {
	var headers = userHeaders === false ? {} : (0, _lodash.merge)({}, userHeaders, defaultHeaders);

	return global.fetch(uri, headers);
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi91dGlscy9mZXRjaC5qcyJdLCJuYW1lcyI6WyJmZXRjaCIsImRlZmF1bHRIZWFkZXJzIiwiaGVhZGVycyIsImFjY2VwdCIsImNyZWRlbnRpYWxzIiwidXJpIiwidXNlckhlYWRlcnMiLCJnbG9iYWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOztrQkFFZUEsSzs7O0FBRWYsSUFBTUMsaUJBQWlCO0FBQ3RCQyxVQUFTLEVBQUNDLFFBQVEsa0JBQVQsRUFEYTtBQUV0QkMsY0FBYTtBQUZTLENBQXZCOztBQUtBLFNBQVNKLEtBQVQsQ0FBZUssR0FBZixFQUFvQkMsV0FBcEIsRUFBaUM7QUFDaEMsS0FBTUosVUFBVUksZ0JBQWdCLEtBQWhCLEdBQ2YsRUFEZSxHQUVmLG1CQUFNLEVBQU4sRUFBVUEsV0FBVixFQUF1QkwsY0FBdkIsQ0FGRDs7QUFJQSxRQUFPTSxPQUFPUCxLQUFQLENBQWFLLEdBQWIsRUFBa0JILE9BQWxCLENBQVA7QUFDQSIsImZpbGUiOiJmZXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQge21lcmdlfSBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBmZXRjaDtcblxuY29uc3QgZGVmYXVsdEhlYWRlcnMgPSB7XG5cdGhlYWRlcnM6IHthY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ30sXG5cdGNyZWRlbnRpYWxzOiAnaW5jbHVkZSdcbn07XG5cbmZ1bmN0aW9uIGZldGNoKHVyaSwgdXNlckhlYWRlcnMpIHtcblx0Y29uc3QgaGVhZGVycyA9IHVzZXJIZWFkZXJzID09PSBmYWxzZSA/XG5cdFx0e30gOlxuXHRcdG1lcmdlKHt9LCB1c2VySGVhZGVycywgZGVmYXVsdEhlYWRlcnMpO1xuXG5cdHJldHVybiBnbG9iYWwuZmV0Y2godXJpLCBoZWFkZXJzKTtcbn1cbiJdfQ==