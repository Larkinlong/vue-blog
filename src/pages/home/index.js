// import { mapState } from 'vuex'
// import { baseUrl } from '../../../config/index';
import headerComp from '../../components/header/index.vue'
export default {
  name: 'home',
  data() {
    return {
    }
  },
  components: {
    headerComp
  },
  // props: {
  //   msg: {
  //     type: String,
  //     required: true,
  //     default: ""
  //   }
  // },
  // mixins: [share, qrcode],
  // computed: {
  //   ...mapState(['wechatUser'])
  // },
  mounted() {
    this.newFunc()
  },
  methods: {
    newFunc() {
      console.log('22222')
    }
  }
}
