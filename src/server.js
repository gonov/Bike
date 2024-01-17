import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import jsxRender from './utils/jsxRender';
import indexRouter from './routes/indexRouter';
import oneTrackRouter from './routes/oneTrackRouter';
import apiRouter from './routes/apiRouter';
import resLocals from './middlewares/resLocals';
<<<<<<< HEAD
import homepageRouter from './routes/homepageRouter';
import profilepageRouter from './routes/profilepageRouter';
=======
import authRouter from './routes/authRouter';
>>>>>>> 519992c (singUpPagr)

const PORT = process.env.PORT || 3001;
const app = express();

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components', 'pages'));

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(resLocals);

app.use('/', indexRouter);
app.use('/map', oneTrackRouter);

app.use('/api', apiRouter);
<<<<<<< HEAD
app.use('/', homepageRouter);
app.use('/profilepage', profilepageRouter);
=======
app.use('/auth', authRouter);
>>>>>>> 519992c (singUpPagr)

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
