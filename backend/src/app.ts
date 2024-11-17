const express = require('express');
import dotenv from 'dotenv';
import router from './routes';
import cors from 'cors';
import { createServer } from 'http';
import { Server as SocketServer } from 'socket.io';
import { initializeSocket } from './handler/sockets';

dotenv.config();

const app = express();
const httpServer = createServer(app);
const port = process.env.PORT || '8005';

const io = new SocketServer(httpServer, {
  cors: {
    origin: '*',
  },
});

initializeSocket(io);

app.use(express.json());
app.use(cors());

app.use('/', router);

httpServer.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
