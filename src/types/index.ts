export type UserSignInput = {
  email: string;
  password: string;
};

export type Task = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: string;
};
