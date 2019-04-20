import express from 'express';
import TimelineService from './timeline.service';
// import TimelineExport from './timeline.export';
import Timeline from './timeline.model';

import { PostTimelineDto } from './dto';

class TimelineController {
    
    private TimelineService = new TimelineService();
    
    public get = async (request: express.Request, response: express.Response) => {
        try {
            const timelines: Timeline[] = await this.TimelineService.get();
            return response.json(timelines);
        } catch(e) {
            console.log(e);
        }
    }

    public post = async (request: express.Request, response: express.Response) => {
        try {
            const bodyTimeline: PostTimelineDto = {
                "content": "abcdef"
            };
            const newTimeline = await this.TimelineService.post(bodyTimeline);
            return response.json(newTimeline);

        } catch(e) {
            console.log(e);
        }
    }
    
    public put = async (request: express.Request, response: express.Response) => {
        try {
            const id = request.params.id;
            const body = request.body;
            const updatedTimeline = {
                id: id,
                content: '수정한드아아아',
            };
            const updateTimeline = await this.TimelineService.put(updatedTimeline);
            return response.json(updatedTimeline);
        } catch(e) {
            console.log(e);
        }
    }
    
    public delete = async (request: express.Request, response: express.Response) => {
        try {
            const id = request.params.id;
            const deletedTimeline = await this.TimelineService.delete(id);
            return response.json(deletedTimeline);
        } catch(e) {
            console.log(e);
        }
    }

    
}

export default TimelineController;