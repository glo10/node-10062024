const nb = 150
const prom = new Promise((resolve, reject) => {
  if(nb >= 100) {
    resolve({ msg : 'nombre supérieur ou égale à 100', value: nb}) // renvoie le résultat
  } else {
    reject(new Error('Nombre strictement inférieur à 100')) // erreur récupéré plus tard dans catch
  }
})

prom
.then((resultDeResolve) => {
  console.log('resultat de resolve', resultDeResolve.value)
})
.catch(error => console.error('erreur promesse', error.message))