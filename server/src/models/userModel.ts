import dayjs from "dayjs";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

export interface userDocument extends Document {
  username: string;
  email: string;
  password: string;
  passwordResetToken: string;
  passwordResetExpires: Date;
  isVerified: boolean;
  isAdmin: boolean;
  expires?: Date;

  comparePassword(password: string): boolean;
  hidePassword(): void;
  hashPassword(): Promise<string>;
}

const userSchema = new mongoose.Schema<userDocument>({
  username: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  passwordResetToken: {
    type: String,
    default: "",
  },
  passwordResetExpires: {
    type: Date,
    default: dayjs().toDate(),
  },
  isVerified: {
    type: Boolean,
    required: true,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
    required: true,
  },
  expires: {
    type: Date,
    default: dayjs().toDate(),
    expires: 43200,
  },
});

//COMPARE PASSWORD
userSchema.methods.comparePassword = function (password: string) {
  return bcrypt.compareSync(password, this.password);
  //compare user entered password and password stored in DB
};

export const User = mongoose.model<userDocument>("User", userSchema);
