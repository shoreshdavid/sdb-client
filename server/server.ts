import * as express from 'express';
import * as path from 'path';

// Server class
class Server {

  // set app to be of type express.Application
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }
  
  // application config
  public config() {

    const buildPath = express.static(path.join(__dirname))
    
    this.app.use(buildPath);

    this.app.listen(process.env.PORT || 2000, () => {
      this.app.get('/', (req, res) => {
        res.sendFile(__dirname, 'index.html');
      });
    });
    
  }
}

// export
export default new Server().app;