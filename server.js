/* 

- Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.
- Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
- Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
- Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.
- Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
- Testare su postman

*/


const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));


/* Liste server */

app.listen(port, () =>{
    console.log(`Server is running on port http://localhost:${port}`);
    
})

/* Start server */

app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

/* Array Blog */

const listPost = [

    {
        title : 'Ciambellone',
        content : 'Show a immage of the Italian Ciambellone',
        img : '/images/ciambellone.jpeg',
        tag : ["Cake", "Sugar", "Lemon"]
    },

    {
        title : 'Cracker',
        content : 'Show a immage of cracker vegan',
        img : '/images/cracker_barbabietola.jpeg',
        tag : ["Cracker", "Calated", "Beet"]
    },
    
    {
        title : 'Pane',
        content : 'Show a immage of the Italian bread',
        img : '/images/pane_fritto_dolce.jpeg',
        tag : ["Flour", "Water", "Sale"]
    },

    {
        title : 'Pasta',
        content : 'Show a immage of the Italian Pasta',
        img : '/images/pasta_barbabietola.jpeg',
        tag : ["Flour", "Carbohydrates", "Red"]
    },

    {
        title : 'Torta',
        content : 'Show a immage of the Italian Cake',
        img : '/images/torta_paesana.jpeg',
        tag : ["Cake", "Sugar", "Vanilia"]
    },
]


/* Server Blog */

app.get('/blog', (req, res) =>{
    
    res.json(listPost)
})
