# Correction exercice 8

## Ajout du middleware

`router.use((req, res, next) => {`
`   if (req.params.id && !/\d+/.test(req.params.id)) {`
`     res.status(404)`
`   }`
`   next()`
`})`