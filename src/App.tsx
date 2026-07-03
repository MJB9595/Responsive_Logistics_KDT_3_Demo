import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DemoLayout from './layouts/DemoLayout'
import DashboardPage from './pages/DashboardPage'
import PlaceholderPage from './pages/PlaceholderPage'

const router = createBrowserRouter([
  {
    element: <DemoLayout />,
    children: [
      { path: '/', element: <DashboardPage /> },
      // 사이드바 나머지 메뉴 — 팀원이 채워 넣을 골조 슬롯
      { path: '/:section', element: <PlaceholderPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
