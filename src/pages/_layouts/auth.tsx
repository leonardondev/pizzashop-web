import { Pizza } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="flex min-h-svh flex-col antialiased md:grid md:grid-cols-2">
      <div className="flex h-full flex-1 flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3 pb-2 text-lg font-medium text-foreground">
          <Pizza className="h-5 w-5" />
          <span className="font-semibold">pizza.shop</span>
        </div>
        <footer className="text-sm">
          Painel do parceiro &copy; pizza.shop - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="relative flex h-full flex-1 flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
