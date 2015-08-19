var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/lib/react.js');

config = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],
	
    resolve: {
        alias: {
            'react': pathToReact
        }
    },
	
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
	
		externals: {
			'jquery': {
				root: 'jQuery',
				commonjs2: 'jquery',
				commonjs: 'jquery',
				amd: 'jquery'
			}
		},
	
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel'
        }, {
            test: /\.css$/, // Only .css files
            loader: 'style!css' // Run both loaders
    }],
        noParse: [pathToReact]
    }
};

module.exports = config;
