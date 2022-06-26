import KbnLoginView from '@/components/templates/KbnLoginView.vue'
import KbnTaskBoardView from '@/components/templates/KbnTaskBoardView.vue'
import KbnTaskDetailModal from '@/components/templates/KbnTaskDetailModal.vue'
import KbnUserRegistrationView from '@/components/templates/KbnUserRegistrationView.vue'

export default [
  {
    path: '/',
    component: KbnTaskBoardView,
    meta: { requiresAuth: true },
  },
  {
    path: '/tasks/:id',
    component: KbnTaskDetailModal,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    component: KbnLoginView,
  },
  {
    path: '/sign_up',
    component: KbnUserRegistrationView,
  },
]
