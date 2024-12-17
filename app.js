const express = require('express');
const app = express();
const port = 3001;

//rotta 'server del mio blog'

app.get('/', (req, res) =>{
    res.send('Server del mio blog')
})

// Array di post
const posts = [
    {
      title: 'Primo Post',
      content: 'Questo è il contenuto del primo post.',
      image: 'http://localhost:3001/images/ciambellone.jpeg',
      tags: ['introduzione', 'primo']
    },
    {
      title: 'Secondo Post',
      content: 'Questo è il contenuto del secondo post.',
      image: 'http://localhost:3001/images/cracker_barbabietola.jpeg',
      tags: ['aggiornamento', 'secondo']
    },
    {
      title: 'Terzo Post',
      content: 'Questo è il contenuto del terzo post.',
      image: 'http://localhost:3001/images/pane_fritto_dolce.jpeg',
      tags: ['notizie', 'terzo']
    },
    {
      title: 'Quarto Post',
      content: 'Questo è il contenuto del quarto post.',
      image: 'http://localhost:3001/images/pasta_barbabietola.jpeg',
      tags: ['eventi', 'quarto']
    },
    {
      title: 'Quinto Post',
      content: 'Questo è il contenuto del quinto post.',
      image: 'http://localhost:3001/images/torta_paesana.jpeg',
      tags: ['conclusione', 'quinto']
    }
  ];

//stabiliamo la rotta 'bacheca'

app.get('/bacheca', (req, res) =>{
    res.json({
        count: posts.length,
        posts: posts
    });
});

//configuro gli asset statici

app.use(express.static('public'));

//avvio del server

app.listen(port, () =>{
    console.log(`Sono in ascolto sulla porta: ${port}`); 
});
