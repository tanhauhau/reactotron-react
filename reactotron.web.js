import Reactotron, { trackGlobalErrors, openInEditor } from 'reactotron-react-js'
const noop = () => {}
Reactotron.useReactNative = function () {
  return Reactotron
}

const overlay = noop;
const asyncStorage = noop;
const networking = noop;

export {
  trackGlobalErrors,
  openInEditor,
  overlay,
  asyncStorage,
  networking
}
export default Reactotron
