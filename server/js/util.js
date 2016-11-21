/**
 * 服务端公共函数封装
 * @author maicon
 */

var http = require('http');
var querystring = require('querystring');
var config = require('./config');
var util = {

	/**
	 * 数据请求模块
	 * @param   {}           req      请求对象
	 * @param   {}           res      响应对象
	 * @param   {}           next     将控制权交给下一个中间件
	 * @param   {string}     url      请求的url
	 * @param   {object}     data     请求的数据
	 * @param   {Function}   callBack 请求结束的回调
	 * @example util.request(req, res, next, url, postData, function(data) { console.log(data); });
	 */
	request: function(req, res, next, url, data, callBack) {
		var data = querystring.stringify(data);
		var options = {
			hostname: config.API_PATH_B,
			port: 80,
			path: url,
			method: 'POST',
			headers: {
				'Content-Type': "application/x-www-form-urlencoded;charset=utf-8",
				'Content-Length': data.length,
				'Keep-Alive': true,
				'timeout': 30000
			}
		}
		var nodeRequest = http.request(options, function(resN) {
			var result = '';
			resN.setEncoding('utf8');
			resN.on('data', function(data) {
				result = data;
			}).on('end', function() {
                callBack(JSON.parse(result));
			});
		}).on('error', function(e) {
			console.log('request error: ' + e.message);
            callBack(JSON.parse(e.message));
		});
		nodeRequest.write(data);
		nodeRequest.end();
	}
}

module.exports = util;