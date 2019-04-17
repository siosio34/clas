import express from 'express';
import TimelineController from './timeline.controller'

class TimelineRouter {
    public router = express.Router();

    private TimelineController = new TimelineController();
    
    constructor() {
        this.intializeRoutes();
    }
    
    public intializeRoutes() {
        this.router.get('/timeline', this.TimelineController.post);
        this.router.post('/timeline', this.TimelineController.post);
    }
}

export default TimelineRouter;





