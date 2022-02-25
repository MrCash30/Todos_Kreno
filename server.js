const express = require('express');
const app = express();
const db = require('./models');
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');


// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// routers
const todoRouter = require('./routes/todoRouter');
const commentRouter = require('./routes/commentRouter')

// make a general routes
app.use('/todos', todoRouter);
// app.use('/user', userRouter);

// sync with db
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening at PORT: http://localhost:${PORT}`)
    });
});