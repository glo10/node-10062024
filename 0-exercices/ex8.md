# Exercice 8

1. A partir de l'exercice 7
2. Mettez en place un ***middleware*** qui intercepte la requête vers la route `/news:id` et vérifie le format du paramètre id de la route `/news/:id`, id doit être numérique.
- Lorsque l'id est un entier, le *middleware* transmet la requête à la route `/news/:id`
- Lorsque l'id n'est pas un entier, le client reçoit une page ***404*** 
