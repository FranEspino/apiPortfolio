import {Request, Response} from 'express' ;
const pool = require("../mysql/database")

//GET MY WORKS
export const getWorks = async(req: Request, res: Response) => {
    const works = await pool.query("SELECT *FROM service");
    res.json(works);
}

//GET JUST ONCE WORK
export const getOnceWork = (req: Request, res: Response) => {
    const {id} = req.params;
    res.json({
        msg: 'Im just Once Work',
        id
    });
}

//POST WORK
export const postWorks = async (req: Request, res: Response) =>{
    const {body} = req;
    await pool.query("INSERT INTO service set ?",[body]);
    res.json({body});

}

//PUT WORK
export const updateWorks = (req: Request, res: Response) =>{
    const {id} = req.params;
    const {body} = req;
    res.json({
        msg: 'Im updateWorks',
        body:body,
        id:id
    });
}

//DELETE WORK
export const deleteWorks = (req: Request, res: Response) =>{
    const {id} = req.params;
    res.json({
        msg: 'Im deleteWorks',
        id:id
    });
}