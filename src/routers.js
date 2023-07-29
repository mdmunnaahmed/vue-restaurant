import { createRouter, createWebHistory } from 'vue-router'
import TheHome from './components/TheHome'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'

const routes = [
  {
    name: "TheHome",
    component: TheHome,
    path: '/'
  }, 
  {
    name: "SignUp",
    component: SignUp,
    path: '/signup'
  },
  {
    name: "LogIn",
    component: LogIn,
    path: '/login'
  },
  
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router

