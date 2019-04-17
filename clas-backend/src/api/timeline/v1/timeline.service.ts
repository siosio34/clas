import Timeline from './timeline.model';
import { PostTimelineDto } from './dto';

class TimelineService {
    
    public getTimeline = async () => {
        return await Timeline.findAll();
    }

    public postTimeline = async (newTimeline: PostTimelineDto) => {
        return await Timeline.create(newTimeline);
    }
    
}

export default TimelineService;