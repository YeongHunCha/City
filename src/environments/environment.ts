// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyClQgaN_3LCQN8UfigunVaBHSRoDhuq3U8",
    authDomain: "best-shot-listings.firebaseapp.com",
    databaseURL: "https://best-shot-listings.firebaseio.com",
    projectId: "best-shot-listings",
    storageBucket: "best-shot-listings.appspot.com",
    messagingSenderId: "858657812776"
  }
};
