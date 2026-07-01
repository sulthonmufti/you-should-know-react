import { Routes, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PageWrapper from './components/layout/PageWrapper'

import Home from './pages/Home'
import Learn from './pages/Learn'
import Topic from './pages/Topic'
import NotFound from './pages/NotFound'

import ProjectStructure from './pages/ProjectStructure';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />

      <PageWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/:moduleId/:topicId" element={<Topic />} />
          <Route path="/project-structure" element={<ProjectStructure />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageWrapper>

      <Footer />
    </div>
  )
}

export default App