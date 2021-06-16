const http=require('http');
const fs=require('fs');

const server = http.createServer((req,res)=>{
    const url= req.url;
    const method = req.method;
    // console.log(req);
    console.log(req.url, req.headers, req.method)
    // process.exit(); 
    // Hard event exit loop
    if(url==='/'){
        res.write('<html>')
        res.write('<head><title>My Page</title></head>')
        res.write('<body><form onclick="" action="/message" method="POST"><input type="text" /><button type="submit">Submit</button></form></body>')
        res.write('</html>')
        return res.end()
    }
    if(url==='/message' && method === "POST"){
        const body=[];
        req.on('data', (chunk) => {
            console.log("Chunk.......",chunk);
            body.push(chunk);
        })
        req.on('end',() => {
          const parsedBody=  Buffer.concat(body).toString();
        //   const message = parsedBody.split
        console.log("Parsed Body........",parsedBody)
        })
        // res.write('<html>')
        // res.write('<title>My Page</title>')
        // res.write('<body><h1>Form has submitted</h1></body>')
        // res.write('</html>')
        // res.end()
        fs.writeFileSync('message.txt',"Form has submitted")
        res.statusCode=302;
        res.setHeader('Location','/')
        return res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<title>My Page</title>')
    res.write('<body><h1>Hi My name is Kamakshi</h1></body>')
    res.write('</html>')
    res.end()
})

server.listen(3000);