import Koa from 'koa';
import usersRouter from './routers/user';
import postsRouter from './routers/post';
import Router from '@koa/router';
import * as dotenv from 'dotenv';
dotenv.config();

const app = new Koa();
const port = process.env.PORT || 3000;
const router = new Router({
  prefix: '/api/v1', // 设置公共前缀
});

router.use(usersRouter.routes());
router.use(postsRouter.routes());
app.use(router.routes());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});