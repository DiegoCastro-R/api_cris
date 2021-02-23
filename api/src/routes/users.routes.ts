/* eslint-disable no-shadow */
import { request, response, Router } from 'express';
import { getRepository } from 'typeorm';
import multer from 'multer';
import uploadConfig from '../config/upload';
import User from '../models/user/users.entity';
import CreateUserService from '../services/CreateUserService';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadConfig);
usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;
  try {
    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });
    const userWithoutPassword = {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };

    return response.json(userWithoutPassword);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    try {
      const updateUserAvatar = new UpdateUserAvatarService();
      const user = await updateUserAvatar.execute({
        user_id: request.user.id,
        avatarFilename: request.file.filename,
      });

      const userWithoutPassword = {
        id: user.id,
        name: user.name,
        email: user.email,
        created_at: user.created_at,
        updated_at: user.updated_at,
      };

      return response.json(userWithoutPassword);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  },
);

usersRouter.get('/avatar', ensureAuthenticated, async (request, response) => {
  try {
    const usersRepository = getRepository(User);
    const APP_API_URL = 'http://api.crisapp.tk';
    const user = request.user.id.toString();
    const userAvatar = await usersRepository.findOne({ where: { id: user } });
    const Avatar = userAvatar?.avatar;
    if (Avatar) {
      return response.json(`${APP_API_URL}/files/${Avatar}`);
    }
    return response.json({ message: 'no avatar' });
  } catch (err) {
    return response.json(err);
  }
});

export default usersRouter;
