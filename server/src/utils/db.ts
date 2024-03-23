import mongoose from "mongoose";

export const connectDB = (uri: string) => {
  mongoose
    .connect(uri, {
      dbName: "MernAuthentication",
    })
    .then((c) => console.log(`Database connected to ${c.connection.host}`))
    .catch((e) => console.log(e));
};