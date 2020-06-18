const http = require("http");

const server = http.createServer((req, res) => {
    res.end('123');
    // console.log(req.headers)
})


// 事件循环
const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
    console.log('foo')
    bar()
    baz()
}

foo()


// 指示引擎在当前操作结束时，在下一个事件循环滴答开始之前调用此函数
process.nextTick(() => {
    //do something
    console.log(1)
})

setImmediate(() => {
    //run something
})

server.listen('3000')