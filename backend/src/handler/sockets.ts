import { Server, Socket } from 'socket.io';
import { User, Location } from '../utils/type';

const connectedUsers = new Map<string, User>();

const broadcastUsers = (io: Server) => {
  io.emit('users', Array.from(connectedUsers.values()));
};

const handleJoin = (io: Server, socket: Socket, userData: Omit<User, 'id'>) => {
  const user = {
    ...userData,
    id: socket.id,
  };

  console.log('User joined:', user);
  console.log('Users:', connectedUsers);
  connectedUsers.set(socket.id, user);
  broadcastUsers(io);
};

// Handle location update event
const handleLocationUpdate = (io: Server, socket: Socket, location: Location) => {
  console.log('Location update:', location);
  const user = connectedUsers.get(socket.id);
  if (user) {
    user.location = location;
    connectedUsers.set(socket.id, user);
    broadcastUsers(io);
  }
};

// Handle disconnect event
const handleDisconnect = (io: Server, socket: Socket) => {
  console.log('User disconnected:', socket.id);
  connectedUsers.delete(socket.id);
  broadcastUsers(io);
};

// Initialize socket connection
const initializeSocket = (io: Server) => {
  io.on('connection', (socket: Socket) => {
    console.log('User connected:', socket.id);

    // Set up event handlers
    socket.on('join', (userData: Omit<User, 'id'>) => handleJoin(io, socket, userData));

    socket.on('updateLocation', (location: Location) => handleLocationUpdate(io, socket, location));

    socket.on('disconnect', () => handleDisconnect(io, socket));
  });
};

// Utility function to get all connected users
const getConnectedUsers = (): User[] => {
  return Array.from(connectedUsers.values());
};

export { initializeSocket, getConnectedUsers };
