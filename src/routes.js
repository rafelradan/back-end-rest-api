import {Router} from 'express'

import userController from './controllers/userController'

const routes = Router()

routes.get('/users', userController.index)
routes.get('/users/:id', userController.show)
routes.post('/users', userController.create)
routes.put('/users/:id', userController.update)
routes.delete('/users/:id', userController.destroy)


export default routes