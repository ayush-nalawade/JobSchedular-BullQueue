//we will create a queue using bull
const queue = require('bull');

//create a queue

const myQueue = new queue('my-job-queue',{
    redis: {
        host: '127.0.0.1',
        port: 6379
    }
})

module.exports = myQueue; // export the queue to use in worker.js