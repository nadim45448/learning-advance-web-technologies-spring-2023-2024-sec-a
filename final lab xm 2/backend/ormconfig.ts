
import { Job } from 'src/entity/job.entity';
import { User } from 'src/entity/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'labxm2',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '12345',
  entities: [User,Job],
  synchronize: true,
};


export default config;