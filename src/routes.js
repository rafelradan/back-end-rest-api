import {Router} from 'express'

import userController from './controllers/userController'
import bookController from './controllers/bookController'

//Routes for users
const routes = Router()

routes.get('/users', userController.index)
routes.get('/users/:id', userController.show)
routes.post('/users', userController.create)
routes.put('/users/:id', userController.update)
routes.delete('/users/:id', userController.destroy)



//Routes for book
routes.get('/books', bookController.index)
routes.get('/books/:id', bookController.show)
routes.post('/books', bookController.create)
routes.put('/books/:id', bookController.update)
routes.delete('/books/:id', bookController.destroy)



export default routes