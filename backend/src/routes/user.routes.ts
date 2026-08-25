import express from 'express'
import { getUsersCredits, getAllProjects, getProjectById, toggleProjectPublic } from '../controllers/user.controller.js'
import { protect } from '../middlewares/auth.js'


const router = express.Router()


router.get('/credits', protect, getUsersCredits)
router.get('/projects', protect, getAllProjects)
router.get('/projects/:projectId', protect, getProjectById)
router.get('/publish/:projectId', protect, toggleProjectPublic)


export default router