import reactGuide from './content/react.md?raw';
import angularGuide from './content/angular.md?raw';
import vueGuide from './content/vue.md?raw';
import typescriptGuide from './content/typescript.md?raw';
import systemGuide from './content/system-design.md?raw';
import javascriptGuide from './content/javascript-browser.html?raw';

export const modules = [
  { id: 'javascript', label: 'JavaScript & Browser', short: 'JS', color: '#f7c948', description: 'Language depth, browser internals, networking and security.', source: javascriptGuide, format: 'html' },
  { id: 'typescript', label: 'TypeScript', short: 'TS', color: '#4da3ff', description: 'Type safety, generics, advanced types and framework patterns.', source: typescriptGuide, format: 'markdown' },
  { id: 'react', label: 'React', short: 'Re', color: '#61dafb', description: 'Rendering, hooks, architecture, performance and modern React.', source: reactGuide, format: 'markdown' },
  { id: 'angular', label: 'Angular', short: 'Ng', color: '#ff5370', description: 'Signals, RxJS, DI, change detection and enterprise Angular.', source: angularGuide, format: 'markdown' },
  { id: 'vue', label: 'Vue 3', short: 'Vu', color: '#42d392', description: 'Reactivity, Composition API, Pinia and scalable Vue systems.', source: vueGuide, format: 'markdown' },
  { id: 'system-design', label: 'System Design', short: 'SD', color: '#b994ff', description: 'Architecture, trade-offs, scale and senior-level scenarios.', source: systemGuide, format: 'markdown' },
];

const cleanTitle = (value) => value
  .replace(/[*_`#]/g, '')
  .replace(/^\d+\s*[.)-]?\s+/, '')
  .replace(/\\([.:])/g, '$1')
  .trim();

const slug = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 64);

function parseMarkdown(module) {
  const lines = module.source.split(/\r?\n/);
  const sections = [];
  let current = null;
  const primaryLevel = ['angular', 'vue'].includes(module.id) ? 1 : 2;
  for (const line of lines) {
    const match = line.match(/^(#{1,3})\s+(.+)$/);
    if (match && match[1].length === primaryLevel) {
      if (current && current.body.join('\n').trim().length > 100) sections.push(current);
      const title = cleanTitle(match[2]);
      current = { title, body: [], level: match[1].length };
    } else if (current) {
      current.body.push(line);
    }
  }
  if (current && current.body.join('\n').trim().length > 100) sections.push(current);
  return sections.map((section, index) => ({
    id: `${module.id}-${slug(section.title) || index}`,
    moduleId: module.id,
    title: section.title,
    content: section.body.join('\n').trim(),
    format: 'markdown',
    order: index,
  }));
}

function parseHtml(module) {
  const doc = new DOMParser().parseFromString(module.source, 'text/html');
  doc.querySelectorAll('script, style, nav, button, input, svg').forEach((el) => el.remove());
  const headings = [...doc.querySelectorAll('h2, h3')];
  return headings.map((heading, index) => {
    const parts = [];
    let node = heading.nextElementSibling;
    while (node && !/^H[23]$/.test(node.tagName)) {
      parts.push(node.outerHTML);
      node = node.nextElementSibling;
    }
    return {
      id: `${module.id}-${slug(heading.textContent) || index}`,
      moduleId: module.id,
      title: cleanTitle(heading.textContent),
      content: parts.join(''),
      format: 'html',
      order: index,
    };
  }).filter((section) => section.content.replace(/<[^>]+>/g, '').trim().length > 100);
}

export function buildTopics() {
  return modules.flatMap((module) => module.format === 'html' ? parseHtml(module) : parseMarkdown(module));
}

export function plainText(topic) {
  return topic.content
    .replace(/<[^>]+>/g, ' ')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/[#*_>`\[\]()-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
