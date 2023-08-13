import { Suspense, lazy } from 'react'

const SignIn = lazy(() => import('../pages/SignIn'))
const SignUp = lazy(() => import('../pages/SignUp'))
const Questions = lazy(() => import('../pages/Questions'))
const QuestionDetail = lazy(() => import('../pages/QuestionDetail'))

type RouterElement = {
  id: number
  path: string
  element: React.ReactNode
  withAuth: boolean
}

export const routerData: RouterElement[] = [
  {
    id: 0,
    path: '/',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Questions />
      </Suspense>
    ),
    withAuth: true,
  },
  {
    id: 1,
    path: '/signup',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <SignUp />
      </Suspense>
    ),
    withAuth: false,
  },
  {
    id: 2,
    path: '/signin',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <SignIn />
      </Suspense>
    ),
    withAuth: false,
  },
  {
    id: 3,
    path: '/questions',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Questions />
      </Suspense>
    ),
    withAuth: true,
  },
  {
    id: 4,
    path: '/questions/:id',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <QuestionDetail />
      </Suspense>
    ),
    withAuth: true,
  },
]
