const express = require('express')
const bodyParser = require('body-parser')

const server = express()
const port = 8181

server.set('views','./views');
server.set('view engine','ejs');
//middlewares 
server.use(bodyParser.urlencoded({ extended: false }))

server.get('/',(req,res)=>{
   res.render('index')
});

const booksCi = [
    {title:"Le monde s'effrondre",author:"chimoire achebé "},
    {title:"L'etranger ",author:"Albert camus "},
    {title:"Merci l'artiste",author:"Isai biton coulibaly "},
    {title:"L'ordonnance",author:"soro keffala "},
    {title:"Le cahier noir",author:"tresor zb "},
]

server.get('/books',(req,res)=>{
    const title = "une liste des romans et leur auteur"
    res.render('books',{test:title,books:booksCi });
})
server.post('/books',(req,res)=>{
   console.log(req.body)
   const newBooks ={title:req.body.titre,author:req.body.auteur}
   booksC = [...booksCi,newBooks]
   console.log(booksC)
   res.sendStatus(201)
})

server.get('/books/:id',(req,res)=>{
    const id = req.params.id
    const txt = `salut la compagnie ! ici la page de tout les livres a la page ${id}`
    res.render('books',{test:txt,books:booksCi})
})

server.listen(port,()=> console.log(`demarre sur le port  ${port}`) );