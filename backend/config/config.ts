export const config = {
  PORT: {
    port: process.env.PORT || 5000,
  },

  DATABASE: {
    db_name: process.env.DB_NAME || "user_authentication",
    db_host: process.env.DB_HOST || "localhost",
    db_root: process.env.DB_ROOT || "root",
    db_pwd: process.env.DB_PWD || "",
    db_dialect: process.env.DB_DIALECT || "mysql",
  },
};
