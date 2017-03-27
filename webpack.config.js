module.exports = {	
   watch:false,
  	output:{
  		filename:'app.js'
  	},
    module:{
	  	loaders:[ 
	  		{ test: /\.vue$/, 	loader: "vue" },
	  		{ test: /\.js$/, 	loader: "babel" },
	  		]
	},

	vue: {
		loaders: {
         	js: 'babel-loader',
    	}
	},
	babel: {
       presets: ['es2015'],        
	},
	resolve: {
	  alias: {
		    vue: 'vue/dist/vue.js'
	  }
	}
	

};