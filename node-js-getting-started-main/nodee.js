var http = require('http')
var fs = require('fs')

var server=http.createServer()

server.on('request',function(req,res){
    console.log('Receive the request, the path is'+ req.url)

    var url= req.url
    if (url==='/'){
        fs.readFile('./resource/Assignment1.html',function(err,data){
            if(err){
                res.setHeader('Content-Type', 'Text/plain; charset=utf-8')
                res.end('Fail,please try again')
            }else{
                res.setHeader('Content-Type', 'Text/html; charset=utf-8')
                res.end(data)
            }
        })
    } else if(url==='/Register.html'){
        fs.readFile('./resource/Register.html',function(err,data){
            if(err){
                res.setHeader('Content-Type', 'Text/plain; charset=utf-8')
                res.end('Fail,please try again')
            }else{
                res.setHeader('Content-Type', 'Text/html; charset=utf-8')
                res.end(data)
    }
})
}else if(url==='/Login.html'){
    fs.readFile('./resource/Login.html',function(err,data){
        if(err){
            res.setHeader('Content-Type', 'Text/plain; charset=utf-8')
            res.end('Fail,please try again')
        }else{
            res.setHeader('Content-Type', 'Text/html; charset=utf-8')
            res.end(data)  
}
})
}else if(url==='/Search.html'){
    fs.readFile('./resource/Search.html',function(err,data){
        if(err){
            res.setHeader('Content-Type', 'Text/plain; charset=utf-8')
            res.end('Fail,please try again')
        }else{
            res.setHeader('Content-Type', 'Text/html; charset=utf-8')
            res.end(data)
}
    })
}else if (url.indexOf('/resource/')===0){
    fs.readFile('.'+url,function(error,data){
        if(error){
            return Response.en
        }
    })
}
})

server.listen(9999, function(){
    console.log('Server is running')
})