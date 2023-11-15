import { Map, getIn } from 'immutable';

export default function accessImmutableObject(object, array) {
  const objectMap = Map(object);
  return objectMap.getIn(array, undefined);
}
