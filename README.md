# React Form Wizard


# Rappel

- onClick

:exclamation: Erreur souvent incomprise avec l'attribut onClick

Avec le code ci-dessous, nous passons une fonction à l'attribut onClick.
Le problème c'est au moment du render, la fonction sera applelée !
Mais on souhaite qu'elle soit applelé seulement au click !

````
<Button variant="primary" size="lg" onClick={this._nextStep()}>
        Finish
</Button>
````

Solution :

````
<Button variant="primary" size="lg" onClick={() => this._nextStep()}>
        Finish
</Button>
````


- setState

N'oubliez pas que cette méthode est asynchrone !

Le deuxième paramètre de setState est un callback...

- Modifier un state via un enfant

Il est possible de modifier un state parent via un enfant en passant en props à l'enfant une fonction qui se chargera de modifier le state.


- Tests

Utiliser Enzyme
Utiliser SINON.JS

- Build préparation

Dans package.jon, ajouter l'url de votre projet (homepage) afin que react sache quelle path appliquer à vous assets

Exemple : 

````
 "homepage": "https://bloomphilippe.github.io/projets/react-form-wizard",
````

Si vous utiliser react-router, ajouter le basename

Exemple :
````
basename="/projets/react-form-wizard"
````

S'il y a des chemins vers des fichiers dans votre code, n'oublier de les gérer...


# Instruction

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
