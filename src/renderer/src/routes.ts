import { createRouter, createWebHistory, RouteRecordSingleView } from 'vue-router'
import LibraryView from './views/LibraryView.vue'

export const routes: RouteRecordSingleView[] = [
  {
    path: '/',
    name: 'Library',
    component: LibraryView
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
