import { Sequelize } from 'sequelize-typescript';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const env: string = process.env.NODE_ENV || 'development';

const baseDBSetting = {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    timezone: '+9.00',
    dialect: 'postgres',
    models: [path.join(__dirname, '..', '/api/**/*.model.ts')],
    pool: {
        max: 100,
        min: 0,
        idle: 10000
    },
    define: {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        timestamps: true
    }    
}

const dbConfig: any = {
    test: Object.assign({
        database: process.env.DB_TEST,
        logging: false,
    }, baseDBSetting),
    development: Object.assign({
        database: process.env.DB_DEV,
        logging: true,
    }, baseDBSetting),
    production: Object.assign({
        database: process.env.DB_PROD,
        logging: false,
    }, baseDBSetting)
};

class SequelizeDB {
    public async initializeDB() {
        const sequelize = new Sequelize(dbConfig[env]);
        await sequelize.sync({force: true})
    }
}

export default SequelizeDB;