//IMPORTS
const express = require('express');
const app = express();
//importing routes
const userRoutes = require('./routes/userRoutes');
const levelRoutes = require('./routes/levelRoutes');
const unitRoutes = require('./routes/unitRoutes');
const wordRoutes = require('./routes/wordRoutes');
const sentenceRoutes = require('./routes/sentenceRoutes');
const globalErrorHandler = require('./controllers/errorController');
const wordTypeRoutes = require('./routes/wordTypeRoutes');
const sentenceStructureRoutes = require('./routes/sentenceStructureRoutes');
const conjugationRoutes = require('./routes/conjugationRoutes');
const AppError = require('./utils/appError');
//OTHER IMPORTS
const cors = require('cors');
const cookieParser = require('cookie-parser');
//END IMPORTS
app.use(cors());
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());
//ALL OFFERED ROUTES

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/levels', levelRoutes);
app.use('/api/v1/units', unitRoutes);
app.use('/api/v1/words', wordRoutes);
app.use('/api/v1/sentences', sentenceRoutes);
app.use('/api/v1/word-type', wordTypeRoutes);
app.use('/api/v1/sentence-structures', sentenceStructureRoutes);
app.use('/api/v1/conjugations', conjugationRoutes);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(globalErrorHandler);
module.exports = app;
