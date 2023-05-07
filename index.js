const express = require('express');
const cron = require('node-cron');

cron.schedule('* * * * * *', () => {
    const a = [];
    for (let i =0; i<1000000; i++){
        for (let j=0; j<10000; j++){
            a.push(i*j);
        }
    }
    console.log('running a task every minute');
});

const app = express();

app.get('/', (req, res) => res.send('hi'));

app.listen(1234, () => console.log(`listening`));
