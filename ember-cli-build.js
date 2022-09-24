'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
  let app = new EmberAddon(defaults, {
    autoImport: {
      skipBabel: [
        {
          // when an already-babel-transpiled package like "mapbox-gl" is
          // not skipped, it can produce errors in the production mode
          // due to double transpilation
          package: 'talik',
          semverRange: '*',
        },
      ],
      webpack: {
        // extra webpack configuration goes here
      },
    },
    babel: {
      plugins: [require.resolve('ember-auto-import/babel-plugin')],
    },
    // Add options here
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  const { maybeEmbroider } = require('@embroider/test-setup');
  return maybeEmbroider(app, {
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
  });
};
