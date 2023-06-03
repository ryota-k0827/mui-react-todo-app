import { Route, Routes } from 'react-router-dom'

import { Page404 } from '~/components/pages/Errors/Page404'
import { Home } from '~/components/pages/Home'

export const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<Page404 />} />
  </Routes>
)
