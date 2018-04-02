import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'//首页
import House from '@/components/House'//房产
import Active from '@/components/Active'//活动
import ActiveCotent from '@/components/ActiveCotent'//当前活动
import PastActive from '@/components/PastActive'//往期活动
import User from '@/components/User'//我的
import NewHouse from '@/components/NewHouse'//新房
import RentHouse from '@/components/RentHouse'//租房
import SecondHouse from '@/components/SecondHouse'//二手房
import HouseOwner from '@/components/HouseOwner'//业主
import SellHouse from '@/components/SellHouse'//我要卖房
import WantRent from '@/components/WantRent'//我要出租
import Assessment from '@/components/Assessment'//我要估价
import HomeDesign from '@/components/HomeDesign'//家居
import Quality from '@/components/Quality'//品质家居
import OrderMade from '@/components/OrderMade'//全屋定制
import OrderMadeDtails from '@/components/OrderMadeDtails'//全屋定制详情
import OrderMadeList from '@/components/OrderMadeList'//全屋定制列表
import HomeDesignDetails from '@/components/HomeDesignDetails'//家居详情
import HouseDetails from '@/components/HouseDetails'//楼盘详情
import ActiveDetails from '@/components/ActiveDetails'//活动详情
import SencondDtails from '@/components/SencondDtails'//二手房详情
import HomeFocus from '@/components/HomeFocus'//关注的房产
import ActiveFocus from '@/components/ActiveFocus'//关注的活动
import HomeDesignFocus from '@/components/HomeDesignFocus'//关注的家居
import AboutUs from '@/components/AboutUs'//关于我们
import Setting from '@/components/Setting'//设置
import DesignerDtails from '@/components/DesignerDtails'//设计师详情

Vue.use(Router)

//const Active = r => require.ensure([], () => r(require('../components/Active')), 'Active')
export default new Router({
  routes: [
      {
      path: '/',
      redirect: '/Home'
    }, 
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/House',
      name: 'House',
      component: House
    },
    {
      path: '/Active',
      name: 'Active',
      component: Active,
      
    },
    {
      path: '/HomeDesign',
      name: 'HomeDesign',
      component: HomeDesign,
      
    },
    {
      path: '/User',
      name: 'User',
      component: User,
      
    },
    {
      path: '/ActiveCotent',
      name: 'ActiveCotent',
      component: ActiveCotent
    },
    {
      path: '/PastActive',
      name: 'PastActive',
      component: PastActive
    },
    {
      path: '/NewHouse',
      name: 'NewHouse',
      component: NewHouse
    },
    {
      path: '/RentHouse',
      name: 'RentHouse',
      component: RentHouse
    },
    {
      path: '/SecondHouse',
      name: 'SecondHouse',
      component: SecondHouse
    },
    {
      path: '/HouseOwner',
      name: 'HouseOwner',
      component: HouseOwner
    },
    {
      path: '/SellHouse',
      name: 'SellHouse',
      component: SellHouse
    },
    {
      path: '/WantRent',
      name: 'WantRent',
      component: WantRent
    },
    {
      path: '/Assessment',
      name: 'Assessment',
      component: Assessment
    },
    {
      path: '/Quality',
      name: 'Quality',
      component: Quality
    },
    {
      path: '/OrderMade',
      name: 'OrderMade',
      component: OrderMade
    },
    {
      path: '/HomeDesignDetails',
      name: 'HomeDesignDetails',
      component: HomeDesignDetails
    },
    {
      path: '/HouseDetails',
      name: 'HouseDetails',
      component: HouseDetails
    },
    {
      path: '/ActiveDetails',
      name: 'ActiveDetails',
      component: ActiveDetails
    },
    {
      path: '/HomeFocus',
      name: 'HomeFocus',
      component: HomeFocus
    },
    {
      path: '/ActiveFocus',
      name: 'ActiveFocus',
      component: ActiveFocus
    },
    {
      path: '/HomeDesignFocus',
      name: 'HomeDesignFocus',
      component: HomeDesignFocus
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/Setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/SencondDtails',
      name: 'SencondDtails',
      component: SencondDtails
    },
    {
      path: '/OrderMadeDtails',
      name: 'OrderMadeDtails',
      component: OrderMadeDtails
    },
    {
      path: '/OrderMadeList',
      name: 'OrderMadeList',
      component: OrderMadeList
    },
    {
      path: '/DesignerDtails',
      name: 'DesignerDtails',
      component: DesignerDtails
    },
  ]
})
