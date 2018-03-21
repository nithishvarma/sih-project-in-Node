var express = require('express');
var con = require('../..//models/sqlconfig');
var router=express.Router();
var t;
var sql='select b.blogname,topic.topicname,subtopic.subname from (select * from blogs order by ts limit 5) b,topic,subtopic where b.topicid=topic.topicid and b.subtopicid = subtopic.subtopicid'
router.get('/',function(req,res){
  con.connect(function(err){
    con.query(sql,function(err,result){
       res.render('admin/editblog',{'blogs':result});
    })
  })
});
router.post('/',function(req,res){
  t=req.body;
  res.send('');
});
router.get('/edit',function(req,res)
{
  console.log(t.topic);
   res.render('admin/addblog');
});
module.exports=router;
