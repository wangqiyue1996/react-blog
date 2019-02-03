import Layout from '@/components/web/layout'
import PageNotFound from '@/components/404'
import Home from './home'
import Article from './article'

export default {
  path: '/',
  name: 'home',
  component: Layout,
  childRoutes: [
    { path: '', component: Home }, 
    { path: 'article/:id', component: Article }, 
    { path: '*', component: PageNotFound },
  ]
}
