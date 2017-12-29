import express from 'express';
import mongodb from 'mongodb';

const  app = express();
const dbUrl = 'mongodb://localhost/crudwithredux';

mongodb.MongoClient.connect(dbUrl, function(err, db) {

    app.get('/api/v1/news', (req, res) => {
        db.collection('news').find({}).toArray((err, news) => {
            res.json({ news });
        });
    });

    app.listen(8050, () => console.log('Server is running on localhost:8050'));
});

