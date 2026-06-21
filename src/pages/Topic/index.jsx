import { useProgress } from '../../hooks/useProgress';
import Button from '../../components/ui/Button';
import { CheckCircle } from 'lucide-react';
import { useParams, Navigate } from 'react-router-dom';
import { getTopicById } from '../../utils/getTopicById';
import Sidebar from '../../components/layout/Sidebar';
import Badge from '../../components/ui/Badge';

import ProjectAnatomy from '../../content/module-0/ProjectAnatomy';
import HtmlCss from '../../content/module-0/HtmlCss';
import ModernJs from '../../content/module-0/ModernJs';
import DomEvent from '../../content/module-0/DomEvent';

import IntroReact from '../../content/module-1/IntroReact';
import ComponentProps from '../../content/module-1/ComponentProps';
import UseState from '../../content/module-1/UseState';

import UseEffect from '../../content/module-1/UseEffect';
import ListKeys from '../../content/module-1/ListKeys';

import AdvancedHooks from '../../content/module-2/AdvancedHooks';
import FetchApi from '../../content/module-2/FetchApi';
import FormHandling from '../../content/module-2/FormHandling';
import ContextApi from '../../content/module-2/ContextApi';
import ReactRouter from '../../content/module-2/ReactRouter';

import FirebaseAuth from '../../content/module-3/FirebaseAuth';
import Firestore from '../../content/module-3/Firestore';
import Performance from '../../content/module-3/Performance';
import Testing from '../../content/module-3/Testing';
import Deploy from '../../content/module-3/Deploy';

export default function Topic() {
  const { moduleId, topicId } = useParams();
  const topic = getTopicById(moduleId, topicId);
  const { isCompleted, toggleTopic } = useProgress();
  
  if (!topic) {
    return <Navigate to="/not-found" />;
  }

  const renderContent = () => {
    switch (topicId) {
      //modul 0
      case 'project-anatomy':
        return <ProjectAnatomy />;
      case 'html-css':
        return <HtmlCss />;
      case 'modern-js':
        return <ModernJs />;
      case 'dom-event': 
        return <DomEvent />;

      //modul 1
      case 'intro-react':
        return <IntroReact />;
      case 'component-props':
        return <ComponentProps />;
      case 'usestate':
        return <UseState />;
      case 'useeffect':
        return <UseEffect />;
      case 'list-keys':
        return <ListKeys />;

      //modul 2
      case 'advanced-hooks':
        return <AdvancedHooks />;
      case 'fetch-api':
        return <FetchApi />;
      case 'form-handling':
        return <FormHandling />;
      case 'context-api':
        return <ContextApi />;
      case 'react-router':
        return <ReactRouter />;

      //modul 3
      case 'firebase-auth':
        return <FirebaseAuth />;
      case 'firestore':
        return <Firestore />;
      case 'performance':
        return <Performance />;
      case 'testing':
        return <Testing />;
      case 'deploy':
        return <Deploy />;

      default:
        return (
          <div style={{ padding: '3rem', textAlign: 'center', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-default)', border: '1px dashed var(--color-border)' }}>
            <h3 style={{ marginBottom: '1rem' }}>Materi Sedang Disusun 🚧</h3>
            <p style={{ opacity: 0.7 }}>Konten detail untuk <strong>{topic.title}</strong> sedang dalam tahap penulisan.</p>
          </div>
        );
    }
  };

  const completed = isCompleted(topicId);

  return (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
      <Sidebar />

      <div style={{ 
        flex: 1, 
        padding: '2rem', 
        backgroundColor: 'var(--color-bg)', 
        borderRadius: 'var(--radius-card)', 
        border: '1px solid var(--color-border)',
        boxShadow: 'var(--shadow-sm)',
        minWidth: 0
      }}>
        {/* Header Materi */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
          <h1 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem', fontSize: '2rem', lineHeight: '1.3' }}>
            {topic.title}
          </h1>
          
          <Button 
            variant={completed ? "secondary" : "primary"} 
            onClick={() => toggleTopic(topic.id)}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <CheckCircle size={18} color={completed ? "var(--color-success)" : "currentColor"} />
            {completed ? "Selesai" : "Tandai Selesai"}
          </Button>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <Badge level={topic.level} />
          <span style={{ opacity: 0.7, fontSize: '0.9rem' }}>⏱️ Estimasi: {topic.duration}</span>
        </div>
        
        <hr style={{ margin: '2rem 0', borderColor: 'var(--color-border)' }} />
        
        <div className="topic-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}