import {ReposByDay, ReposByWeek, ReposByMonth} from './Model.js';
import { startApp, stopServer } from './index.js';


class Controller {
    async getAllByDay(req, res) {
        try {
            const repos = await ReposByDay.find()
            return res.json(repos)
        } catch(error) {
            res.status(500).json(error)
        }
    }
    async getAllByWeek(req, res) {
        try {
            const repos = await ReposByWeek.find()
            return res.json(repos)
        } catch(error) {
            res.status(500).json(error)
        }
    }
    async getAllByMonth(req, res) {
        try {
            const repos = await ReposByMonth.find()
            return res.json(repos)
        } catch(error) {
            res.status(500).json(error)
        }
    }
    async getOneByDay(req, res) {
        try {
            const {id} = req.params
            const repos = await ReposByDay.findById(id)
            return res.json(repos)
        } catch(error) {
            res.status(500).json(error)
        }
    }
    async getOneByWeek(req, res) {
        try {
            const {id} = req.params
            const repos = await ReposByWeek.findById(id)
            return res.json(repos)
        } catch(error) {
            res.status(500).json(error)
        }
    }
    async getOneByMonth(req, res) {
        try {
            const {id} = req.params
            const repos = await ReposByMonth.findById(id)
            return res.json(repos)
        } catch(error) {
            res.status(500).json(error)
        }
    }
    async restart(req, res) {
        try {
            stopServer()
            startApp()
            return res.json({message: 'server restarted'})
        } catch(error) {
            res.status(500).json(error)
        }
    }
}

export default new Controller();