import { COLLECTIONS } from '@/utils/constants';

export default function getUsersModel({ Schema, model, models }) {
  const userSchema = new Schema({
    email: {
      type: String,
    },
    fullName: {
      type: String,
    },
    password: {
      type: String,
    },
  });

  const Users =
    models[COLLECTIONS.USERS] || model(COLLECTIONS.USERS, userSchema);

  return Users;
}
