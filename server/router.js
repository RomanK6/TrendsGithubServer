import Router from "express";
import Controller from "./Controller.js";


const router = new Router();

router.get('/daely/', Controller.getAllByDay);
router.get('/weekly/', Controller.getAllByWeek);
router.get('/monthly/', Controller.getAllByMonth);

router.get('/daely/:id', Controller.getOneByDay);
router.get('/weekly/:id', Controller.getOneByWeek);
router.get('/monthly/:id', Controller.getOneByMonth);

router.get('/restart/', Controller.restart);

export default router;