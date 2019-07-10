import mongoose from 'mongoose';
import app from './config/express';
import logger from 'morgan';
import config from './config/env';

mongoose.connect(config.db, { useNewUrlParser: true });
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: `);
});
mongoose.connection.on('connected', () => {
    console.log(`Connected to database: `);
});

app.use(logger('dev'));


app.listen(config.port, () => {
    console.log(`API Server started and listening on port ${config.port}`);
});

export default app;