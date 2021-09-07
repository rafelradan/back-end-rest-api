import User from "../models/userModel"


//Lista all users
async function index(req, res){
    const  users = await User.findAll()
   return res.json(users)
}

//create a user
async function create(req, res){
    const {name, email} = req.body
    const user = await User.create({ name, email })
    return res.status(201).json(user)
}

//show a single user
async function show(req, res){
    const {id} = req.params
    const user = await User.findByPk(id)

    if (!user) {
        return res.status(400).json({ message: ` User with id ${id} not found!`})
    }
    return res.json(user)
}

//update a user
async function update(req, res){
    const {id} = req.params
    const {name, email} = req.body

    let user = await User.findByPk(id)

    if (!user) {
        return res.status(400).json({ message: ` User with id ${id} not found!`})
    }

    user.name = name
    user.email = email

    await user.save()
    
    return res.json(user)
    
}

//remove a usser
async function destroy(req, res){
    const {id} = req.params

    const user = await User.findByPk(id)

    if (!user) {
        return res.status(400).json({ message: ` User with id ${id} not found!`})
    }

    await user.destroy(id)
    return res.status(204).json()
    
}

export default {index, create, show, update, destroy}

