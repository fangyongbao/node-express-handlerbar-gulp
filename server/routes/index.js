/**
 * 首页
 * @date 2016/10/31
 * @author maicon
 */

var express = require('express');
var request = require('request');
var async = require('async');
var util = require('../js/util');
var config = require('../js/config');
var router = express.Router();

// 首页请求 http://localhost:3000
router.get('/', function(req, res, next) {
    console.log('====== server /======');

    // var postData = req.body;

    // 使用个人封装的数据模块
    // util.request(req, res, next, url, postData, function(data) {
    //     console.log(data);
    // });


    // 使用async模块控制逻辑，以及request模块进行数据请求
    // async.parallel({
    //     init: function(callback) {
    //         // 使用request数据模块获取数据
    //         request.post({
    //             url: config.API_PATH_A + '/Iniconfig/get',
    //             formData: {}
    //         }, function(error, response, body) {
    //             if (!error && response.statusCode == 200) {
    //                 callback(null, JSON.parse(body));
    //             } else {
    //                 callback(error, null);
    //             }
    //         })
    //     },
    //     getList: function(callback) {
    //         // 使用request数据模块获取数据
    //         request.post({
    //             url: config.API_PATH_A + '/Iniconfig/get',
    //             formData: {}
    //         }, function(error, response, body) {
    //             if (!error && response.statusCode == 200) {
    //                 callback(null, JSON.parse(body));
    //             } else {
    //                 callback(error, null);
    //             }
    //         })
    //     }
    // }, function(error, result) {
    //     if (!error) {
    //         // console.log(result);
    //         // 设置返回的cookie
    //         // res.cookie('resUserName',  'resABao')

    //         // 数据映射
    //         res.render('index/index', result);
    //     } else {
    //         callback(error, null);
    //     }
    // });

    var matchList = {
        "verson": 1149988,
        "matchCount": {
            "roll": 0,
            "today": 50,
            "more": 260
        },
        "oddsType": "yp",
        "match": {
            "k_229": {
                "k_2228554": {
                    "gsm_match_id": "k_2228554",
                    "home_score": 0,
                    "away_score": 0,
                    "home_team_id": "1348",
                    "away_team_id": "1897",
                    "home_team_name": "日本",
                    "away_team_name": "沙特阿拉伯",
                    "gsm_league_id": "k_229",
                    "minute": "0'",
                    "status": "1",
                    "match_time": "11-15 18:35",
                    "time_stamp": 1479206100,
                    "gs": {
                        "home_per": 0,
                        "draw_per": 0,
                        "away_per": 0
                    },
                    "odds": {
                        "dxq": {
                            "o1": {
                                "odds": "2.08",
                                "bid": "k_20003",
                                "hdcp": "大3"
                            },
                            "o2": {
                                "odds": "1.91",
                                "bid": "k_20000",
                                "hdcp": "小3"
                            }
                        },
                        "yp": {
                            "o1": {
                                "odds": "2.12",
                                "bid": "k_20005",
                                "hdcp": "-1/1.5",
                                "raw_hdcp": "-1/-1.5"
                            },
                            "o2": {
                                "odds": "1.95",
                                "bid": "k_236",
                                "hdcp": "1/1.5"
                            }
                        },
                        "op": {
                            "o1": {
                                "odds": "1.48",
                                "bid": "k_17"
                            },
                            "o2": {
                                "odds": "4.70",
                                "bid": "k_20000"
                            },
                            "o3": {
                                "odds": "8.00",
                                "bid": "k_20000"
                            }
                        },
                        "num": 11
                    }
                },
                "k_2228509": {
                    "gsm_match_id": "k_2228509",
                    "home_score": 0,
                    "away_score": 0,
                    "home_team_id": "1385",
                    "away_team_id": "2301",
                    "home_team_name": "韩国",
                    "away_team_name": "乌兹别克斯坦",
                    "gsm_league_id": "k_229",
                    "minute": "0'",
                    "status": "1",
                    "match_time": "11-15 19:00",
                    "time_stamp": 1479207600,
                    "gs": {
                        "home_per": 0,
                        "draw_per": 0,
                        "away_per": 0
                    },
                    "odds": {
                        "dxq": {
                            "o1": {
                                "odds": "2.10",
                                "bid": "k_20005",
                                "hdcp": "大2/2.5"
                            },
                            "o2": {
                                "odds": "1.88",
                                "bid": "k_236",
                                "hdcp": "小2/2.5"
                            }
                        },
                        "yp": {
                            "o1": {
                                "odds": "2.20",
                                "bid": "k_20003",
                                "hdcp": "-1",
                                "raw_hdcp": "-1"
                            },
                            "o2": {
                                "odds": "2.06",
                                "bid": "k_236",
                                "hdcp": "1"
                            }
                        },
                        "op": {
                            "o1": {
                                "odds": "1.63",
                                "bid": "k_365"
                            },
                            "o2": {
                                "odds": "3.75",
                                "bid": "k_22"
                            },
                            "o3": {
                                "odds": "6.93",
                                "bid": "k_20005"
                            }
                        },
                        "num": 11
                    }
                },
                "k_2228507": {
                    "gsm_match_id": "k_2228507",
                    "home_score": 0,
                    "away_score": 0,
                    "home_team_id": "453",
                    "away_team_id": "1774",
                    "home_team_name": "中国",
                    "away_team_name": "卡塔尔",
                    "gsm_league_id": "k_229",
                    "minute": "0'",
                    "status": "1",
                    "match_time": "11-15 19:35",
                    "time_stamp": 1479209700,
                    "gs": {
                        "home_per": 0,
                        "draw_per": 0,
                        "away_per": 0
                    },
                    "odds": {
                        "dxq": {
                            "o1": {
                                "odds": "2.09",
                                "bid": "k_20003",
                                "hdcp": "大2/2.5"
                            },
                            "o2": {
                                "odds": "1.83",
                                "bid": "k_20005",
                                "hdcp": "小2/2.5"
                            }
                        },
                        "yp": {
                            "o1": {
                                "odds": "1.97",
                                "bid": "k_20001",
                                "hdcp": "0.5",
                                "raw_hdcp": "0.5"
                            },
                            "o2": {
                                "odds": "1.93",
                                "bid": "k_20001",
                                "hdcp": "-0.5"
                            }
                        },
                        "op": {
                            "o1": {
                                "odds": "2.12",
                                "bid": "k_20005"
                            },
                            "o2": {
                                "odds": "3.35",
                                "bid": "k_365"
                            },
                            "o3": {
                                "odds": "3.89",
                                "bid": "k_20005"
                            }
                        },
                        "num": 11
                    }
                },
                "k_2228508": {
                    "gsm_match_id": "k_2228508",
                    "home_score": 0,
                    "away_score": 0,
                    "home_team_id": "2202",
                    "away_team_id": "1178",
                    "home_team_name": "叙利亚",
                    "away_team_name": "伊朗",
                    "gsm_league_id": "k_229",
                    "minute": "0'",
                    "status": "1",
                    "match_time": "11-15 20:00",
                    "time_stamp": 1479211200,
                    "gs": {
                        "home_per": 0,
                        "draw_per": 0,
                        "away_per": 0
                    },
                    "odds": {
                        "dxq": {
                            "o1": {
                                "odds": "2.21",
                                "bid": "k_20003",
                                "hdcp": "大2/2.5"
                            },
                            "o2": {
                                "odds": "1.81",
                                "bid": "k_365",
                                "hdcp": "小2/2.5"
                            }
                        },
                        "yp": {
                            "o1": {
                                "odds": "2.13",
                                "bid": "k_236",
                                "hdcp": "1",
                                "raw_hdcp": "1"
                            },
                            "o2": {
                                "odds": "2.09",
                                "bid": "k_365",
                                "hdcp": "-1"
                            }
                        },
                        "op": {
                            "o1": {
                                "odds": "9.19",
                                "bid": "k_20005"
                            },
                            "o2": {
                                "odds": "3.96",
                                "bid": "k_20005"
                            },
                            "o3": {
                                "odds": "1.55",
                                "bid": "k_20001"
                            }
                        },
                        "num": 11
                    }
                },
                "k_2228553": {
                    "gsm_match_id": "k_2228553",
                    "home_score": 0,
                    "away_score": 0,
                    "home_team_id": "2207",
                    "away_team_id": "156",
                    "home_team_name": "泰国",
                    "away_team_name": "澳大利亚",
                    "gsm_league_id": "k_229",
                    "minute": "0'",
                    "status": "1",
                    "match_time": "11-15 20:00",
                    "time_stamp": 1479211200,
                    "gs": {
                        "home_per": 0,
                        "draw_per": 0,
                        "away_per": 0
                    },
                    "odds": {
                        "dxq": {
                            "o1": {
                                "odds": "2.01",
                                "bid": "k_20004",
                                "hdcp": "大3"
                            },
                            "o2": {
                                "odds": "1.99",
                                "bid": "k_236",
                                "hdcp": "小3"
                            }
                        },
                        "yp": {
                            "o1": {
                                "odds": "2.28",
                                "bid": "k_236",
                                "hdcp": "1.5",
                                "raw_hdcp": "1.5"
                            },
                            "o2": {
                                "odds": "2.03",
                                "bid": "k_20003",
                                "hdcp": "-1.5"
                            }
                        },
                        "op": {
                            "o1": {
                                "odds": "13.00",
                                "bid": "k_20000"
                            },
                            "o2": {
                                "odds": "6.30",
                                "bid": "k_236"
                            },
                            "o3": {
                                "odds": "1.33",
                                "bid": "k_22"
                            }
                        },
                        "num": 11
                    }
                },
                "k_2228552": {
                    "gsm_match_id": "k_2228552",
                    "home_score": 0,
                    "away_score": 0,
                    "home_team_id": "2270",
                    "away_team_id": "1179",
                    "home_team_name": "阿联酋",
                    "away_team_name": "Iraq",
                    "gsm_league_id": "k_229",
                    "minute": "0'",
                    "status": "1",
                    "match_time": "11-15 23:20",
                    "time_stamp": 1479223200,
                    "gs": {
                        "home_per": 0,
                        "draw_per": 0,
                        "away_per": 0
                    },
                    "odds": {
                        "dxq": {
                            "o1": {
                                "odds": "1.83",
                                "bid": "k_20003",
                                "hdcp": "大2"
                            },
                            "o2": {
                                "odds": "2.13",
                                "bid": "k_20005",
                                "hdcp": "小2"
                            }
                        },
                        "yp": {
                            "o1": {
                                "odds": "1.99",
                                "bid": "k_20000",
                                "hdcp": "-0.5",
                                "raw_hdcp": "-0.5"
                            },
                            "o2": {
                                "odds": "1.97",
                                "bid": "k_20003",
                                "hdcp": "0.5"
                            }
                        },
                        "op": {
                            "o1": {
                                "odds": "1.98",
                                "bid": "k_20000"
                            },
                            "o2": {
                                "odds": "3.37",
                                "bid": "k_20005"
                            },
                            "o3": {
                                "odds": "4.42",
                                "bid": "k_20005"
                            }
                        },
                        "num": 11
                    }
                }
            },
            "k_26": {
                "k_2218242": {
                    "gsm_match_id": "k_2218242",
                    "home_score": 0,
                    "away_score": 0,
                    "home_team_id": "312",
                    "away_team_id": "315",
                    "home_team_name": "弗鲁米嫩塞",
                    "away_team_name": "帕拉纳竞技",
                    "gsm_league_id": "k_26",
                    "minute": "0'",
                    "status": "1",
                    "match_time": "11-16 03:00",
                    "time_stamp": 1479236400,
                    "gs": {
                        "home_per": 55,
                        "draw_per": 26,
                        "away_per": 19
                    },
                    "odds": {
                        "dxq": {
                            "o1": {
                                "odds": "1.90",
                                "bid": "k_20005",
                                "hdcp": "大2/2.5"
                            },
                            "o2": {
                                "odds": "2.04",
                                "bid": "k_365",
                                "hdcp": "小2/2.5"
                            }
                        },
                        "yp": {
                            "o1": {
                                "odds": "1.99",
                                "bid": "k_236",
                                "hdcp": "-0.5/1",
                                "raw_hdcp": "-0.5/-1"
                            },
                            "o2": {
                                "odds": "2.03",
                                "bid": "k_20005",
                                "hdcp": "0.5/1"
                            }
                        },
                        "op": {
                            "o1": {
                                "odds": "1.68",
                                "bid": "k_365"
                            },
                            "o2": {
                                "odds": "3.67",
                                "bid": "k_20005"
                            },
                            "o3": {
                                "odds": "6.55",
                                "bid": "k_20005"
                            }
                        },
                        "num": 10
                    }
                }
            },
            "k_93": {
                "k_2368726": {
                    "gsm_match_id": "k_2368726",
                    "home_score": 0,
                    "away_score": 0,
                    "home_team_id": "768",
                    "away_team_id": "763",
                    "home_team_name": "哈利法克斯",
                    "away_team_name": "达根汉姆",
                    "gsm_league_id": "k_93",
                    "minute": "0'",
                    "status": "1",
                    "match_time": "11-16 03:45",
                    "time_stamp": 1479239100,
                    "gs": {
                        "home_per": 0,
                        "draw_per": 0,
                        "away_per": 0
                    },
                    "odds": {
                        "dxq": {
                            "o1": {
                                "odds": "2.09",
                                "bid": "k_20005",
                                "hdcp": "大2.5/3"
                            },
                            "o2": {
                                "odds": "1.82",
                                "bid": "k_20003",
                                "hdcp": "小2.5/3"
                            }
                        },
                        "yp": {
                            "o1": {
                                "odds": "1.82",
                                "bid": "k_20000",
                                "hdcp": "0/0.5",
                                "raw_hdcp": "0/0.5"
                            },
                            "o2": {
                                "odds": "2.13",
                                "bid": "k_20003",
                                "hdcp": "-0/0.5"
                            }
                        },
                        "op": {
                            "o1": {
                                "odds": "2.94",
                                "bid": "k_20005"
                            },
                            "o2": {
                                "odds": "3.50",
                                "bid": "k_20005"
                            },
                            "o3": {
                                "odds": "2.47",
                                "bid": "k_20005"
                            }
                        },
                        "num": 10
                    }
                },
                "k_2368727": {
                    "gsm_match_id": "k_2368727",
                    "home_score": 0,
                    "away_score": 0,
                    "home_team_id": "8588",
                    "away_team_id": "735",
                    "home_team_name": "索利赫尔",
                    "away_team_name": "耶奥维尔",
                    "gsm_league_id": "k_93",
                    "minute": "0'",
                    "status": "1",
                    "match_time": "11-16 03:45",
                    "time_stamp": 1479239100,
                    "gs": {
                        "home_per": 0,
                        "draw_per": 0,
                        "away_per": 0
                    },
                    "odds": {
                        "dxq": {
                            "o1": {
                                "odds": "1.89",
                                "bid": "k_20000",
                                "hdcp": "大2.5"
                            },
                            "o2": {
                                "odds": "2.05",
                                "bid": "k_20005",
                                "hdcp": "小2.5"
                            }
                        },
                        "yp": {
                            "o1": {
                                "odds": "1.91",
                                "bid": "k_20000",
                                "hdcp": "0/0.5",
                                "raw_hdcp": "0/0.5"
                            },
                            "o2": {
                                "odds": "2.04",
                                "bid": "k_20003",
                                "hdcp": "-0/0.5"
                            }
                        },
                        "op": {
                            "o1": {
                                "odds": "3.12",
                                "bid": "k_20005"
                            },
                            "o2": {
                                "odds": "3.55",
                                "bid": "k_20005"
                            },
                            "o3": {
                                "odds": "2.33",
                                "bid": "k_20005"
                            }
                        },
                        "num": 10
                    }
                },
                "k_2368730": {
                    "gsm_match_id": "k_2368730",
                    "home_score": 0,
                    "away_score": 0,
                    "home_team_id": "4593",
                    "away_team_id": "742",
                    "home_team_name": "AFC温布尔登",
                    "away_team_name": "伯里",
                    "gsm_league_id": "k_93",
                    "minute": "0'",
                    "status": "1",
                    "match_time": "11-16 03:45",
                    "time_stamp": 1479239100,
                    "gs": {
                        "home_per": 0,
                        "draw_per": 0,
                        "away_per": 0
                    },
                    "odds": {
                        "dxq": {
                            "o1": {
                                "odds": "1.95",
                                "bid": "k_20003",
                                "hdcp": "大2.5"
                            },
                            "o2": {
                                "odds": "2.07",
                                "bid": "k_20005",
                                "hdcp": "小2.5"
                            }
                        },
                        "yp": {
                            "o1": {
                                "odds": "2.12",
                                "bid": "k_20005",
                                "hdcp": "-0.5",
                                "raw_hdcp": "-0.5"
                            },
                            "o2": {
                                "odds": "1.90",
                                "bid": "k_20003",
                                "hdcp": "0.5"
                            }
                        },
                        "op": {
                            "o1": {
                                "odds": "2.12",
                                "bid": "k_20005"
                            },
                            "o2": {
                                "odds": "3.62",
                                "bid": "k_20005"
                            },
                            "o3": {
                                "odds": "3.55",
                                "bid": "k_20003"
                            }
                        },
                        "num": 9
                    }
                },
                "k_2368731": {
                    "gsm_match_id": "k_2368731",
                    "home_score": 0,
                    "away_score": 0,
                    "home_team_id": "708",
                    "away_team_id": "4766",
                    "home_team_name": "斯文顿",
                    "away_team_name": "伊斯特利",
                    "gsm_league_id": "k_93",
                    "minute": "0'",
                    "status": "1",
                    "match_time": "11-16 03:45",
                    "time_stamp": 1479239100,
                    "gs": {
                        "home_per": 0,
                        "draw_per": 0,
                        "away_per": 0
                    },
                    "odds": {
                        "dxq": {
                            "o1": {
                                "odds": "2.04",
                                "bid": "k_20005",
                                "hdcp": "大2.5/3"
                            },
                            "o2": {
                                "odds": "1.87",
                                "bid": "k_365",
                                "hdcp": "小2.5/3"
                            }
                        },
                        "yp": {
                            "o1": {
                                "odds": "2.06",
                                "bid": "k_434",
                                "hdcp": "-0.5/1",
                                "raw_hdcp": "-0.5/-1"
                            },
                            "o2": {
                                "odds": "1.86",
                                "bid": "k_20005",
                                "hdcp": "0.5/1"
                            }
                        },
                        "op": {
                            "o1": {
                                "odds": "1.80",
                                "bid": "k_22"
                            },
                            "o2": {
                                "odds": "3.86",
                                "bid": "k_20005"
                            },
                            "o3": {
                                "odds": "4.69",
                                "bid": "k_20005"
                            }
                        },
                        "num": 6
                    }
                },
                "k_2368732": {
                    "gsm_match_id": "k_2368732",
                    "home_score": 0,
                    "away_score": 0,
                    "home_team_id": "739",
                    "away_team_id": "2860",
                    "home_team_name": "布里斯托尔流浪",
                    "away_team_name": "克拉雷镇",
                    "gsm_league_id": "k_93",
                    "minute": "0'",
                    "status": "1",
                    "match_time": "11-16 03:45",
                    "time_stamp": 1479239100,
                    "gs": {
                        "home_per": 0,
                        "draw_per": 0,
                        "away_per": 0
                    },
                    "odds": {
                        "dxq": {
                            "o1": {
                                "odds": "1.85",
                                "bid": "k_20000",
                                "hdcp": "大2.5/3"
                            },
                            "o2": {
                                "odds": "2.06",
                                "bid": "k_236",
                                "hdcp": "小2.5/3"
                            }
                        },
                        "yp": {
                            "o1": {
                                "odds": "1.96",
                                "bid": "k_236",
                                "hdcp": "-1/1.5",
                                "raw_hdcp": "-1/-1.5"
                            },
                            "o2": {
                                "odds": "2.02",
                                "bid": "k_20003",
                                "hdcp": "1/1.5"
                            }
                        },
                        "op": {
                            "o1": {
                                "odds": "1.43",
                                "bid": "k_236"
                            },
                            "o2": {
                                "odds": "5.09",
                                "bid": "k_20005"
                            },
                            "o3": {
                                "odds": "8.64",
                                "bid": "k_20005"
                            }
                        },
                        "num": 10
                    }
                },
                "k_2368733": {
                    "gsm_match_id": "k_2368733",
                    "home_score": 0,
                    "away_score": 0,
                    "home_team_id": "697",
                    "away_team_id": "740",
                    "home_team_name": "克鲁维",
                    "away_team_name": "切尔滕汉姆",
                    "gsm_league_id": "k_93",
                    "minute": "0'",
                    "status": "1",
                    "match_time": "11-16 03:45",
                    "time_stamp": 1479239100,
                    "gs": {
                        "home_per": 0,
                        "draw_per": 0,
                        "away_per": 0
                    },
                    "odds": {
                        "dxq": {
                            "o1": {
                                "odds": "1.88",
                                "bid": "k_20003",
                                "hdcp": "大2/2.5"
                            },
                            "o2": {
                                "odds": "2.02",
                                "bid": "k_236",
                                "hdcp": "小2/2.5"
                            }
                        },
                        "yp": {
                            "o1": {
                                "odds": "2.06",
                                "bid": "k_236",
                                "hdcp": 0,
                                "raw_hdcp": "0"
                            },
                            "o2": {
                                "odds": "2.03",
                                "bid": "k_20003",
                                "hdcp": 0
                            }
                        },
                        "op": {
                            "o1": {
                                "odds": "2.64",
                                "bid": "k_20000"
                            },
                            "o2": {
                                "odds": "3.35",
                                "bid": "k_20005"
                            },
                            "o3": {
                                "odds": "2.86",
                                "bid": "k_20005"
                            }
                        },
                        "num": 10
                    }
                },
                "k_2368748": {
                    "gsm_match_id": "k_2368748",
                    "home_score": 0,
                    "away_score": 0,
                    "home_team_id": "4743",
                    "away_team_id": "4935",
                    "home_team_name": "巴洛",
                    "away_team_name": "汤顿镇",
                    "gsm_league_id": "k_93",
                    "minute": "0'",
                    "status": "1",
                    "match_time": "11-16 03:45",
                    "time_stamp": 1479239100,
                    "gs": {
                        "home_per": 0,
                        "draw_per": 0,
                        "away_per": 0
                    },
                    "odds": {
                        "dxq": {
                            "o1": {
                                "odds": "1.94",
                                "bid": "k_365",
                                "hdcp": "大3/3.5"
                            },
                            "o2": {
                                "odds": "1.94",
                                "bid": "k_365",
                                "hdcp": "小3/3.5"
                            }
                        },
                        "yp": {
                            "o1": {
                                "odds": "1.86",
                                "bid": "k_365",
                                "hdcp": "-1/1.5",
                                "raw_hdcp": "-1/-1.5"
                            },
                            "o2": {
                                "odds": "2.04",
                                "bid": "k_365",
                                "hdcp": "1/1.5"
                            }
                        },
                        "op": {
                            "o1": {
                                "odds": "1.40",
                                "bid": "k_17"
                            },
                            "o2": {
                                "odds": "5.20",
                                "bid": "k_22"
                            },
                            "o3": {
                                "odds": "7.50",
                                "bid": "k_22"
                            }
                        },
                        "num": 4
                    }
                },
                "k_2368749": {
                    "gsm_match_id": "k_2368749",
                    "home_score": 0,
                    "away_score": 0,
                    "home_team_id": "4762",
                    "away_team_id": "2861",
                    "home_team_name": "纽波特郡",
                    "away_team_name": "阿尔弗雷顿",
                    "gsm_league_id": "k_93",
                    "minute": "0'",
                    "status": "1",
                    "match_time": "11-16 03:45",
                    "time_stamp": 1479239100,
                    "gs": {
                        "home_per": 0,
                        "draw_per": 0,
                        "away_per": 0
                    },
                    "odds": {
                        "dxq": {
                            "o1": {
                                "odds": "2.01",
                                "bid": "k_365",
                                "hdcp": "大3/3.5"
                            },
                            "o2": {
                                "odds": "1.92",
                                "bid": "k_20005",
                                "hdcp": "小3/3.5"
                            }
                        },
                        "yp": {
                            "o1": {
                                "odds": "1.88",
                                "bid": "k_20005",
                                "hdcp": "-1/1.5",
                                "raw_hdcp": "-1/-1.5"
                            },
                            "o2": {
                                "odds": "2.06",
                                "bid": "k_365",
                                "hdcp": "1/1.5"
                            }
                        },
                        "op": {
                            "o1": {
                                "odds": "1.41",
                                "bid": "k_20005"
                            },
                            "o2": {
                                "odds": "5.21",
                                "bid": "k_20005"
                            },
                            "o3": {
                                "odds": "8.00",
                                "bid": "k_22"
                            }
                        },
                        "num": 6
                    }
                },
                "k_2368750": {
                    "gsm_match_id": "k_2368750",
                    "home_score": 0,
                    "away_score": 0,
                    "home_team_id": "747",
                    "away_team_id": "6895",
                    "home_team_name": "罗奇代尔",
                    "away_team_name": "梅德斯通联",
                    "gsm_league_id": "k_93",
                    "minute": "0'",
                    "status": "1",
                    "match_time": "11-16 03:45",
                    "time_stamp": 1479239100,
                    "gs": {
                        "home_per": 0,
                        "draw_per": 0,
                        "away_per": 0
                    },
                    "odds": {
                        "dxq": {
                            "o1": {
                                "odds": "2.05",
                                "bid": "k_365",
                                "hdcp": "大2.5/3"
                            },
                            "o2": {
                                "odds": "1.89",
                                "bid": "k_20005",
                                "hdcp": "小2.5/3"
                            }
                        },
                        "yp": {
                            "o1": {
                                "odds": "1.99",
                                "bid": "k_365",
                                "hdcp": "-1/1.5",
                                "raw_hdcp": "-1/-1.5"
                            },
                            "o2": {
                                "odds": "1.97",
                                "bid": "k_20005",
                                "hdcp": "1/1.5"
                            }
                        },
                        "op": {
                            "o1": {
                                "odds": "1.41",
                                "bid": "k_365"
                            },
                            "o2": {
                                "odds": "4.90",
                                "bid": "k_20005"
                            },
                            "o3": {
                                "odds": "8.91",
                                "bid": "k_20005"
                            }
                        },
                        "num": 6
                    }
                },
                "k_2368751": {
                    "gsm_match_id": "k_2368751",
                    "home_score": 0,
                    "away_score": 0,
                    "home_team_id": "730",
                    "away_team_id": "4943",
                    "home_team_name": "诺斯郡",
                    "away_team_name": "波尔汉姆",
                    "gsm_league_id": "k_93",
                    "minute": "0'",
                    "status": "1",
                    "match_time": "11-16 03:45",
                    "time_stamp": 1479239100,
                    "gs": {
                        "home_per": 0,
                        "draw_per": 0,
                        "away_per": 0
                    },
                    "odds": {
                        "dxq": {
                            "o1": {
                                "odds": "1.90",
                                "bid": "k_20005",
                                "hdcp": "大2.5"
                            },
                            "o2": {
                                "odds": "2.01",
                                "bid": "k_20003",
                                "hdcp": "小2.5"
                            }
                        },
                        "yp": {
                            "o1": {
                                "odds": "1.98",
                                "bid": "k_20000",
                                "hdcp": "-0.5/1",
                                "raw_hdcp": "-0.5/-1"
                            },
                            "o2": {
                                "odds": "2.01",
                                "bid": "k_236",
                                "hdcp": "0.5/1"
                            }
                        },
                        "op": {
                            "o1": {
                                "odds": "1.76",
                                "bid": "k_236"
                            },
                            "o2": {
                                "odds": "3.94",
                                "bid": "k_20005"
                            },
                            "o3": {
                                "odds": "5.19",
                                "bid": "k_20005"
                            }
                        },
                        "num": 10
                    }
                },
                "k_2368752": {
                    "gsm_match_id": "k_2368752",
                    "home_score": 0,
                    "away_score": 0,
                    "home_team_id": "692",
                    "away_team_id": "758",
                    "home_team_name": "考文垂",
                    "away_team_name": "摩尔坎比",
                    "gsm_league_id": "k_93",
                    "minute": "0'",
                    "status": "1",
                    "match_time": "11-16 03:45",
                    "time_stamp": 1479239100,
                    "gs": {
                        "home_per": 0,
                        "draw_per": 0,
                        "away_per": 0
                    },
                    "odds": {
                        "dxq": {
                            "o1": {
                                "odds": "1.85",
                                "bid": "k_236",
                                "hdcp": "大2.5/3"
                            },
                            "o2": {
                                "odds": "2.12",
                                "bid": "k_20005",
                                "hdcp": "小2.5/3"
                            }
                        },
                        "yp": {
                            "o1": {
                                "odds": "2.08",
                                "bid": "k_20003",
                                "hdcp": "-1/1.5",
                                "raw_hdcp": "-1/-1.5"
                            },
                            "o2": {
                                "odds": "2.05",
                                "bid": "k_236",
                                "hdcp": "1/1.5"
                            }
                        },
                        "op": {
                            "o1": {
                                "odds": "1.48",
                                "bid": "k_17"
                            },
                            "o2": {
                                "odds": "4.67",
                                "bid": "k_20005"
                            },
                            "o3": {
                                "odds": "7.16",
                                "bid": "k_20005"
                            }
                        },
                        "num": 10
                    }
                },
                "k_2369205": {
                    "gsm_match_id": "k_2369205",
                    "home_score": 0,
                    "away_score": 0,
                    "home_team_id": "4908",
                    "away_team_id": "2719",
                    "home_team_name": "福利特伍德镇",
                    "away_team_name": "南港",
                    "gsm_league_id": "k_93",
                    "minute": "0'",
                    "status": "1",
                    "match_time": "11-16 03:45",
                    "time_stamp": 1479239100,
                    "gs": {
                        "home_per": 0,
                        "draw_per": 0,
                        "away_per": 0
                    },
                    "odds": {
                        "dxq": {
                            "o1": {
                                "odds": "1.94",
                                "bid": "k_20005",
                                "hdcp": "大3"
                            },
                            "o2": {
                                "odds": "1.94",
                                "bid": "k_20005",
                                "hdcp": "小3"
                            }
                        },
                        "yp": {
                            "o1": {
                                "odds": "2.08",
                                "bid": "k_20005",
                                "hdcp": "-1.5",
                                "raw_hdcp": "-1.5"
                            },
                            "o2": {
                                "odds": "1.86",
                                "bid": "k_365",
                                "hdcp": "1.5"
                            }
                        },
                        "op": {
                            "o1": {
                                "odds": "1.37",
                                "bid": "k_365"
                            },
                            "o2": {
                                "odds": "5.32",
                                "bid": "k_20005"
                            },
                            "o3": {
                                "odds": "9.00",
                                "bid": "k_22"
                            }
                        },
                        "num": 6
                    }
                }
            },
            "k_430": {
                "k_2366279": {
                    "gsm_match_id": "k_2366279",
                    "home_score": 0,
                    "away_score": 0,
                    "home_team_id": "1878",
                    "away_team_id": "1839",
                    "home_team_name": "俄罗斯",
                    "away_team_name": "罗马尼亚",
                    "gsm_league_id": "k_430",
                    "minute": "0'",
                    "status": "1",
                    "match_time": "11-16 00:00",
                    "time_stamp": 1479225600,
                    "gs": {
                        "home_per": 0,
                        "draw_per": 0,
                        "away_per": 0
                    },
                    "odds": {
                        "dxq": {
                            "o1": {
                                "odds": "1.92",
                                "bid": "k_236",
                                "hdcp": "大2"
                            },
                            "o2": {
                                "odds": "2.04",
                                "bid": "k_20005",
                                "hdcp": "小2"
                            }
                        },
                        "yp": {
                            "o1": {
                                "odds": "2.03",
                                "bid": "k_236",
                                "hdcp": "-0.5",
                                "raw_hdcp": "-0.5"
                            },
                            "o2": {
                                "odds": "2.02",
                                "bid": "k_20005",
                                "hdcp": "0.5"
                            }
                        },
                        "op": {
                            "o1": {
                                "odds": "1.91",
                                "bid": "k_365"
                            },
                            "o2": {
                                "odds": "3.41",
                                "bid": "k_20005"
                            },
                            "o3": {
                                "odds": "4.84",
                                "bid": "k_20005"
                            }
                        },
                        "num": 10
                    }
                },
                "k_2368664": {
                    "gsm_match_id": "k_2368664",
                    "home_score": 0,
                    "away_score": 0,
                    "home_team_id": "1510",
                    "away_team_id": "2014",
                    "home_team_name": "莫桑比克",
                    "away_team_name": "南非",
                    "gsm_league_id": "k_430",
                    "minute": "0'",
                    "status": "1",
                    "match_time": "11-16 01:00",
                    "time_stamp": 1479229200,
                    "gs": {
                        "home_per": 0,
                        "draw_per": 0,
                        "away_per": 0
                    },
                    "odds": {
                        "dxq": {
                            "o1": {
                                "odds": "1.83",
                                "bid": "k_434",
                                "hdcp": "大2/2.5"
                            },
                            "o2": {
                                "odds": "1.94",
                                "bid": "k_434",
                                "hdcp": "小2/2.5"
                            }
                        },
                        "yp": {
                            "o1": {
                                "odds": "1.95",
                                "bid": "k_434",
                                "hdcp": 0,
                                "raw_hdcp": "0"
                            },
                            "o2": {
                                "odds": "1.87",
                                "bid": "k_434",
                                "hdcp": 0
                            }
                        },
                        "op": {
                            "o1": {
                                "odds": "2.75",
                                "bid": "k_22"
                            },
                            "o2": {
                                "odds": "3.20",
                                "bid": "k_22"
                            },
                            "o3": {
                                "odds": "2.65",
                                "bid": "k_434"
                            }
                        },
                        "num": 2
                    }
                },
                "k_2359922": {
                    "gsm_match_id": "k_2359922",
                    "home_score": 0,
                    "away_score": 0,
                    "home_team_id": "1455",
                    "away_team_id": "1143",
                    "home_team_name": "马耳他",
                    "away_team_name": "冰岛",
                    "gsm_league_id": "k_430",
                    "minute": "0'",
                    "status": "1",
                    "match_time": "11-16 02:00",
                    "time_stamp": 1479232800,
                    "gs": {
                        "home_per": 0,
                        "draw_per": 0,
                        "away_per": 0
                    },
                    "odds": {
                        "dxq": {
                            "o1": {
                                "odds": "2.06",
                                "bid": "k_20005",
                                "hdcp": "大2.5/3"
                            },
                            "o2": {
                                "odds": "1.97",
                                "bid": "k_20000",
                                "hdcp": "小2.5/3"
                            }
                        },
                        "yp": {
                            "o1": {
                                "odds": "1.96",
                                "bid": "k_236",
                                "hdcp": "2",
                                "raw_hdcp": "2"
                            },
                            "o2": {
                                "odds": "2.20",
                                "bid": "k_20005",
                                "hdcp": "-2"
                            }
                        },
                        "op": {
                            "o1": {
                                "odds": "20.00",
                                "bid": "k_22"
                            },
                            "o2": {
                                "odds": "7.00",
                                "bid": "k_22"
                            },
                            "o3": {
                                "odds": "1.23",
                                "bid": "k_20005"
                            }
                        },
                        "num": 10
                    }
                },
                "k_2366942": {
                    "gsm_match_id": "k_2366942",
                    "home_score": 0,
                    "away_score": 0,
                    "home_team_id": "1131",
                    "away_team_id": "2173",
                    "home_team_name": "匈牙利",
                    "away_team_name": "瑞典",
                    "gsm_league_id": "k_430",
                    "minute": "0'",
                    "status": "1",
                    "match_time": "11-16 02:45",
                    "time_stamp": 1479235500,
                    "gs": {
                        "home_per": 0,
                        "draw_per": 0,
                        "away_per": 0
                    },
                    "odds": {
                        "dxq": {
                            "o1": {
                                "odds": "1.97",
                                "bid": "k_20000",
                                "hdcp": "大2/2.5"
                            },
                            "o2": {
                                "odds": "1.97",
                                "bid": "k_20005",
                                "hdcp": "小2/2.5"
                            }
                        },
                        "yp": {
                            "o1": {
                                "odds": "2.04",
                                "bid": "k_365",
                                "hdcp": 0,
                                "raw_hdcp": "0"
                            },
                            "o2": {
                                "odds": "2.02",
                                "bid": "k_236",
                                "hdcp": 0
                            }
                        },
                        "op": {
                            "o1": {
                                "odds": "2.80",
                                "bid": "k_20005"
                            },
                            "o2": {
                                "odds": "3.33",
                                "bid": "k_20005"
                            },
                            "o3": {
                                "odds": "2.72",
                                "bid": "k_20005"
                            }
                        },
                        "num": 10
                    }
                },
                "k_2366941": {
                    "gsm_match_id": "k_2366941",
                    "home_score": 0,
                    "away_score": 0,
                    "home_team_id": "2269",
                    "away_team_id": "6816",
                    "home_team_name": "乌克兰",
                    "away_team_name": "塞尔维亚",
                    "gsm_league_id": "k_430",
                    "minute": "0'",
                    "status": "1",
                    "match_time": "11-16 03:00",
                    "time_stamp": 1479236400,
                    "gs": {
                        "home_per": 0,
                        "draw_per": 0,
                        "away_per": 0
                    },
                    "odds": {
                        "dxq": {
                            "o1": {
                                "odds": "1.84",
                                "bid": "k_236",
                                "hdcp": "大2"
                            },
                            "o2": {
                                "odds": "2.09",
                                "bid": "k_20005",
                                "hdcp": "小2"
                            }
                        },
                        "yp": {
                            "o1": {
                                "odds": "2.08",
                                "bid": "k_365",
                                "hdcp": "-0/0.5",
                                "raw_hdcp": "0/-0.5"
                            },
                            "o2": {
                                "odds": "2.04",
                                "bid": "k_236",
                                "hdcp": "0/0.5"
                            }
                        },
                        "op": {
                            "o1": {
                                "odds": "2.39",
                                "bid": "k_20005"
                            },
                            "o2": {
                                "odds": "3.25",
                                "bid": "k_20005"
                            },
                            "o3": {
                                "odds": "3.34",
                                "bid": "k_20005"
                            }
                        },
                        "num": 10
                    }
                },
                "k_2359919": {
                    "gsm_match_id": "k_2359919",
                    "home_score": 0,
                    "away_score": 0,
                    "home_team_id": "597",
                    "away_team_id": "643",
                    "home_team_name": "捷克共和国",
                    "away_team_name": "丹麦",
                    "gsm_league_id": "k_430",
                    "minute": "0'",
                    "status": "1",
                    "match_time": "11-16 03:30",
                    "time_stamp": 1479238200,
                    "gs": {
                        "home_per": 0,
                        "draw_per": 0,
                        "away_per": 0
                    },
                    "odds": {
                        "dxq": {
                            "o1": {
                                "odds": "2.00",
                                "bid": "k_20003",
                                "hdcp": "大2/2.5"
                            },
                            "o2": {
                                "odds": "1.93",
                                "bid": "k_20005",
                                "hdcp": "小2/2.5"
                            }
                        },
                        "yp": {
                            "o1": {
                                "odds": "2.16",
                                "bid": "k_236",
                                "hdcp": 0,
                                "raw_hdcp": "0"
                            },
                            "o2": {
                                "odds": "2.16",
                                "bid": "k_20003",
                                "hdcp": 0
                            }
                        },
                        "op": {
                            "o1": {
                                "odds": "2.55",
                                "bid": "k_20005"
                            },
                            "o2": {
                                "odds": "3.30",
                                "bid": "k_20005"
                            },
                            "o3": {
                                "odds": "3.04",
                                "bid": "k_365"
                            }
                        },
                        "num": 10
                    }
                },
                "k_2242196": {
                    "gsm_match_id": "k_2242196",
                    "home_score": 0,
                    "away_score": 0,
                    "home_team_id": "1318",
                    "away_team_id": "1037",
                    "home_team_name": "意大利",
                    "away_team_name": "德国",
                    "gsm_league_id": "k_430",
                    "minute": "0'",
                    "status": "1",
                    "match_time": "11-16 03:45",
                    "time_stamp": 1479239100,
                    "gs": {
                        "home_per": 0,
                        "draw_per": 0,
                        "away_per": 0
                    },
                    "odds": {
                        "dxq": {
                            "o1": {
                                "odds": "1.86",
                                "bid": "k_20005",
                                "hdcp": "大2/2.5"
                            },
                            "o2": {
                                "odds": "2.05",
                                "bid": "k_365",
                                "hdcp": "小2/2.5"
                            }
                        },
                        "yp": {
                            "o1": {
                                "odds": "2.07",
                                "bid": "k_20005",
                                "hdcp": 0,
                                "raw_hdcp": "0"
                            },
                            "o2": {
                                "odds": "2.03",
                                "bid": "k_236",
                                "hdcp": 0
                            }
                        },
                        "op": {
                            "o1": {
                                "odds": "2.90",
                                "bid": "k_20005"
                            },
                            "o2": {
                                "odds": "3.37",
                                "bid": "k_20005"
                            },
                            "o3": {
                                "odds": "2.61",
                                "bid": "k_20005"
                            }
                        },
                        "num": 10
                    }
                },
                "k_2359920": {
                    "gsm_match_id": "k_2359920",
                    "home_score": 0,
                    "away_score": 0,
                    "home_team_id": "177",
                    "away_team_id": "1998",
                    "home_team_name": "奥地利",
                    "away_team_name": "斯洛伐克",
                    "gsm_league_id": "k_430",
                    "minute": "0'",
                    "status": "1",
                    "match_time": "11-16 03:45",
                    "time_stamp": 1479239100,
                    "gs": {
                        "home_per": 0,
                        "draw_per": 0,
                        "away_per": 0
                    },
                    "odds": {
                        "dxq": {
                            "o1": {
                                "odds": "2.04",
                                "bid": "k_236",
                                "hdcp": "大2/2.5"
                            },
                            "o2": {
                                "odds": "1.90",
                                "bid": "k_20000",
                                "hdcp": "小2/2.5"
                            }
                        },
                        "yp": {
                            "o1": {
                                "odds": "1.97",
                                "bid": "k_20000",
                                "hdcp": "-0.5",
                                "raw_hdcp": "-0.5"
                            },
                            "o2": {
                                "odds": "2.14",
                                "bid": "k_365",
                                "hdcp": "0.5"
                            }
                        },
                        "op": {
                            "o1": {
                                "odds": "1.96",
                                "bid": "k_20000"
                            },
                            "o2": {
                                "odds": "3.61",
                                "bid": "k_20005"
                            },
                            "o3": {
                                "odds": "5.27",
                                "bid": "k_20005"
                            }
                        },
                        "num": 10
                    }
                },
                "k_2362524": {
                    "gsm_match_id": "k_2362524",
                    "home_score": 0,
                    "away_score": 0,
                    "home_team_id": "1584",
                    "away_team_id": "514",
                    "home_team_name": "北爱尔兰",
                    "away_team_name": "克罗地亚",
                    "gsm_league_id": "k_430",
                    "minute": "0'",
                    "status": "1",
                    "match_time": "11-16 03:45",
                    "time_stamp": 1479239100,
                    "gs": {
                        "home_per": 0,
                        "draw_per": 0,
                        "away_per": 0
                    },
                    "odds": {
                        "dxq": {
                            "o1": {
                                "odds": "1.90",
                                "bid": "k_20005",
                                "hdcp": "大2"
                            },
                            "o2": {
                                "odds": "2.02",
                                "bid": "k_236",
                                "hdcp": "小2"
                            }
                        },
                        "yp": {
                            "o1": {
                                "odds": "1.83",
                                "bid": "k_365",
                                "hdcp": "0.5",
                                "raw_hdcp": "0.5"
                            },
                            "o2": {
                                "odds": "2.26",
                                "bid": "k_236",
                                "hdcp": "-0.5"
                            }
                        },
                        "op": {
                            "o1": {
                                "odds": "3.76",
                                "bid": "k_20005"
                            },
                            "o2": {
                                "odds": "3.25",
                                "bid": "k_20005"
                            },
                            "o3": {
                                "odds": "2.26",
                                "bid": "k_236"
                            }
                        },
                        "num": 10
                    }
                },
                "k_2287005": {
                    "gsm_match_id": "k_2287005",
                    "home_score": 0,
                    "away_score": 0,
                    "home_team_id": "774",
                    "away_team_id": "2137",
                    "home_team_name": "英格兰",
                    "away_team_name": "西班牙",
                    "gsm_league_id": "k_430",
                    "minute": "0'",
                    "status": "1",
                    "match_time": "11-16 04:00",
                    "time_stamp": 1479240000,
                    "gs": {
                        "home_per": 0,
                        "draw_per": 0,
                        "away_per": 0
                    },
                    "odds": {
                        "dxq": {
                            "o1": {
                                "odds": "2.00",
                                "bid": "k_236",
                                "hdcp": "大2/2.5"
                            },
                            "o2": {
                                "odds": "1.91",
                                "bid": "k_20003",
                                "hdcp": "小2/2.5"
                            }
                        },
                        "yp": {
                            "o1": {
                                "odds": "2.12",
                                "bid": "k_20003",
                                "hdcp": 0,
                                "raw_hdcp": "0"
                            },
                            "o2": {
                                "odds": "2.13",
                                "bid": "k_236",
                                "hdcp": 0
                            }
                        },
                        "op": {
                            "o1": {
                                "odds": "3.00",
                                "bid": "k_22"
                            },
                            "o2": {
                                "odds": "3.25",
                                "bid": "k_22"
                            },
                            "o3": {
                                "odds": "2.62",
                                "bid": "k_20005"
                            }
                        },
                        "num": 10
                    }
                },
                "k_2359921": {
                    "gsm_match_id": "k_2359921",
                    "home_score": 0,
                    "away_score": 0,
                    "home_team_id": "944",
                    "away_team_id": "598",
                    "home_team_name": "法国",
                    "away_team_name": "科特迪瓦",
                    "gsm_league_id": "k_430",
                    "minute": "0'",
                    "status": "1",
                    "match_time": "11-16 04:00",
                    "time_stamp": 1479240000,
                    "gs": {
                        "home_per": 0,
                        "draw_per": 0,
                        "away_per": 0
                    },
                    "odds": {
                        "dxq": {
                            "o1": {
                                "odds": "1.92",
                                "bid": "k_236",
                                "hdcp": "大2.5"
                            },
                            "o2": {
                                "odds": "2.03",
                                "bid": "k_20005",
                                "hdcp": "小2.5"
                            }
                        },
                        "yp": {
                            "o1": {
                                "odds": "2.08",
                                "bid": "k_20005",
                                "hdcp": "-1.5",
                                "raw_hdcp": "-1.5"
                            },
                            "o2": {
                                "odds": "2.08",
                                "bid": "k_236",
                                "hdcp": "1.5"
                            }
                        },
                        "op": {
                            "o1": {
                                "odds": "1.35",
                                "bid": "k_365"
                            },
                            "o2": {
                                "odds": "5.25",
                                "bid": "k_20005"
                            },
                            "o3": {
                                "odds": "11.30",
                                "bid": "k_20005"
                            }
                        },
                        "num": 10
                    }
                }
            },
            "k_280": {
                "k_2364671": {
                    "gsm_match_id": "k_2364671",
                    "home_score": 0,
                    "away_score": 0,
                    "home_team_id": "4387",
                    "away_team_id": "4347",
                    "home_team_name": "西班牙U21",
                    "away_team_name": "奥地利U21",
                    "gsm_league_id": "k_280",
                    "minute": "0'",
                    "status": "1",
                    "match_time": "11-16 01:00",
                    "time_stamp": 1479229200,
                    "gs": {
                        "home_per": 0,
                        "draw_per": 0,
                        "away_per": 0
                    },
                    "odds": {
                        "dxq": {
                            "o1": {
                                "odds": "2.23",
                                "bid": "k_20001",
                                "hdcp": "大3"
                            },
                            "o2": {
                                "odds": "1.95",
                                "bid": "k_20000",
                                "hdcp": "小3"
                            }
                        },
                        "yp": {
                            "o1": {
                                "odds": "1.99",
                                "bid": "k_20001",
                                "hdcp": "1.5",
                                "raw_hdcp": "1.5"
                            },
                            "o2": {
                                "odds": "1.93",
                                "bid": "k_20001",
                                "hdcp": "-1.5"
                            }
                        },
                        "op": {
                            "o1": {
                                "odds": "1.38",
                                "bid": "k_20005"
                            },
                            "o2": {
                                "odds": "5.50",
                                "bid": "k_236"
                            },
                            "o3": {
                                "odds": "10.00",
                                "bid": "k_236"
                            }
                        },
                        "num": 11
                    }
                },
                "k_2364669": {
                    "gsm_match_id": "k_2364669",
                    "home_score": 0,
                    "away_score": 0,
                    "home_team_id": "4377",
                    "away_team_id": "6953",
                    "home_team_name": "挪威U21",
                    "away_team_name": "塞尔维亚U21",
                    "gsm_league_id": "k_280",
                    "minute": "0'",
                    "status": "1",
                    "match_time": "11-16 02:00",
                    "time_stamp": 1479232800,
                    "gs": {
                        "home_per": 0,
                        "draw_per": 0,
                        "away_per": 0
                    },
                    "odds": {
                        "dxq": {
                            "o1": {
                                "odds": "1.97",
                                "bid": "k_20000",
                                "hdcp": "大2/2.5"
                            },
                            "o2": {
                                "odds": "1.97",
                                "bid": "k_365",
                                "hdcp": "小2/2.5"
                            }
                        },
                        "yp": {
                            "o1": {
                                "odds": "1.98",
                                "bid": "k_20000",
                                "hdcp": "-0/0.5",
                                "raw_hdcp": "0/-0.5"
                            },
                            "o2": {
                                "odds": "1.99",
                                "bid": "k_236",
                                "hdcp": "0/0.5"
                            }
                        },
                        "op": {
                            "o1": {
                                "odds": "2.30",
                                "bid": "k_20003"
                            },
                            "o2": {
                                "odds": "3.35",
                                "bid": "k_20005"
                            },
                            "o3": {
                                "odds": "3.48",
                                "bid": "k_20005"
                            }
                        },
                        "num": 11
                    }
                }
            }
        },
        "league": {
            "k_229": {
                "name": "世亚预",
                "league_id": "k_229",
                "odds": {
                    "yp": 6,
                    "op": 6,
                    "dxq": 6
                },
                "matchNum": 6
            },
            "k_26": {
                "name": "巴甲",
                "league_id": "k_26",
                "odds": {
                    "yp": 1,
                    "op": 1,
                    "dxq": 1
                },
                "matchNum": 1
            },
            "k_93": {
                "name": "英足总杯",
                "league_id": "k_93",
                "odds": {
                    "yp": 12,
                    "op": 12,
                    "dxq": 12
                },
                "matchNum": 12
            },
            "k_430": {
                "name": "友谊赛",
                "league_id": "k_430",
                "odds": {
                    "yp": 11,
                    "op": 11,
                    "dxq": 11
                },
                "matchNum": 11
            },
            "k_280": {
                "name": "欧青U21",
                "league_id": "k_280",
                "odds": {
                    "yp": 2,
                    "op": 2,
                    "dxq": 2
                },
                "matchNum": 2
            },
            "k_819": {
                "name": "欧青U19",
                "league_id": "k_819",
                "odds": {
                    "yp": 6,
                    "op": 6,
                    "dxq": 6
                },
                "matchNum": 6
            },
            "k_46": {
                "name": "苏乙",
                "league_id": "k_46",
                "odds": {
                    "yp": 1,
                    "op": 1,
                    "dxq": 1
                },
                "matchNum": 1
            },
            "k_1417": {
                "name": "印度超",
                "league_id": "k_1417",
                "odds": {
                    "yp": 1,
                    "op": 1,
                    "dxq": 1
                },
                "matchNum": 1
            },
            "k_227": {
                "name": "世北美预",
                "league_id": "k_227",
                "odds": {
                    "yp": 3,
                    "op": 3,
                    "dxq": 3
                },
                "matchNum": 3
            },
            "k_225": {
                "name": "世南美预",
                "league_id": "k_225",
                "odds": {
                    "yp": 5,
                    "op": 5,
                    "dxq": 5
                },
                "matchNum": 5
            },
            "k_260": {
                "name": "威挑战杯",
                "league_id": "k_260",
                "odds": {
                    "yp": 1,
                    "op": 1,
                    "dxq": 1
                },
                "matchNum": 1
            },
            "k_113": {
                "name": "香港甲",
                "league_id": "k_113",
                "odds": {
                    "yp": 1,
                    "op": 1,
                    "dxq": 1
                },
                "matchNum": 1
            }
        },
        "company": {
            "k_20003": {
                "company_id": "k_20003",
                "name": "乐天堂",
                "img_link": "Uploads/companys/52X16/20003.jpg",
                "h5_img": "/Uploads/companys/zh/a7a739023bb9d15d82fd49f09fd08a587eb5285d.png",
                "pc_url": "http://www.fun8883.com",
                "h5_url": "http://www.fun8883.com",
                "introduces": "乐天堂已有8周年。乐天堂(FUN88) 是由Welton Holdings LTD.运营并于2008年正式注册成立，并获得拥有菲律宾博彩运营牌照和英国马恩岛(IOM)在线博彩牌照 。这表明乐天堂具有雄厚的资金保障和良好的诚信度。",
                "activity": "微信支付玩起来！",
                "authority_grade": "3",
                "user_grade": "5",
                "tag": [
                    "/Uploads/info/75235e6d1e37b289169a4569696fd2ac782df868.png",
                    "Uploads/info/ghb.png"
                ],
                "is_link": 1
            },
            "k_20000": {
                "company_id": "k_20000",
                "name": "太阳城",
                "img_link": "/Uploads/companys/zh/4fc48cb243e4d0a3ac12bc20b1a5f737dd7c2b63.png",
                "h5_img": "/Uploads/companys/zh/19fbe3e5cefb320dc76f18e4b2fb2cbeac033dc8.png",
                "pc_url": "http://sss198.com/partner/266063",
                "h5_url": "http://sss198.com/partner/266063",
                "introduces": "太阳城亚洲乃正式注册的网上博彩公司。成立至今，我们不但为客户提供各种体育博彩以及多元化网上娱乐，更承诺配备最优质的投注方法，并辅以最先进的网络技术支持，献上最佳的客户服务和最优惠的支付方案",
                "activity": "50%首存红利",
                "authority_grade": "3",
                "user_grade": "5",
                "tag": [
                    "/Uploads/info/2f611276a1e423e69c601046ae0b2b672f4c6eb9.png",
                    "Uploads/info/ghb.png"
                ],
                "is_link": 0
            },
            "k_20005": {
                "company_id": "k_20005",
                "name": "平博亚洲",
                "img_link": "/Uploads/companys/zh/98edb36c0c995af9774e0d76ed38eba57df4c231.png",
                "h5_img": "/Uploads/companys/zh/24026fddb0d3d154d3f663cdfca1f826890d2a51.png",
                "pc_url": "http://www.pinbet88.com/member/web/?a=A179391",
                "h5_url": "http://www.pinbet88.com/member/web/?a=A179391",
                "introduces": "PinBet88成立于2015年，是一家致力于为亚洲市场提供最佳赔率，最高投注限额和欢迎赢家政策的线上博彩公司。她是由全球最大的在线游戏运营商之一 Pinnacle Sports 提供技术支持 。",
                "activity": "平博亚洲业界最高赔率",
                "authority_grade": "3",
                "user_grade": "5",
                "tag": [
                    "/Uploads/info/f34e42d7790043c8cc3fac000b7e786623fa5575.png",
                    "/Uploads/info/9c7ecf88ef2a31a5838978bab7a4a6d525dd91e1.png"
                ],
                "is_link": 1
            },
            "k_236": {
                "company_id": "k_236",
                "name": "博狗",
                "img_link": "/Uploads/companys/zh/afb611bf35e555acd79ffb0c4cab3cdbef03a240.jpg",
                "h5_img": "/Uploads/companys/zh/ccba189b4b6e1e3a658d811a48274bb494ebd64d.png",
                "pc_url": "http://bd-888.com/_gDWDyjDXr_BkxcaeYwg1gWNd7ZgqdRLk/1/",
                "h5_url": "http://bd-888.com/_gDWDyjDXr_BkxcaeYwg1gWNd7ZgqdRLk/1/",
                "introduces": "Bodog（博狗）是全球最大的线上娱乐品牌和数字娱乐的先驱者。历经15年多的发展，拥有高品质服务的Bodog（博狗）已然成为业内声誉最佳、经营最成功的品牌之一。",
                "activity": "注册得100%迎新奖金！",
                "authority_grade": "0",
                "user_grade": null,
                "tag": [],
                "is_link": 0
            },
            "k_17": {
                "company_id": "k_17",
                "name": "立博",
                "img_link": "/Uploads/companys/zh/daccd7ae8b6bf03f5657df93f2468e75de9249b6.jpg",
                "h5_img": "/Uploads/companys/zh/97442a5032efecd6485a45436963e3fc0b44a3b1.png",
                "pc_url": "http://online.ladbrokes.com/promoRedirect?key=ej0xNjQyMDU3NiZsPTE2NDE4MDMxJnA9NjgzMDQx",
                "h5_url": "http://online.ladbrokes.com/promoRedirect?key=ej0xNjQyMDU3NiZsPTE2NDE4MDMxJnA9NjgzMDQx",
                "introduces": "立博（ladbrokes）集团是全球最大的外围投注公司之一，在英国、比利时、爱尔兰、美国及阿根廷都提供投注服务。立博集团在全球差不多五十个国家均设办事处，雇员超过66,000名。",
                "activity": "高达20%投注优惠",
                "authority_grade": "3",
                "user_grade": "4",
                "tag": [
                    "Uploads/info/ghb.png",
                    "/Uploads/info/b9d03e83d5967803bfad470af8570faa62333004.png"
                ],
                "is_link": 1
            },
            "k_365": {
                "company_id": "k_365",
                "name": "金宝博",
                "img_link": "/Uploads/companys/zh/609677089241c22798bd0bbd177062ec5477185a.png",
                "h5_img": "/Uploads/companys/zh/ad8601ffdc782e76e5f8fceaa14859eec609105a.png",
                "pc_url": "http://aff.188188188b.com/73285/reg",
                "h5_url": "http://aff.188188188b.com/73285/reg",
                "introduces": "188金宝博是业界公认的滚球专家，每月平均提供约10,000场现场滚球赛事。188金宝博赔率最高可比同业高出约20%.",
                "activity": "支付宝10元起存,赔率高",
                "authority_grade": "3",
                "user_grade": "4",
                "tag": [
                    "Uploads/info/ghb.png",
                    "/Uploads/info/501ac3f07a897146d379b95b061192e53225d289.png"
                ],
                "is_link": 1
            },
            "k_22": {
                "company_id": "k_22",
                "name": "伟德",
                "img_link": "/Uploads/companys/zh/cb5a0a49d60772f70a9fe5b5644bf9f721f78c0d.png",
                "h5_img": "/Uploads/companys/zh/9510c7d1b29989f7a6fb399fa7c07a815daa9329.png",
                "pc_url": "http://aff.weide8aff.com/processing/clickthrgh.asp?btag=a_4569b_4",
                "h5_url": "http://aff.weide8aff.com/processing/clickthrgh.asp?btag=a_4569b_4",
                "introduces": "伟德源自英国始于1946顶级信誉玩家之选,公司由伟德国际所在总部直布罗陀持有，伟德总公司在当地拥有正规牌照，伟德品牌有超过十年之久的博彩历史，伟德同时以为亚洲玩家提供高效，卓越安全的产品.",
                "activity": "天天送5%首存",
                "authority_grade": "0",
                "user_grade": null,
                "tag": [
                    "Uploads/info/ghb.png",
                    "/Uploads/info/62966136134f297c905df8dea4741ea1622fe751.png"
                ],
                "is_link": 0
            },
            "k_20001": {
                "company_id": "k_20001",
                "name": "同乐城",
                "img_link": "/Uploads/companys/zh/4837e5d39622aecb5af6840f26ecd7ef69df804a.png",
                "h5_img": "/Uploads/companys/zh/a40c93ad9498f3406f00dcb0cb587ba194b6983e.png",
                "pc_url": "http://www.178tlc.com/fpct",
                "h5_url": "http://www.178tlc.com/fpct",
                "introduces": "同乐城是最具规模且成长最快的在线游戏网站之一，提供刺激好玩的真人荷官娱乐城，快乐彩，体育博彩，赌场老虎机，虚拟游戏，和扑克游戏等，持有菲律宾的牌照。",
                "activity": "充100送100",
                "authority_grade": "3",
                "user_grade": null,
                "tag": [
                    "/Uploads/info/9042bfe3f6db81b20a6d9479f82bd9c163b64cac.png",
                    "Uploads/info/ghb.png"
                ],
                "is_link": 0
            },
            "k_20004": {
                "company_id": "k_20004",
                "name": "申博138",
                "img_link": "Uploads/companys/52X16/20004.jpg",
                "h5_img": "/Uploads/companys/zh/9b1695706897826259d0aaac863c685c177dad00.png",
                "pc_url": "http://138safe.net/zh-cn/login/logon/265165",
                "h5_url": "http://138safe.net/zh-cn/login/logon/265165",
                "introduces": "申博138乃正式注册的网上博彩公司。网站所提供的产品和服务由马恩岛政府博彩监督委员会所授权和监管。本公司的经营理念是通过向顾客提供最佳的体育博彩及多元化网上娱乐。",
                "activity": "38%首存红利",
                "authority_grade": "3",
                "user_grade": "4",
                "tag": [
                    "/Uploads/info/7ba305edda1c78ebc68e7a32f374545aea693c77.png",
                    "/Uploads/info/81e123537d387002c009a473490d4696838f9a88.png"
                ],
                "is_link": 1
            },
            "k_434": {
                "company_id": "k_434",
                "name": "一二博",
                "img_link": "/Uploads/companys/zh/4a216a212c6fd85d23e0fc3370a9b3f061c8bfc1.jpg",
                "h5_img": "/Uploads/companys/zh/d5c864f5f80d30c41ea09cabd1ef15a8c5a6257e.png",
                "pc_url": "http://go.ava38.com/92039535/sportsbook/cs/index.html",
                "h5_url": "http://go.ava38.com/92039535/home/cs/mobile/index.html",
                "introduces": "12BET是一个远程博彩品牌，主要在某些欧洲和亚太市场提供体育投注产品和服务。在亚洲，12BET 品牌由 Pacific Sea Invests S.A. （简称“PSI”）经营，该公司注册地为英属维京 群岛。",
                "activity": "50%首存优惠,高达368元",
                "authority_grade": "3",
                "user_grade": "5",
                "tag": [
                    "/Uploads/info/93f793e3dd98b72f4e12116618566c02c6dc3c17.png",
                    "Uploads/info/ghb.png"
                ],
                "is_link": 1
            }
        },
        "collection": []
    }
    var match = matchList.match;
    var league = matchList.league;
    var company = matchList.company;
    var collection = matchList.collection;

    res.render('index/index.html', {
        match: match,
        league: league,
        company: company,
        collection: collection
    });
});

module.exports = router;
