var fs = require('fs');

// fs 模块提供了用于与文件系统进行交互


// 异步写入文件
// fs.writeFileSync('文件.txt', 'Node.js 中文网', 'utf8', (error, data) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log('成功写入')
//     }
// });

// 异步删除文件
// fs.unlink('./文件.txt', (err) => {
//     if (err) throw err;
//     console.log('已成功地删除文件');
//   });

// fs.rename('./文件.txt', './123.txt', (err) => {
//     if (err) throw err;
//     console.log('重命名完成');
//     fs.stat('./123.txt', (err, stats) => {
//         if (err) throw err;
//         console.log(`文件属性: ${JSON.stringify(stats)}`);
//     });
// });

 
//  Buffer

// 创建一个长度为 10 的 Buffer，
// 其中填充了全部值为 `1` 的字节。
const buf1 = Buffer.alloc(10);

// 创建一个长度为 10、且用 0x1 填充的 Buffer。 
const buf2 = Buffer.alloc(10, 1);

 

//  Stream（数据流）        用于构建实现了流接口的对象。

const stream = require('stream');

// Node.js 中有四种基本的流类型：

// Writable - 可写入数据的流（例如 fs.createWriteStream()）。
// Readable - 可读取数据的流（例如 fs.createReadStream()）。
// Duplex - 可读又可写的流（例如 net.Socket）。
// Transform - 在读写过程中可以修改或转换数据的 Duplex 流（例如 zlib.createDeflate()）。
// 此外，该模块还包括实用函数 stream.pipeline()、stream.finished() 和 stream.Readable.from()。

// File System（文件系统）


// NodeJS通过fs内置模块提供对文件的操作。fs模块提供的API基本上可以分为以下三类：

// 文件属性读写。 
// 其中常用的有fs.stat、fs.chmod、fs.chown等等。

// 文件内容读写。 
// 其中常用的有fs.readFile、fs.readdir、fs.writeFile、fs.mkdir等等。

// 底层文件操作。 
// 其中常用的有fs.open、fs.read、fs.write、fs.close等等。

fs.readFile('./123.txt',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data.toString())
})

// Path（路径）

// 网络操作
var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text-plain' });
    response.end('Hello World\n');
}).listen(8124);