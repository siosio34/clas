import App from './app';
import TimelineRouter from './api/timeline/v1/timeline.route';
 
const app = new App(
  [
    new TimelineRouter().router
  ],
  5000,
);
 
app.listen();

export default app;