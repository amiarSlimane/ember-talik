import { modifier } from 'ember-modifier';
// import Talik from 'talik';

export default modifier(function talik(element /*, positional, named*/) {


  import('talik').then(module => {
    const Talik = module.default;
    const talikInstance = new Talik();
    console.log('talikInstance', talikInstance);
     talikInstance.init();
  })

});
