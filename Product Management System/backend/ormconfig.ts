import { Product } from "src/entity/product.entity";
import { User } from "src/entity/user.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";


const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'Practice',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  entities: [User, Product],
  synchronize: true,
};


export default config;