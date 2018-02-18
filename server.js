var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));


val articalOne = {
    title:'Artical One| prerana bavaskar',
    heading:' Artical One',
    date :'sep 5,2018',
    content:
     <p>
                    i am good student in my school clg got a good marks  later i am choosing engineering why i don't know or maybe i don't have any option and now also i don't know which nfield i am good at i am a computer engineering but seriouly i am not that much interested in that field i dont know what is perfect to me i want to become famous something bigger like all world know me 
                            i am 2nd year i want to do an internship but 
                </p>
                <p>
                    i am good student in my school clg got a good marks  later i am choosing engineering why i don't know or maybe i don't have any option and now also i don't know which nfield i am good at i am a computer engineering but seriouly i am not that much interested in that field i dont know what is perfect to me i want to become famous something bigger like all world know me 
                                i am 2nd year i want to do an internship but 
                </p>
                        <p>
                    i am good student in my school clg got a good marks  later i am choosing engineering why i don't know or maybe i don't have any option and now also i don't know which nfield i am good at i am a computer engineering but seriouly i am not that much interested in that field i dont know what is perfect to me i want to become famous something bigger like all world know me 
                                i am 2nd year i want to do an internship but 
                </p>
    

};
val htmlTemplate= {
    
} 

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/article-two',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
