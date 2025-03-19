import { User } from "../model/user.model";

export const userAction = async (code: string) => {
  const userdata = await User.create({
    code: code,
  });
  return userdata;
};
