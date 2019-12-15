# My portfolio website

Continously under development

[www.gaborkevinbarta.com](https://gaborkevinbarta.com/)

## File structure 

- `src` and `public` are development directories.
- `css`, `js`, `files`, and `database` are production directories used in order for the website to be deployed on Github Pages.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
A limegreen background in the title indicates it is running the development server.

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Builds and copies files for production
```
npm run deploy
```

### Builds and copies files for production and is deployed to Github Pages
```
npm run deploy-gh
```

### Simulate production environment using Docker
```
npm run docker-start
```
To stop Docker:
```
npm run docker-stop
```
A lightblue background in the title indicates it is running the staging server.

## Docker

Sometimes it might be enough to use this to start docker.

Start: `docker-compose up -d`

Stop: `docker-compose down`


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
