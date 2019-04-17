import express from 'express';
import bodyParser from 'body-parser';

import SequelizeDB from './config/sequelize'
 
class App {
  private connection: any;
  public app: express.Application;
  public port: number;
 
  constructor(routers: express.Router[], port: number) {
    this.app = express();
    this.port = port;
    
 
    this.initializeDatabase();
    this.initializeMiddlewares();
    this.initializeControllers(routers);
  }
  
  private initializeDatabase() {
     (new SequelizeDB()).initializeDB();
  }
  
  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
  }
 
  private initializeControllers(routers: express.Router[]) {
    routers.forEach((router) => {
      this.app.use('/api', router);
    });
  }
 
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
 
export default App;