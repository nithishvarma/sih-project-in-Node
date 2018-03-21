var express = require('express');
var con = require('../..//models/sqlconfig');
var router=express.Router();

router.get('/',function(req,res){
  res.render('admin/addblog');
});
router.post('/add',function(req,res){
  var r1,r2;

  var s1="select topicid from SI.topic where topicname = '"+req.body.topic+"'";
  console.log(s1);
  var s2="select subtopicid from SI.subtopic where subname = '"+req.body.subtopic+"'";
  s3="insert into topic(topicname) values('"+req.body.topic+"')";
  con.connect(function(err){
    con.query(s1,function(err,result){
      if(result.length == 0)
      {
        con.query("insert into SI.topic(topicname) values('"+req.body.topic+"')",function(err,result){
          con.query(s1,function(err,result){
            console.log(result);
                r1=result;
          });
      });
    }
   else{
     console.log(result);
      r1=result;
  }
  con.query(s2,function(err,result){
    if(result.length == 0)
    {
      con.query("insert into subtopic(subname) values('"+req.body.subtopic+"')",function(err,result){
        console.log('g');
        con.query(s2,function(err,result){
              r2=result;
        });
    });
  }
    else{
      console.log(result);
      r2=result;
    }
    var s3="INSERT INTO blogs (topicid,subtopicid,blogname,blogcont) VALUES ('"+r1[0].topicid+"','"+r2[0].subtopicid+"','"+req.body.blogname+"', '"+req.body.content+"')";
    con.query(s3,function(err,result){
      if(err) throw err;
      res.send('<p>updated</p>');
    });
  });
  });
});
});
module.exports=router;
