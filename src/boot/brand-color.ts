import { setCssVar } from 'quasar';
import { boot } from 'quasar/wrappers';

export default boot(() => {
  setCssVar('custom', '#000');
});
