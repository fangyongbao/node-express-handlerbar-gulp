var express = require('express');
var path = require('path');

// http日志中间件
var logger = require('morgan');
// 解析cookie
var cookieParser = require('cookie-parser');
// 解析body
var bodyParser = require('body-parser');

var app = express();

// 加载hbs模块
var hbs = require('express-hbs');
console.log();

// 指定模板文件的后缀名为html
app.set('views', 'server/views');
app.set('view engine', 'html');

// 运行hbs模块
app.engine('html', hbs.express3({
  // 设置公共html 路径
  partialsDir: __dirname + "/server/views/partials",
  defaultLayout: __dirname + "/server/views/layouts/default",
  layoutsDir: __dirname + "/server/views/layouts",
  extname: ".html"
}));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

// 设置静态资源访问路径
app.use(express.static(path.join(__dirname, 'client')));

// 导入router
require('./server/routes/root.js')(app);

// 404 handler
app.get('*', function(req, res) {
  res.render('404', {
    msg: 'page not find!'
  });
});

// error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('404', {
        msg: err.message
    });
});

module.exports = app;