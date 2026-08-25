import { Request, Response } from 'express'
import * as Sentry from "@sentry/node"
import { prisma } from '../../lib/prisma.js';




// Create Project
export const createProject = async (req: Request, res: Response) => {
    try {
        
    } catch (error: any) {
        Sentry.captureException(error)
        res.status(500).json({ message: error.code || error.message })
    }
}



// Create Video
export const createVideo = async (req: Request, res: Response) => {
    try {
        
    } catch (error: any) {
        Sentry.captureException(error)
        res.status(500).json({ message: error.code || error.message })
    }
}


// Get All Published Projects
export const getAllPublishedProjects = async (req: Request, res: Response) => {
    try {
        
    } catch (error: any) {
        Sentry.captureException(error)
        res.status(500).json({ message: error.code || error.message })
    }
}



// Delete Project
export const deleteProject = async (req: Request, res: Response) => {
    try {
        
    } catch (error: any) {
        Sentry.captureException(error)
        res.status(500).json({ message: error.code || error.message })
    }
}
