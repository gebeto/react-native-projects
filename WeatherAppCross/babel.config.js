module.exports = function() {

	console.log("!!!!HELLOWORLD!!!!!\n\n\n!!!!!!!!!!!!HELLO");

	// const presets = ["module:metro-react-native-babel-preset"]
	const presets = [
		"react-native"
	];

	const plugins = [
		["module-resolver", {
			"alias": {
				"react-native": "react-native-macos",
			}
		}]
	];

	return {
		presets: presets,
		plugins: plugins,
	};
};