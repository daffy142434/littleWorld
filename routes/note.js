var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/notelist', function(req, res, next) {
	var noteList=[];
	var data = {
		id: 1,
		title: "今天刚开始的第一篇日记",
		date: '2017-02-21',
		des: "这是今天的第一篇日记，这是用来测试的",
	}
	
	for(var i=0;i<10;i++){
		var dataItem=JSON.parse(JSON.stringify(data));
		dataItem.id=i;
		noteList.push(data);
	}
	res.end(JSON.stringify(noteList));
});

router.all('/notedetail', function(req, res, next) {
	console.log(req.body);
	var data = {
		id: 1,
		title: "今天刚开始的第一篇日记",
		date: '2017-02-21',
		des: "这是今天的第一篇日记，这是用来测试的",
	}
	res.end(JSON.stringify(data));
});

router.all('/addnote', function(req, res, next) {
	console.log(req.body.content);
	res.end(JSON.stringify({code:0}));
});

module.exports = router;
