import Timeline from './timeline.model';
import { PostTimelineDto, PutTimelineDto } from './dto';

class TimelineService {
    
    public get = async () => {
        return await Timeline.findAll();
    }

    public post = async (newTimeline: PostTimelineDto) => {
        return await Timeline.create(newTimeline);
    }
    
    public put = async (updatedTimeline: PutTimelineDto) => {
        return await Timeline.update(
            { content: updatedTimeline.content },
            { where: { id: updatedTimeline.id }}
        )
    }
    
    public delete = async (id: number) => {
        return await Timeline.destroy(
            { where: { id: id }}
        );
    }
    
}

export default TimelineService;