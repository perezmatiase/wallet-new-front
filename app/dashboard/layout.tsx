// app/dashboard/layout.tsx
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies()
  const token = (await cookieStore).get('access-token')

  if (!token) {
    redirect('/login')
  }

  return (
    <div>
      {children}
    </div>
  )
}
