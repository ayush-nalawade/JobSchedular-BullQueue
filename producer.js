//adding job to the queue 
const myQueue = require('./queue');

// Add a job with some fake data
myQueue.add({ name: 'Ayush', email: 'ayush@gmail.com' },{
  removeOnComplete: true, // remove the job from the queue when it's completed
  removeOnFail: true, // remove the job from the queue when it fails
});
