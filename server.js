const express = require('express');
const app = express();
const db = require('./models');
const PORT = process.env.PORT || 3000;


// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// routers
const router = require('./routes/todoRouter');

// make a general routes
app.use('/api/Todos', router);

// sync with db
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening at PORT: http://localhost:${PORT}`)
    });
});