import '../lib/instrument.mjs'  //Sentry Import
import express, {Request, Response} from 'express'
import cors from 'cors'
import 'dotenv/config'
import { clerkMiddleware } from '@clerk/express'
import clerkWebHook from './controllers/clerk.webhook.js'
import * as Sentry from "@sentry/node"
import userRouter from './routes/user.routes.js'
import projectRouter from './routes/project.routes.js'


const app = express()
const PORT = process.env.PORT || 5000


// Middleware
app.use(cors())
app.post('/api/clerk', express.raw({ type: 'application/json' }), clerkWebHook)
app.use(express.json())
app.use(clerkMiddleware())


// routes middleware
app.use('/api/user', userRouter)
app.use('/api/project', projectRouter)


// Route
app.get('/', (req: Request, res: Response) => res.send('Server is Live!'))


// Sentry
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});
Sentry.setupExpressErrorHandler(app);


// Listen
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`))