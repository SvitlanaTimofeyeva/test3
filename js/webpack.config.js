module.exports = {
    entry: {
        'build/cjs1': './src/cjs1.js',
        'build/cjs2': './src/cjs2.js',
        'build/cjs3': './src/cjs3.js',
    }, 
	output: {
	    filename: '[name].js'
	}
}