const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');
const db = require('./configs/mongodb/index.mongodb');
const route = require('./routes/index.route');

const port = process.env.PORT || 3000;

db.connect();
route(app);

app.listen(port, () => {
    console.log(`App listen on port:${port}`);
});