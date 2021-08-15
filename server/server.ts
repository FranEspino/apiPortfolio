import express,{Application} from 'express';
import worksRoutes from '../routes/works';
import cors from 'cors'

class Server {
    private app: Application;
    private port: string;
    private apiPaths ={
        works: '/api/works',
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.middleware();
        this.routes();
    }

    middleware(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'))
    }  
    routes(){
        this.app.use(this.apiPaths.works, worksRoutes);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`);
        })
    }
}

export default Server;