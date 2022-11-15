import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import db from './config/db';
import express from 'express';
import routes from './routes';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
dotenv.config();

const app = express();

// const allowedOrigins = ['*', process.env.FRONTEND_URL];
// const allowedOrigins = process.env.FRONTEND_URL;
const allowedOrigins = '*';

const options: cors.CorsOptions = {
  origin: allowedOrigins,
  credentials: true,
  methods: 'GET,PUT,POST,DELETE,OPTIONS',
  allowedHeaders:
    'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json',
};

/* const options: cors.CorsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true
}; */

db();

// app.use(cors(options));
app.use(cors());

app.use(helmet());

/* app.use(express.json());
app.use(express.urlencoded({ extended: false })); */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

routes(app);

app.get('/', (req, res) => {
  res.status(200).json('Working fine');
});

const port = process.env.PORT || 1000;

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

export default app;
