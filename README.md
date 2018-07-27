# scrapping & diff entre 2 images

- Installer casperjs [<http://casperjs.org>]
- Installer phantomjs [<https://github.com/ariya/phantomjs>]
- Verifier que casperjs est dispo dans le path window
- Verifier que python est dispo dans le path window (<http://sametmax.com/ajouter-un-chemin-a-la-variable-denvironnement-path-sous-windows/>)
- Lancer 'npm install'

## exemples

- Pour lancer le scrapping 

  ```
    casperjs test ./suite.js
  ```

- Pour lancer une serie des test

  ```
    casperjs test ./suite-*.js
  ```

- Pour lancer une serie des test les resultats de logs dans un fichier xml

  ```
    casperjs test suite-nov-prod-fr-france.js --xunit=log_tests_nov.xml
  ```

- Pour lancer le diff entre 2 images

  ```
    ./node_modules/gulp/bin/gulp.js
  ```

  > **Note:** avec la config actuelle c'est la seule façon que j'ai trouvé pour lancer gulp
