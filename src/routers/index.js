import Vue from 'vue';
import Router from 'vue-router';
// import HomePage from '@/pages/HomePage.vue'; // HomePage lúc này là component
import LoginPage from '@/pages/LoginPage.vue';
import RegisterPage from '@/pages/RegisterPage.vue';
import CollectionDetailPage from '@/pages/CollectionDetailPage.vue';
import ComParent from "@/pages/ComParent.vue";
import CollectionDetailPageOne from '@/pages/CollectionDetailPageOne.vue';
import CollectionCreatePage from '@/pages/CollectionCreatePage.vue';
import CollectionTodosPage from '@/pages/CollectionTodosPage.vue';
import CollectionUpdate from '@/pages/ CollectionUpdate.vue';
import MessengerPage from "@/pages/MessengerPage.vue";
import ChatMessenger from "@/pages/ChatMessenger.vue";
import TimePointPage from "@/pages/TimePointPage.vue";
import WeatherPage from "@/pages/WeatherPage.vue";
import SearchResultCountry from "@/pages/SearchResultCountry.vue";
import InstagramPage from  "@/pages/InstangramPage.vue";
import ExplorePage from "@/pages/ExplorePage.vue";
import TestPage from "@/pages/TestPage.vue";
import ReelsPage from "@/pages/ReelsPage.vue";
import PersonalPage from "@/pages/PersonalPage.vue";
import SavedPage from "@/pages/instagram/SavedPage.vue";
import TaggetPage from "@/pages/instagram/TaggetPage.vue";
import ChatMessengerIstagram from "@/pages/instagram/ChatMessengerIstagram.vue";
import MessengerInstagram from "@/pages/MessengerInstagram.vue";
Vue.use(Router)

export default new Router({
    mode: 'history', // sử dụng url để giả lập 1 đường kink để tránh trang bị load lại
    routes: [ // bao gồm danh sách route
        {
            path: '/', ///path của route
            name: 'InstagramPage', // tên route
            component: InstagramPage // component route sử dụng
        },
        {
            path: '/login',
            name: 'LoginPage',
            component: LoginPage
        },
        {
            path: '/register',
            name: 'RegisterPage',
            component: RegisterPage
        },
        {
            path: '/saved',
            name: 'SavedPage',
            component: SavedPage
        },
        {
            path: '/tagget',
            name: 'TaggetPage',
            component: TaggetPage
        },
        {
            path: '/collection/:id',
            name: 'CollectionDetailPage' ,
            component : CollectionDetailPage
        },
        {
            path: '/ComParent',
            name: 'ComParent' ,
            component : ComParent
        },
        {
            path: '/InstagramPage',
            name: 'InstagramPage' ,
            component : InstagramPage
        },
        {
            path: '/messengerinstagram',
            name: 'MessengerInstagram' ,
            component : MessengerInstagram
        },
        {
            path: '/chatIstagram',
            name: 'ChatMessengerIstagram' ,
            component : ChatMessengerIstagram
        },
        {
            path: '/test',
            name: 'TestPage' ,
            component : TestPage
        },
        {
            path: '/messenger',
            name: 'MessengerPage' ,
            component : MessengerPage
        },
        {
            path: '/Weather1',
            name: 'TimePointPage' ,
            component : TimePointPage
        },
        {
            path: '/Weather',
            name: 'WeatherPage' ,
            component : WeatherPage
        },
        {
            path: '/SearchCountry',
            name: 'SearchResultCountry' ,
            component : SearchResultCountry
        },
        {
            path: '/explore',
            name: 'ExplorePage' ,
            component : ExplorePage
        },
        {
            path: '/reels',
            name: 'ReelsPage' ,
            component : ReelsPage
        },
        {
            path: '/personal',
            name: 'PersonalPage' ,
            component : PersonalPage
        },
        {
            path: '/Chat/:id',
            name: 'ChatMessenger' ,
            component : ChatMessenger
        },
        {
            path: '/collectionOne/:folder_id',
            name: 'CollectionDetailPageOne' ,
            component : CollectionDetailPageOne,
            children: [
                {
                    path: 'create',
                    name: 'CollectionCreatePage',
                    component : CollectionCreatePage
                },
                {
                    path: 'update',
                    name: 'CollectionUpdate' ,
                    component : CollectionUpdate
                },
                {
                    path: 'todos',
                    name: 'CollectionTodosPage' ,
                    component : CollectionTodosPage
                },
            ]
        },
    ],

})
