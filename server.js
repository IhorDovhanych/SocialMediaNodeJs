const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use(cors({
    origin: '*'
}));


db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server: http://localhost:${PORT}`);
    });
});

