//this will listen (recieve) messages from the bull quqeue and process them

const myQueue = require('./queue');

myQueue.process(async (job) => {
  const { name, email } = job.data;

  // Simulate some work
  if (!email.includes('@')) {
    throw new Error('Invalid email!');
  }

  console.log(`Processing job for ${name}`);
  // Do something, like sending an email...

  return { status: 'done' };
});


// Attach event listeners

myQueue.on('completed', (job, result) => {
  console.log(`Job completed with result:`, result);
});

myQueue.on('failed', (job, err) => {
  console.error(`Job failed with error:`, err.message);
});
