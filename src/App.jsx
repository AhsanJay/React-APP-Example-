import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import AddJobs from './pages/AddJobs';
import NotFound from './pages/NotFound';
import JobPage from './pages/JobPage';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/jobs/:id' element={<JobPage />} />
      <Route path='/add-job' element={<AddJobs />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
