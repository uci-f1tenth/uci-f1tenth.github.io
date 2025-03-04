import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import AiRl from './components/AiRl'
import Layout from './components/Layout'
import Robotics from './components/Robotics'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/robotics" element={ <Robotics /> } />
          <Route path="/ai-rl" element={ <AiRl /> } />
          <Route path="*" element={ <div className='min-h-dvh text-center py-96'>404: Not Found</div> } />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>,
)
