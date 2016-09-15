import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('finales', function() {
    this.route('perfil');
  });
  this.route('login');
  this.route('perfil');
  this.route('contacto');
});

export default Router;
