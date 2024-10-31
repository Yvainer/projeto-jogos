import {Request, Response} from 'express'
import { createMenuObject } from '../helpers/createMenuObjects'
 
export const home = (req:Request, res:Response)=>{
    res.render('pages/pages',{
        menu: createMenuObject('all'),
        banner: {
            title:'Todos os jogos',
            background:'allanimals.jpg'
        }
 
    })
}
export const rpg  = (req:Request,res:Response) =>{
    res.render('pages/pages',{
        menu:createMenuObject('rpg'),
        banner:{
            title:'Todos os rpg',
            background:'banner_dog.jpg'
        }
    })
}
 
export const luta = (req:Request, res:Response) =>{
    res.render('pages/pages',{
        menu:createMenuObject('luta'),
        banner:{
            title:'Todos as lutas',
            background:'banner_cat.jpg'
        }
    })
}
 
export const tiro = (req:Request, res:Response) => {
    res.render('pages/pages',{
        menu:createMenuObject('tiro'),
        banner:{
            title:'Todos os tiros',
            background: 'banner_fish.jpg'
        }
    })
}


export const corrida = (req:Request, res:Response) => {
    res.render('pages/pages',{
        menu:createMenuObject('corrida'),
        banner:{
            title:'Todos os tiros',
            background: 'banner_fish.jpg'
        }
    })
}


export const acao = (req:Request, res:Response) => {
    res.render('pages/pages',{
        menu:createMenuObject('acao'),
        banner:{
            title:'Todos os ações',
            background: 'banner_fish.jpg'
        }
    })
}