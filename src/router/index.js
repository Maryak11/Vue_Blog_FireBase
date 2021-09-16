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
import LoyoutFireBase from '../views/LoyoutFireBase.vue'
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(VueRouter)

const routes = [
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
    path: '/forgotPassword',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta: {
      title: 'ForgotPassword'
    }
  },
  {
    path: '/loyoutfirebase',
    name: 'Loyoutfirebase',
    component: LoyoutFireBase,
    children: [
      {
        path: 'profile',
        name: 'Profile',
        component: Profile,
        meta: {
          title: 'Profile',
          requiresAuth: true
        }
      },

      {
        path: 'createPost',
        name: 'CreatePost',
        component: CreatePost,
        meta: {
          title: 'CreatePost',
          requiresAuth: true
        }
      },
      {
        path: 'blogPreview',
        name: 'BlogPreview',
        component: BlogPreview,
        meta: {
          title: 'BlogPreview',
          requiresAuth: true
        }
      },
      {
        path: 'viewBlog/:blogId',
        name: 'ViewBlog',
        component: ViewBlog,
        meta: {
          title: 'ViewBlog',
          requiresAuth: true
        }
      },
      {
        path: 'editBlog/:blogId',
        name: 'EditBlog',
        component: EditBlog,
        meta: {
          title: 'EditBlog',
          requiresAuth: true
        }
      },
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
          title: 'Home',
          requiresAuth: true
        }
      },
      {
        path: 'blogs',
        name: 'Blogs',
        component: Blogs,
        meta: {
          title: 'Blogs',
          requiresAuth: true
        }
      }
    ],
    meta: {
      title: 'Loyoutfirebase',
      requiresAuth: true
    }
  },
  {
    path: '*',
    component: Home,
    meta: {
      requiresAuth: true
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
router.beforeEach((to, from, next) => {
  const user = firebase.auth().currentUser
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!user) {
      next({ name: 'Login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
