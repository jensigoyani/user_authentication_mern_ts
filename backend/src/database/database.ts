import { Sequelize } from "sequelize";
import { config } from "../../config/config";

const sequelize = new Sequelize(
  config.DATABASE.db_name,
  config.DATABASE.db_root,
  config.DATABASE.db_pwd,
  {
    host: config.DATABASE.db_host,
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then(() => console.log("Database connected"))
  .catch((error: any) => console.log("error", error));

export default sequelize;
