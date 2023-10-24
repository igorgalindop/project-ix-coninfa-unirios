import express from 'express';
import { routes } from './routes';
import { ensureAuthentication } from './middlewares/ensureAuthentication';
import { errorMessage } from './middlewares/errorMessage';

const app = express();

app.use(express.json());

app.use(ensureAuthentication);

app.use(routes);

app.use(errorMessage);

app.listen(3000, () => {
  console.log('Server is running!');
});
