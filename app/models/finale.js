import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr('number'),
  partida: DS.attr('number'),
  tAdquisicion: DS.attr('string')
});
