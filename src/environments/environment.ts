// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBR2wCnxgq9WwuvkW2IR9ggslaKkbV8-OM",
    authDomain: "jill-auto.firebaseapp.com",
    databaseURL: "https://jill-auto.firebaseio.com",
    projectId: "jill-auto",
    storageBucket: "jill-auto.appspot.com",
    messagingSenderId: "108777278198"
  }
};
