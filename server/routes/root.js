/**
 * 合并router模块
 * @date 2016/10/31
 * @author maicon
 */

module.exports = function(app) {
	app.use('/', require('./index'));
	app.use('/test', require('./test'));
};