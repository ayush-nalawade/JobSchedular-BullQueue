//adding job to the queue 
const myQueue = require('./queue');

// Add a job with some fake data
myQueue.add({ name: 'Ayush', email: 'ayush@gmail.com' });
