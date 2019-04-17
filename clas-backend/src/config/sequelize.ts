import { Sequelize } from 'sequelize-typescript';
import path from 'path';

const env: string = process.env.NODE_ENV || 'development';

const dbConfig: any = {
    test: {
        database: "clas-test",
        dialect: 'postgres',
        username: "postgres",
        host: "localhost",
        password: "",
        models: [path.join(__dirname, '..', '/api/**/*.model.ts')]
    },
    development: {
        database: "clas-dev",
        dialect: 'postgres',
        username: "postgres",
        password: "1234",
        host: "localhost",
        models: [path.join(__dirname, '..', '/api/**/*.model.ts')]
    },
    production: {
        database: "clas-production",
        dialect: 'postgres',
        username: "postgres",
        host: "localhost",
        password: "",
        models: [path.join(__dirname, '..', '/api/**/*.model.ts')]
    }
};

class SequelizeDB {
    public async initializeDB() {
        const sequelize = new Sequelize(dbConfig[env]);
        await sequelize.sync({force: true})
    }
}

export default SequelizeDB;