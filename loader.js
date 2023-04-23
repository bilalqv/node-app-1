const { setup } = require('./Util/preBuildSetup');

if(process.env.NODE_ENV == 'production') {
  setup().then(res => {
    console.log(`Loader: ${res}`)
  }).catch(err => {
    console.log(`Error in Loader: ${err}`)
  })
}