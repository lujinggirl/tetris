import { transform } from '../../../unit/const'

export default {
  props: [
    'active',
    'color',
    'size',
    'top',
    'left',
    'label',
    'position',
    'arrow'
  ],
  mounted(){
    console.log(this.active, this.color);
  }
}
