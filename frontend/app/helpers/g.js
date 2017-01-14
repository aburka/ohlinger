import Ember from 'ember';

export function g(params/*, hash*/) {
  let [o, attr] = params;
  return o.get(attr);
}

export default Ember.Helper.helper(g);
