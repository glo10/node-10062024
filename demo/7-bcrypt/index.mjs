import { hash, compare } from 'bcrypt'

// Hacher le mot passe
const password = 'admin'
const pwdHash = '$2b$10$oA5jgAOmdl4jnwzI.lf.VOaTKos8y3Bhj3R9WTTD7iQJsBFENV7Ue'
hash(password, 10, (err, passwordHash) => {
  if(!err) {
    console.log('mot de passe haché 1', passwordHash)
  } else {
    console.error('error ' + err.message)
  }
})

hash(password, 10, (err, passwordHash) => {
  if(!err) {
    console.log('mot de passe haché2', passwordHash)
  } else {
    console.error('error ' + err.message)
  }
})

// Comparaison 
compare(password, pwdHash)
.then((isSame) => {
  console.log('comparaison ', isSame)
})
.catch((error) => {
  console.error('error ' + error.message)
})