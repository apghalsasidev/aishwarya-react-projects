steps to create app from screach
1. create new folder with desired name for your app
2. create new files as App.js, index.html, index.css
3. create package.json file with npm command - npm init
4. remove "main": "App.js" from package.json
5. install neccessary dependencies - parcel/webpack, react, react-dom eg. npm install parcel
6. start app npx parcel index.html
6. add scripts in package.json:
    "start": "parcel index.html"
7. after adding script you can use npm start to start the app