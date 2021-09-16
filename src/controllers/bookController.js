import Books from "../models/bookModel";


//List all books
async function index (req, res){
    const books = await Books.findAll()
    return res.json(books)
}


//Creat a book
async function create(req, res){
    const {name, gender, author} = req.body
    const book = await Books.create({name, gender, author})
    return res.status(201).json(book)
}

//List a single book
async function show (req, res){
    const {id} = req.params
    const book = await Books.findByPk(id)

    if (!book) {
        return res.status(400).json({ message: `Erro: Book with id ${id} not found!`})
    }
    return res.status(200).json(book)
}


//Update a book
async function update(req, res) {
    const {id} = req.params
    const {name, gender, author} = req.body

    let book = await Books.findByPk(id)

    if (!book) {
        return res.status(400).json({ message: `Erro: Book with id ${id} not found!`})
    }

    book.name = name
    book.gender = gender
    book.author = author

    await book.save ()
    res.json(book)
}


//Destroy / remove a book
async function destroy (req, res) {
    const {id} = req.params
    const book = await Books.findByPk(id)

    if (!book) {
        return res.status(400).json({ message: `Erro: Book with id ${id} not found!`})
    }

    await book.destroy(id)
    return res.status(204).json({ message: `Book deleted with success!`})
    
    
}

export default {index, create, update, destroy, show}


