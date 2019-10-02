const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken');
users.use(cors());
const User = require('../models/User');

process.env.SECRET_KEY = 'secret'

users.post('/login', (req,res) =>  {
  const user = {
    id: 1,
    username: 'ram',
    email: 'ram@gmail.com'
  }
  jwt.sign({user}, 'secretkey', { expiresIn: '60s' }, (err, token) => {
    res.json({
      token
    })
  })
});

router.post('/create', function(req, res, next) {
  var name = req.body.name;
  var sku = req.body.sku;
  var price = req.body.price;

  jwt.sign({name}, 'secretkey', { expiresIn: '60s' }, (err, token) => {
    res.json({
      token
    })

  var sql = `INSERT INTO products (name, sku, price, active, created_at) VALUES ("${name}", "${sku}", "${price}", 1, NOW())`;
  db.query(sql, function(err, result) {
    if(err) {
      res.status(500).send({ error: 'Something failed!' })
    }
    res.json({'status': 'success', id: result.insertId})
  })
});

users.post('/register', (req, res) => {
  const today = new Date()
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: today
  }

  User.findOne({
    where: {
      email: req.body.email
    }
  })
    
    .then(user => {
      if (!user) {
        User.create(userData)
          .then(user => {
            let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
              expiresIn: 1440
            })
            res.json({ token: token })
          })
          .catch(err => {
            res.send('error: ' + err)
          })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})


module.exports = users
