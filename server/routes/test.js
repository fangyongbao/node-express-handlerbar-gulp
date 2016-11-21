/**
 * test router模块
 * @date 2016/10/31
 * @author maicon
 */

var express = require('express');
var http = require('http');
var querystring = require('querystring');
var config = require('../js/config');
var helper = require('../js/helper');
var router = express.Router();

router.get('/', function(req, res, next) {

    /**
     * 数据渲染
     */

    // header.html用到的数据
    var headerPam = {
        title: 'header'
    }

    // footer.html用到的数据
    var footerPam = {
        title: 'footer'
    }

    // 页面标题、key、description
    var pageInfo = {
        title: 'test.html',
        key: 'cubee',
        description: '描述',
        detail: '这是测试页面'
    }

    // each/block helper
    var eachData = [{
        name: 'abao',
        id: 1
    }, {
        name: 'abao',
        id: 2
    }];

    var student = [{
        "name": "张三",
        "sex": "0",
        "age": 18
    }, {
        "name": "李四",
        "sex": "0",
        "age": 22

    }, {
        "name": "妞妞",
        "sex": "1",
        "age": 19
    }];

    // 获取父级对象
    var studentParent = [{
        matchId: 1000,
        des: "我是父级数据",
        company: "com1",
        odds: [1, 2, 3]
    }, {
        matchId: 1001,
        des: "我是父级数据",
        company: "com1",
        odds: [1, 2, 3]
    }];

    // lookup 获取兄弟级对象
    var company = {
        com1: {
            comId: 'com1',
            comName: '公司1'
        },
        com2: {
            comId: 'com2',
            comName: '公司2'
        }
    }

    // 使用自定义块级helper
    var nav = [{
        url: "https://yalishihzude.github.io",
        title: "blog"
    }, {
        url: "https://www.github.com/yalishizhude",
        title: "github"
    }, ]

    // 使用自定义helper判断大小
    var compare = {
        id: 30
    }

    res.render('test/index.html', {
        headerPam: headerPam,
        footerPam: footerPam,
        pageInfo: pageInfo,
        eachData: eachData,
        studentParent: studentParent,
        company: company,
        nav: nav,
        compare: compare
    });
});

module.exports = router;