// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCh4hBOWRvNsTXv3-o1MU7kU50Tp-9P1S4",
    authDomain: "boodschatten.firebaseapp.com",
    databaseURL: "https://boodschatten.firebaseio.com",
    projectId: "boodschatten",
    storageBucket: "boodschatten.appspot.com",
    messagingSenderId: "303848180432"
  }
};
