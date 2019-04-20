// import { PostTimelineDto } from './dto';
import TimelineService from './timeline.service';
import SequelizeDB from '../../../config/sequelize';

describe("Timeline Service Test", () => {
    
    const sequelizeInstance = new SequelizeDB();
    let service: any;
    
    beforeAll(() => {
        service = new TimelineService();
    })
    
    it("GET Timeline", async () => {
        console.log(service.get);
        const response = await service.get();
        expect(response).toEqual([]);
    })
    
})

// import request from 'supertest';
// import App from '../../../app';

// describe("Test Timeline API ", () => {
    
//     let AppInstance: any;
    
//     beforeAll(() => {
//         AppInstance = new App(  [
//          new TimelineRouter().router
//         ],
//          5000).getAppInstance();
//     })
    
//     it("GET Timeline", async () => {
//         const response = await request(AppInstance).get('/api/timeline');
//         console.log('zzzz', response.status);
//         expect(response.status).toBe(200);
//     })
    
//     it("POST Timeline", async () => {
//         const response = await TimelineModel.findAll();
//     })
    
//     it("PUT Timeline", async () => {
//         const response = await TimelineModel.findAll();
//     })
    
//     it("DELETE Timeline", async () => {
//         const response = await TimelineModel.findAll();
//     })
    
// })