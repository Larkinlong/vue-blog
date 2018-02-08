// import { mapState } from 'vuex'
import  resource from '../../common/resource';
import headerComp from '../../components/header/index.vue'
export default {
  name: 'home',
  data() {
    return {
      navLists:[],
      lists:[]
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
    this.lists = resource.listDatas
  },
  methods: {
    newFunc() {
      this.navLists = [
        {
          url:'../../static/icon/html5.png',
          name:'Html5'
        },
        {
          url:'../../static/icon/social-css3.png',
          name:'Css3'
        },
        {
          url:'../../static/icon/social-javascript.png',
          name:'Javascript'
        },
        {
          url:'../../static/icon/nodejs.png',
          name:'Nodejs'
        },
      ]
    }
  }
}
