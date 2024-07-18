import { h, lazy, Suspense } from 'preact';
import { render } from 'preact';
import { Router, Route } from 'wouter';
import Header from './components/Header';
import './styles/main.scss';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => (
  <div>
    <Header />
    <Router>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Suspense>
      </main>
    </Router>
  </div>
);

render(<App />, document.body);
