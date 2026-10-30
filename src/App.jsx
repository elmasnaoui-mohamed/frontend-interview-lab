import { useEffect, useMemo, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  ArrowLeft, ArrowRight, BarChart3, Bookmark, BookOpen, Brain, Check,
  CheckCircle2, ChevronDown, Circle, Clock3, Command, Flame, Focus,
  Home, Layers3, Menu, NotebookPen, Play, RotateCcw, Search,
  Settings2, Sparkles, Star, Target, Trophy, X,
} from 'lucide-react';
import { buildTopics, modules, plainText } from './content.js';

const STORAGE_KEY = 'frontend-interview-lab-v1';
const today = () => new Date().toISOString().slice(0, 10);

const initialData = {
  completed: {}, bookmarks: {}, confidence: {}, notes: {}, reviews: {}, activeDates: [], dailyGoal: 8,
};

function useStudyData() {
  const [data, setData] = useState(() => {
    try { return { ...initialData, ...JSON.parse(localStorage.getItem(STORAGE_KEY)) }; }
    catch { return initialData; }
  });
  useEffect(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(data)), [data]);
  const update = (fn) => setData((current) => {
    const next = fn(current);
    if (!next.activeDates.includes(today())) next.activeDates = [...next.activeDates, today()];
    return { ...next };
  });
  return [data, update];
}

function RichContent({ topic }) {
  if (topic.format === 'html') return <div className="prose" dangerouslySetInnerHTML={{ __html: topic.content }} />;
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} className="prose" components={{
      a: (props) => <a {...props} target="_blank" rel="noreferrer" />,
      code: ({ className, children, ...props }) => className
        ? <code className={className} {...props}>{children}</code>
        : <code {...props}>{children}</code>,
    }}>
      {topic.content}
    </ReactMarkdown>
  );
}

function ModuleBadge({ module, compact = false }) {
  return (
    <span className={`module-badge ${compact ? 'compact' : ''}`} style={{ '--module': module.color }}>
      <span className="module-mark">{module.short}</span>{!compact && module.label}
    </span>
  );
}

function ProgressRing({ value, size = 64 }) {
  const radius = 25;
  const dash = 2 * Math.PI * radius;
  return (
    <div className="progress-ring" style={{ width: size, height: size }}>
      <svg viewBox="0 0 60 60"><circle className="ring-bg" cx="30" cy="30" r={radius} /><circle className="ring-value" cx="30" cy="30" r={radius} strokeDasharray={dash} strokeDashoffset={dash * (1 - value / 100)} /></svg>
      <strong>{Math.round(value)}%</strong>
    </div>
  );
}

function Sidebar({ view, setView, selectedModule, setSelectedModule, topics, data, open, close }) {
  return (
    <aside className={`sidebar ${open ? 'open' : ''}`}>
      <div className="brand"><div className="brand-icon"><Brain size={22} /></div><div><strong>Interview Lab</strong><span>Frontend mastery</span></div><button className="icon-button mobile-only" onClick={close}><X /></button></div>
      <nav className="main-nav">
        {[['dashboard', Home, 'Overview'], ['library', BookOpen, 'Question library'], ['focus', Focus, 'Focus session'], ['bookmarks', Bookmark, 'Saved topics']].map(([id, Icon, label]) => (
          <button key={id} className={view === id ? 'active' : ''} onClick={() => { setView(id); close(); }}><Icon size={18} /><span>{label}</span>{id === 'bookmarks' && <em>{Object.keys(data.bookmarks).length}</em>}</button>
        ))}
      </nav>
      <div className="sidebar-label">Curriculum</div>
      <div className="module-nav">
        {modules.map((module) => {
          const list = topics.filter((topic) => topic.moduleId === module.id);
          const done = list.filter((topic) => data.completed[topic.id]).length;
          return (
            <button key={module.id} className={selectedModule === module.id && view === 'library' ? 'active' : ''} onClick={() => { setSelectedModule(module.id); setView('library'); close(); }}>
              <span className="module-dot" style={{ '--module': module.color }}>{module.short}</span>
              <span className="module-nav-copy"><strong>{module.label}</strong><small>{done}/{list.length} complete</small></span>
              <span className="tiny-progress"><i style={{ width: `${list.length ? done / list.length * 100 : 0}%`, background: module.color }} /></span>
            </button>
          );
        })}
      </div>
      <div className="sidebar-credit"><span>Made by</span><strong>Rinkute</strong></div>
    </aside>
  );
}

function Dashboard({ topics, data, setView, setSelectedModule, startFocus }) {
  const completed = topics.filter((topic) => data.completed[topic.id]).length;
  const progress = topics.length ? completed / topics.length * 100 : 0;
  const reviewedToday = Object.values(data.reviews).filter((review) => review.last === today()).length;
  const due = topics.filter((topic) => !data.reviews[topic.id] || data.reviews[topic.id].next <= Date.now());
  return (
    <div className="page dashboard-page">
      <section className="hero-card">
        <div className="hero-copy"><span className="eyebrow"><Sparkles size={15} /> Personalized senior frontend prep</span><h1>Turn deep knowledge into<br /><em>clear interview answers.</em></h1><p>Study the concepts that matter, practise explaining trade-offs, and track your confidence across the full frontend stack.</p><div className="hero-actions"><button className="primary" onClick={() => startFocus(due)}><Play size={17} fill="currentColor" /> Start today’s session</button><button className="secondary" onClick={() => setView('library')}><BookOpen size={17} /> Browse curriculum</button></div></div>
        <div className="hero-visual"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="hero-score"><ProgressRing value={progress} size={118} /><span>Overall mastery</span></div><div className="floating-pill pill-one"><CheckCircle2 /> {completed} learned</div><div className="floating-pill pill-two"><Target /> {due.length} due</div></div>
      </section>
      <section className="stats-grid">
        <div className="stat-card"><div className="stat-icon purple"><Layers3 /></div><div><span>Total topics</span><strong>{topics.length}</strong><small>across 6 tracks</small></div></div>
        <div className="stat-card"><div className="stat-icon green"><CheckCircle2 /></div><div><span>Completed</span><strong>{completed}</strong><small>{Math.round(progress)}% of curriculum</small></div></div>
        <div className="stat-card"><div className="stat-icon orange"><Flame /></div><div><span>Study days</span><strong>{data.activeDates.length}</strong><small>recorded locally</small></div></div>
        <div className="stat-card"><div className="stat-icon blue"><Brain /></div><div><span>Reviewed today</span><strong>{reviewedToday}</strong><small>goal: {data.dailyGoal}</small></div></div>
      </section>
      <div className="section-heading"><div><span className="eyebrow">Your curriculum</span><h2>Master one track at a time</h2></div><button className="text-button" onClick={() => setView('library')}>View all topics <ArrowRight size={16} /></button></div>
      <section className="track-grid">
        {modules.map((module) => {
          const list = topics.filter((topic) => topic.moduleId === module.id);
          const done = list.filter((topic) => data.completed[topic.id]).length;
          const percent = list.length ? done / list.length * 100 : 0;
          return <button className="track-card" key={module.id} style={{ '--module': module.color }} onClick={() => { setSelectedModule(module.id); setView('library'); }}><div className="track-top"><span className="track-mark">{module.short}</span><ProgressRing value={percent} size={54} /></div><h3>{module.label}</h3><p>{module.description}</p><div className="track-meta"><span>{list.length} topics</span><span>{done} completed</span></div><div className="track-progress"><i style={{ width: `${percent}%` }} /></div></button>;
        })}
      </section>
    </div>
  );
}

function Library({ topics, data, update, selectedModule, setSelectedModule, search, setSearch, openTopic }) {
  const [filter, setFilter] = useState('all');
  const module = modules.find((item) => item.id === selectedModule) || modules[0];
  const list = topics.filter((topic) => topic.moduleId === module.id).filter((topic) => {
    if (filter === 'completed' && !data.completed[topic.id]) return false;
    if (filter === 'saved' && !data.bookmarks[topic.id]) return false;
    const haystack = `${topic.title} ${plainText(topic)}`.toLowerCase();
    return haystack.includes(search.toLowerCase());
  });
  const total = topics.filter((topic) => topic.moduleId === module.id);
  const done = total.filter((topic) => data.completed[topic.id]).length;
  return (
    <div className="page library-page">
      <div className="library-hero" style={{ '--module': module.color }}><div><ModuleBadge module={module} /><h1>{module.label}</h1><p>{module.description}</p></div><div className="library-progress"><ProgressRing value={total.length ? done / total.length * 100 : 0} size={76} /><div><strong>{done} of {total.length}</strong><span>topics completed</span></div></div></div>
      <div className="module-tabs">{modules.map((item) => <button key={item.id} className={selectedModule === item.id ? 'active' : ''} style={{ '--module': item.color }} onClick={() => setSelectedModule(item.id)}>{item.short}<span>{item.label}</span></button>)}</div>
      <div className="toolbar"><label className="search-box"><Search size={18} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search questions, concepts and examples…" /><kbd>/</kbd></label><div className="filter-group">{['all', 'completed', 'saved'].map((id) => <button key={id} className={filter === id ? 'active' : ''} onClick={() => setFilter(id)}>{id}</button>)}</div></div>
      <div className="topic-list">
        {list.map((topic, index) => <article className={`topic-row ${data.completed[topic.id] ? 'complete' : ''}`} key={topic.id}><button className="completion" onClick={() => update((current) => ({ ...current, completed: { ...current.completed, [topic.id]: !current.completed[topic.id] } }))}>{data.completed[topic.id] ? <CheckCircle2 /> : <Circle />}</button><button className="topic-copy" onClick={() => openTopic(topic)}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{topic.title}</h3><p>{plainText(topic).slice(0, 165)}…</p></div></button><div className="topic-actions"><span className={`confidence confidence-${data.confidence[topic.id] || 0}`}>{['New', 'Learning', 'Okay', 'Strong'][data.confidence[topic.id] || 0]}</span><button className={data.bookmarks[topic.id] ? 'saved' : ''} onClick={() => update((current) => ({ ...current, bookmarks: { ...current.bookmarks, [topic.id]: !current.bookmarks[topic.id] } }))}><Bookmark size={18} fill={data.bookmarks[topic.id] ? 'currentColor' : 'none'} /></button><button onClick={() => openTopic(topic)}><ArrowRight size={18} /></button></div></article>)}
        {!list.length && <div className="empty-state"><Search /><h3>No matching topics</h3><p>Try another search or filter.</p></div>}
      </div>
    </div>
  );
}

function TopicReader({ topic, data, update, close, next, previous }) {
  const module = modules.find((item) => item.id === topic.moduleId);
  return (
    <div className="reader-shell"><div className="reader-top"><button className="secondary small" onClick={close}><ArrowLeft /> Back to library</button><ModuleBadge module={module} /><div className="reader-actions"><button className={data.bookmarks[topic.id] ? 'saved' : ''} onClick={() => update((current) => ({ ...current, bookmarks: { ...current.bookmarks, [topic.id]: !current.bookmarks[topic.id] } }))}><Bookmark fill={data.bookmarks[topic.id] ? 'currentColor' : 'none'} /></button><button className={data.completed[topic.id] ? 'done' : ''} onClick={() => update((current) => ({ ...current, completed: { ...current.completed, [topic.id]: !current.completed[topic.id] } }))}>{data.completed[topic.id] ? <CheckCircle2 /> : <Circle />}</button></div></div>
      <article className="reader"><header><span className="eyebrow">Interview topic</span><h1>{topic.title}</h1><div className="confidence-picker"><span>How confident are you?</span>{[1, 2, 3].map((level) => <button key={level} className={(data.confidence[topic.id] || 0) === level ? 'active' : ''} onClick={() => update((current) => ({ ...current, confidence: { ...current.confidence, [topic.id]: level } }))}>{['Learning', 'Okay', 'Strong'][level - 1]}</button>)}</div></header><RichContent topic={topic} /><section className="notes-panel"><div><NotebookPen /><h3>Your interview notes</h3></div><textarea value={data.notes[topic.id] || ''} onChange={(event) => update((current) => ({ ...current, notes: { ...current.notes, [topic.id]: event.target.value } }))} placeholder="Write your own explanation, real project example, or a follow-up question…" /></section><div className="reader-footer"><button className="secondary" disabled={!previous} onClick={() => previous && previous()}><ArrowLeft /> Previous</button><button className="primary" onClick={() => { update((current) => ({ ...current, completed: { ...current.completed, [topic.id]: true } })); if (next) next(); }}><Check /> Mark complete {next && '& continue'} </button></div></article>
    </div>
  );
}

function FocusSession({ queue, data, update, onExit }) {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const topic = queue[index];
  if (!topic) return <div className="page empty-state"><Trophy /><h2>You’re caught up</h2><p>No topics are due right now. Browse the library and choose a new one.</p><button className="primary" onClick={onExit}>Back to overview</button></div>;
  const module = modules.find((item) => item.id === topic.moduleId);
  const rate = (quality) => {
    const previous = data.reviews[topic.id] || { interval: 0 };
    const interval = quality === 1 ? 0 : quality === 2 ? Math.max(1, previous.interval || 1) : Math.max(3, (previous.interval || 1) * 2);
    const next = Date.now() + (quality === 1 ? 10 * 60 * 1000 : interval * 24 * 60 * 60 * 1000);
    update((current) => ({ ...current, completed: { ...current.completed, [topic.id]: quality >= 2 }, confidence: { ...current.confidence, [topic.id]: quality }, reviews: { ...current.reviews, [topic.id]: { interval, next, last: today() } } }));
    if (index < queue.length - 1) { setIndex(index + 1); setRevealed(false); } else onExit();
  };
  return (
    <div className="focus-page"><div className="focus-header"><button className="icon-button" onClick={onExit}><X /></button><div><span>Focus session</span><strong>{index + 1} / {queue.length}</strong></div><div className="session-progress"><i style={{ width: `${(index + 1) / queue.length * 100}%` }} /></div></div><main className={`flashcard ${revealed ? 'revealed' : ''}`}><ModuleBadge module={module} /><span className="eyebrow">Explain this out loud</span><h1>{topic.title}</h1>{!revealed ? <><p className="focus-prompt">Structure your answer: definition → why it matters → example → trade-off.</p><button className="primary reveal-button" onClick={() => setRevealed(true)}><Brain /> Reveal study answer</button></> : <><div className="focus-answer"><RichContent topic={topic} /></div><div className="rating-area"><span>How well did you answer?</span><div><button className="again" onClick={() => rate(1)}><RotateCcw /> Again<small>10 min</small></button><button className="hard" onClick={() => rate(2)}><Clock3 /> Learning<small>1 day</small></button><button className="good" onClick={() => rate(3)}><Star /> Strong<small>3+ days</small></button></div></div></>}</main></div>
  );
}

function BookmarksView({ topics, data, openTopic }) {
  const saved = topics.filter((topic) => data.bookmarks[topic.id]);
  return <div className="page"><div className="page-title"><span className="eyebrow">Saved for later</span><h1>Bookmarked topics</h1><p>Keep your hardest or most useful concepts close.</p></div><div className="bookmark-grid">{saved.map((topic) => { const module = modules.find((item) => item.id === topic.moduleId); return <button key={topic.id} onClick={() => openTopic(topic)}><ModuleBadge module={module} compact /><h3>{topic.title}</h3><p>{plainText(topic).slice(0, 145)}…</p><span>Open topic <ArrowRight /></span></button>; })}</div>{!saved.length && <div className="empty-state"><Bookmark /><h3>No saved topics yet</h3><p>Use the bookmark icon in the library to build your review list.</p></div>}</div>;
}

export default function App() {
  const topics = useMemo(() => buildTopics(), []);
  const [data, update] = useStudyData();
  const [view, setView] = useState('dashboard');
  const [selectedModule, setSelectedModule] = useState('javascript');
  const [search, setSearch] = useState('');
  const [readerTopic, setReaderTopic] = useState(null);
  const [focusQueue, setFocusQueue] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const searchRef = useRef(null);
  useEffect(() => {
    const handler = (event) => {
      if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) { event.preventDefault(); setView('library'); setTimeout(() => document.querySelector('.search-box input')?.focus(), 50); }
    };
    window.addEventListener('keydown', handler); return () => window.removeEventListener('keydown', handler);
  }, []);
  const moduleTopics = readerTopic ? topics.filter((topic) => topic.moduleId === readerTopic.moduleId) : [];
  const readerIndex = readerTopic ? moduleTopics.findIndex((topic) => topic.id === readerTopic.id) : -1;
  const startFocus = (source = topics) => { setFocusQueue(source.length ? source.slice(0, Math.min(12, source.length)) : topics.slice(0, 12)); setReaderTopic(null); };
  if (focusQueue) return <FocusSession queue={focusQueue} data={data} update={update} onExit={() => { setFocusQueue(null); setView('dashboard'); }} />;
  if (readerTopic) return <TopicReader topic={readerTopic} data={data} update={update} close={() => setReaderTopic(null)} previous={readerIndex > 0 ? () => setReaderTopic(moduleTopics[readerIndex - 1]) : null} next={readerIndex < moduleTopics.length - 1 ? () => setReaderTopic(moduleTopics[readerIndex + 1]) : null} />;
  return (
    <div className="app-shell">
      <Sidebar view={view} setView={setView} selectedModule={selectedModule} setSelectedModule={setSelectedModule} topics={topics} data={data} open={sidebarOpen} close={() => setSidebarOpen(false)} />
      {sidebarOpen && <button className="sidebar-backdrop" onClick={() => setSidebarOpen(false)} />}
      <div className="main-shell"><header className="topbar"><button className="icon-button mobile-only" onClick={() => setSidebarOpen(true)}><Menu /></button><div className="topbar-title"><span>{view === 'dashboard' ? 'Good to see you' : 'Interview workspace'}</span><strong>{view === 'dashboard' ? 'Ready to sharpen your answers?' : modules.find((item) => item.id === selectedModule)?.label}</strong></div><div className="topbar-actions"><button className="quick-search" onClick={() => { setView('library'); setTimeout(() => document.querySelector('.search-box input')?.focus(), 50); }}><Search /><span>Quick search</span><kbd>/</kbd></button></div></header>
        <main ref={searchRef}>{view === 'dashboard' && <Dashboard topics={topics} data={data} setView={setView} setSelectedModule={setSelectedModule} startFocus={startFocus} />}{view === 'library' && <Library topics={topics} data={data} update={update} selectedModule={selectedModule} setSelectedModule={setSelectedModule} search={search} setSearch={setSearch} openTopic={setReaderTopic} />}{view === 'focus' && <div className="page focus-launch"><div className="launch-visual"><Brain /></div><span className="eyebrow">Active recall</span><h1>Practise answers, not recognition.</h1><p>Try to explain each topic before revealing the guide. Then rate yourself to schedule the next review.</p><button className="primary" onClick={() => startFocus(topics.filter((topic) => !data.reviews[topic.id] || data.reviews[topic.id].next <= Date.now()))}><Play fill="currentColor" /> Begin focused review</button></div>}{view === 'bookmarks' && <BookmarksView topics={topics} data={data} openTopic={setReaderTopic} />}</main>
      </div>
    </div>
  );
}
