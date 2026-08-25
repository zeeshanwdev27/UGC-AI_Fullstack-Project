import express from 'express'
import { createProject, createVideo, getAllPublishedProjects, deleteProject } from '../controllers/project.controller.js'
import { protect } from '../middlewares/auth.js'


const router = express.Router()


router.post('/create', protect, createProject)
router.post('/video', protect, createVideo)
router.get('/published', getAllPublishedProjects)
router.delete('/:projectId', protect, deleteProject)



export default router