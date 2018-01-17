// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  client_id: 'a3f9ec31788a8a46e08be755a9ff17c2bf918f10e7ddfb4ecf929bb8d2bea2bc',
  client_secret: 'e57aa5ecdc508d929d7d37676c6267769a904d68be17e7868478e449f089f6e1',
  scope: 'public+upload',

  getCodeUrl: 'https://dribbble.com/oauth/authorize',
  getTokenUrl: 'https://dribbble.com/oauth/token',

};
