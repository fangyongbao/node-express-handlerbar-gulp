/**
 * 服务端公共函数封装
 * @author maicon
 */

var hbs = require('express-hbs');

/**
 * 获取对象下标，从1开始
 * @param  {string} index    数组下标
 * @return {[number]}        重组后的下标
 */
hbs.registerHelper("getKeyFilter", function(index) {
	return parseInt(index) + 1;
});

// 自定义行级helper
hbs.registerHelper('oneLineHeaper', function(id1, id2) {
	return "oneLineHeaper" + id1 + id2;
});

// 可以返回html的helper
hbs.registerHelper('htmlHeaper', function(id1, id2) {
	var str = '<div><span>' + id1 + '</span><span>' + id2 + '</span></div>';
	return new hbs.handlebars.SafeString(str);
});

// 自定义块级helper
hbs.registerHelper('blockHeaper', function(context, options) {
	var ret = "<ul>";
	for (var i = 0, j = context.length; i < j; i++) {
		ret = ret + "<li>" + options.fn(context[i]) + "</li>";
	}
	return ret + "</ul>";
});

/**
 * 比较大小
 * @param  {[number]} v1 初始值
 * @param  {[number]} v2 对比值
 */
hbs.registerHelper("compareFilter", function(v1, v2, options) {
	if (parseInt(v1) > parseInt(v2)) {
		// 满足添加继续执行
		return options.fn(this);
	} else {
		// 不满足条件执行{{else}}部分
		return options.inverse(this);
	}
});