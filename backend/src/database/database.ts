import { Sequelize } from "sequelize";
import { CONFIG } from "../../config/config";

const sequelize = new Sequelize(
  CONFIG.DATABASE.DB_NAME,
  CONFIG.DATABASE.DB_ROOT,
  CONFIG.DATABASE.DB_PWD,
  {
    host: CONFIG.DATABASE.DB_HOST,
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then(() => console.log("Database connected"))
  .catch((error: any) => console.log("error", error));

export default sequelize;
