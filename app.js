const express = require('express');
const app = express();
const port = 3000;

// Array di post
const posts = [
    {
      title: 'Primo Post',
      content: 'Questo è il contenuto del primo post.',
      image: '/images/post1.jpg',
      tags: ['introduzione', 'primo']
    },
    {
      title: 'Secondo Post',
      content: 'Questo è il contenuto del secondo post.',
      image: '/images/post2.jpg',
      tags: ['aggiornamento', 'secondo']
    },
    {
      title: 'Terzo Post',
      content: 'Questo è il contenuto del terzo post.',
      image: '/images/post3.jpg',
      tags: ['notizie', 'terzo']
    },
    {
      title: 'Quarto Post',
      content: 'Questo è il contenuto del quarto post.',
      image: '/images/post4.jpg',
      tags: ['eventi', 'quarto']
    },
    {
      title: 'Quinto Post',
      content: 'Questo è il contenuto del quinto post.',
      image: '/images/post5.jpg',
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
