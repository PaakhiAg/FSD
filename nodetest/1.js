// const os=require('os');
// console.log("platform",os.platform());
// console.log("userinfo",os.userInfo());
// console.log("CPU",os.arch());
// console.log("free memory",os.freemem());
// console.log("total memory",os.totalmem());
// console.log("uptime",os.uptime());
// console.log("home directory",os.homedir());
// console.log("host name",os.hostname());

const http=require('http');
const fs=require('fs');
const home=fs.readFileSync('./a.html')
const myserver=http.createServer((req,res)=>{
    res.end(home);
})
myserver.listen(8000,()=>console.log("server is running"))