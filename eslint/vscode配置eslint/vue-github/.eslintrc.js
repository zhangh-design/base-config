module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    // "extends": "eslint:recommended",
	"extends": [
		// https://github.com/standard/standard/blob/master/docs/RULES-en.md
		'standard'
	],
	"plugins": ['eslint-plugin-html'],
    "globals": {
		"alert": true,
		"values": true,
		"entries": true,
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
	"rules": {
		'generator-star-spacing': 'off',
		'semi': "off",
		'no-debugger': "off",
		'quotes': ["error", "single"],
		'object-curly-spacing': ["error", "always"]
	}
};