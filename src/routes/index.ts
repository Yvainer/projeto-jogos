import {Router} from 'express'
import * as PageController from '../controllers/pageController'
import * as SearchController from '../controllers/searchController' 

const router = Router()

router.get('/',PageController.home)
router.get('/rpg',PageController.rpg)
router.get('/luta',PageController.luta)
router.get('/tiro',PageController.tiro)
router.get('/corrida',PageController.corrida)
router.get('/acao',PageController.acao)

router.get('/search',SearchController.search)

export default router