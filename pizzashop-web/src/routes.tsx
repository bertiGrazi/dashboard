import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { Dashboard } from './pages/app/dashboard'
import { AuthLayout } from './pages/_layouts/auth'
import { SignIn } from './pages/auth/signIn'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '', element: <Dashboard /> }
    ]
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> }
    ]
  }
])