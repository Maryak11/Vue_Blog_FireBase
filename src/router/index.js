import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blogs from '../views/Blogs.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import Profile from '../views/Profile.vue'
import CreatePost from '../views/CreatePost.vue'
import BlogPreview from '../views/BlogPreview.vue'
import ViewBlog from '../views/ViewBlog.vue'
import EditBlog from '../views/EditBlog.vue'
// import firebase from 'firebase/app'
// import 'firebase/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs,
    meta: {
      title: 'Blogs'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: 'Register'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: 'Profile'
    }
  },
  {
    path: '/forgotPassword',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta: {
      title: 'ForgotPassword'
    }
  },
  {
    path: '/createPost',
    name: 'CreatePost',
    component: CreatePost,
    meta: {
      title: 'CreatePost'
    }
  },
  {
    path: '/blogPreview',
    name: 'BlogPreview',
    component: BlogPreview,
    meta: {
      title: 'BlogPreview'
    }
  },
  {
    path: '/viewBlog/:blogId',
    name: 'ViewBlog',
    component: ViewBlog,
    meta: {
      title: 'ViewBlog'
    }
  },
  {
    path: '/editBlog/:blogId',
    name: 'EditBlog',
    component: EditBlog,
    meta: {
      title: 'EditBlog'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | FireBlogs`
  next()
})
// router.beforeEach((to, from, next) => {
//   let user = firebase.auth().currentUser.uid
//   if (user) {
//     next()
//   }
//   next({ path: '/login' })
// })

export default router
