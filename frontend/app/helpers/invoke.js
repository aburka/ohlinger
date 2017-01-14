import Ember from 'ember';

export function invoke(params/*, hash*/) {
  let [o, fn, ...args] = params;
  return o && o[fn] && o[fn].apply(o, args);
}

export default Ember.Helper.helper(invoke);
