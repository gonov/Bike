import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import jsxRender from './utils/jsxRender';
// import oneTrackRouter from './routes/oneTrackRouter';
import indexRouter from './routes/render/indexRouter';

import authRouter from './routes/render/authRouter';
import apiAuthRouter from './routes/api/apiAuthRouter';

import apiAddRouter from './routes/api/apiAddRouter';
import resLocals from './middlewares/resLocals';
// import { verifyAccessToken } from './middlewares/verifyTokens';
// import checkNoAuth from './middlewares/checkAuth';


//  



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
app.use('/auth', authRouter);
app.use('/api/add', apiAddRouter)


app.use('/api/auth', apiAuthRouter);

// app.use('/api', apiRouter);
// app.use('/auth', authRouter);

// app.use('/profile', profilepageRouter);
// app.use('/', homepageRouter);


// app.use('/api/comment', apiCommentRouter);




app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
