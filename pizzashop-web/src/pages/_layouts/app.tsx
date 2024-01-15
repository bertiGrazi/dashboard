import { Outlet }  from 'react-router-dom'

export function AppLayout() {
  return (
    <div>
      <div>cabeçalho</div>

      <div>
        <Outlet />
      </div>
    </div>
  )
}