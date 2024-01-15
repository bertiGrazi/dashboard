import { Outlet }  from 'react-router-dom'

export function AuthLayout() {
  return (
    <div>
      <div>Autentificação</div>

      <div>
        <Outlet />
      </div>
    </div>
  )
}