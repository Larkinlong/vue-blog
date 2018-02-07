// import { mapState } from 'vuex'
// import { baseUrl } from '../../../config/index';

export default {
  name: 'headerComp',
  data() {
    return {
    }
  },
  props: {
    msg: {
      type: String,
      required: true,
      default: ""
    }
  },
  // mixins: [share, qrcode],
  // computed: {
  //   ...mapState(['wechatUser'])
  // },
  components: {},
  mounted() {},
  methods: {
  }
}
