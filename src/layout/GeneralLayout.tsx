import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getUserIdFromLocalStorage } from '../lib/localStorage'

type GeneralLayoutProps = {
  children: React.ReactNode
  withAuth: boolean
}

export default function GeneralLayout({ children, withAuth }: GeneralLayoutProps) {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isLogin = getUserIdFromLocalStorage()

  const redirectTo = () => {
    // 로그인 안된 경우
    if (withAuth && !isLogin) {
      navigate('/signin')
      return
    }

    // 로그인이 된 경우
    if (!withAuth && isLogin) {
      navigate('/questions')
      return
    }
  }

  useEffect(() => {
    redirectTo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, withAuth, isLogin])

  return <>{children}</>
}
