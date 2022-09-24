import { modifier } from 'ember-modifier';
import Talik from 'talik';

export default modifier(function talik(element /*, positional, named*/) {
  const talikInstance = new Talik();
  console.log('talikInstance', talikInstance);
  talikInstance.init();
});
