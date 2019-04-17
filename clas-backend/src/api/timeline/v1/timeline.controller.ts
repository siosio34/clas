import express from 'express';
import TimelineService from './timeline.service';
// import TimelineExport from './timeline.export';
import { PostTimelineDto } from './dto';
import Timeline from './timeline.model';

class TimelineController {
    
    private TimelineService = new TimelineService();
    
    public get = async (request: express.Request, response: express.Response) => {
        try {
            const timelines: Timeline[] = await this.TimelineService.getTimeline();
            response.send(timelines);
        } catch(e) {
            console.log(e);
        }
    }

    public post = async (request: express.Request, response: express.Response) => {
        try {
            const bodyTimeline: PostTimelineDto = {
                "content": "abcdef"
            };
            const newTimeline = await this.TimelineService.postTimeline(bodyTimeline);
            response.send(newTimeline);

        } catch(e) {
            console.log(e);
        }
    }
    
}

export default TimelineController;