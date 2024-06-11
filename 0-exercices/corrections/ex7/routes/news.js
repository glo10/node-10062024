const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')
const jsonFile = path.join(__dirname, '../public', 'data', 'news.json');

router.get('/', (req, res, next) => {
  fs.readFile(jsonFile, 'utf-8', (err, data) => {
    if(!err) {
      const news = JSON.parse(data)
      const articles = news.rss.channel.item
      res.render('news/list',  { articles : articles, title : news.rss.channel.title })
    }
  })
})
router.get('/:id', (req, res, next) => {
  fs.readFile(jsonFile, 'utf-8', (err, data) => {
    if(!err) {
      const news = JSON.parse(data)
      const article = news.rss.channel.item.find(item => item.id == req.params.id)
      res.render('news/list', article )
    }
  })
})
module.exports = router