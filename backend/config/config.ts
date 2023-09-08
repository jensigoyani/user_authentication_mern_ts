export const CONFIG = {
  PORT: {
    PORT: process.env.PORT || 5000,
  },

  DATABASE: {
    DB_NAME: process.env.DB_NAME || "user_authentication",
    DB_HOST: process.env.DB_HOST || "localhost",
    DB_ROOT: process.env.DB_ROOT || "root",
    DB_PWD: process.env.DB_PWD || "",
    DB_DIALECT: process.env.DB_DIALECT || "mysql",
  },
};
