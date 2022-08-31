const express = require('express')
const app = express();
const createRouter = require('./helpers/create_router');
const cors = require('cors')

app.use(express.json());
app.use(cors());

const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology: true})
.then((client) => {
    const db = client.db('hotel_bookings');
    const hotelCustomers = db.collection('bookings');
    const hotelRouter = createRouter(hotelCustomers)
    app.use('/api/bookings', hotelRouter);
})
.catch(error => console.log(error));

app.listen(9000, function () {
    console.log(`Listening on port ${ this.address().port}`);
})