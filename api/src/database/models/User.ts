import { model, Schema } from 'mongoose'
import { IUser } from '../types/User'

const UserSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    select: false,
    required: true,
  },
}, { timestamps: true });

export default model<IUser>('User', UserSchema);
