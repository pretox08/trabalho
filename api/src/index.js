import 'dotenv/config';
import  express  from 'express';
import cors from 'cors';

import mercadoController from './controller/mercadoController.js';

let servidor = express();
servidor.use(cors());
servidor.use(express.json());

servidor.use(mercadoController);

servidor.listen(process.env.PORT, () => console.log('Subiu a api'));