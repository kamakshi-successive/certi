const http=require('http')

const server = http.createServer((req,res)=>{
    const url= req.url;
    if (url==='/'){
        res.write('<html>')
        res.write('<head><titile>My Page</title></head>')
        res.write('<body>')
        res.write('<ui><li>User1</l1><li>User2</l1></ui>')
        res.write('<form action="/create-user" method="POST"><input type="text" name="Username"/><button type=submit>Submit</button></form>')
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }
    if (url==='/users'){
        res.write('<html>')
        res.write('<head><titile>My Page</title></head>')
        res.write('<body>')
        res.write('<ui><li>User1</l1><li>User2</l1></ui>')
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }
    if (url==='/create-user'){
        const body=[];
        req.on('data',(chunk)=>{
            body.push(chunk);
        })
        req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            // username whatever the use entered
            console.log(parsedBody.split('=')[1])  
        })
        res.statusCode=302;
        res.setHeader('Location','/');
        res.end();
    }
})
server.listen(3000)