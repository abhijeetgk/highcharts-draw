/**
 * @author Vevstein Web
 */
var HighchartsAdapter = {
	
	addEvent: function (el, event, fn){
	},
	
	animate: function (el, style, options) { // temporarily done
		for (var key in style) el.style[key] = style[key];
	},
	
	each: function(arr, fn) { // done
		arr.each(fn);
	},
	
	fireEvent: function(el, type, eventArguments, defaultFunction) {
	},

	getAjax: function (url, callback) { // done
		new Ajax.Request(url, {
			method: 'get',
			onSuccess: function(obj) {
				callback(obj.responseText);
			}
		});
	},
	
	grep: function(arr, fn) { // done
		return arr.findAll(fn);
	},
	
	hyphenate: function (str) { // done
		return str.replace(/([A-Z])/g, function(a, b){ return '-'+ b.toLowerCase() });
	},
	
	map: function(arr, fn) { // done
		return arr.collect(fn);
	},
	
	merge: function() { // the built-in prototype merge function doesn't do deep copy
		function doCopy(copy, original) {
			var value;
				
			for (var key in original) {
				value = original[key];
				if  (value && typeof value == 'object' && value.constructor != Array) { 
					copy[key] = doCopy(copy[key] || {}, value); // copy
				
				} else {
					copy[key] = original[key];
				}
			}
			return copy;
		}
		
		function merge() {
			var args = arguments,
				retVal = {};
		
			for (var i = 0; i < args.length; i++) {
				retVal = doCopy(retVal, args[i])
			
			}
			return retVal;
		}
		
		return merge.apply(this, arguments);
	}
	
};
