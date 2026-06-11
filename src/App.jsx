import { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  Binary,
  BrainCircuit,
  CloudSun,
  Code2,
  Database,
  GraduationCap,
  Heart,
  Laptop,
  Mail,
  MapPin,
  Pi,
  Recycle,
  ServerCog,
  Sparkles,
  Sprout,
} from 'lucide-react';

const navItems = ['about', 'experience', 'projects', 'skills', 'contact'];

const focusAreas = [
  { icon: Code2, label: 'computer science', detail: 'full-stack systems, reliability, and human-centered products' },
  { icon: Pi, label: 'applied math', detail: 'algorithms, abstraction, modeling, and elegant problem solving' },
  { icon: Sprout, label: 'sustainability', detail: 'data-informed climate strategy and resilient operations' },
];

const bakingPhotos = [
  { src: '/bananabread-cookies.png', alt: 'Banana bread cookies', caption: 'choc chip banana bread cookies' },
  { src: '/smores-cookies.png', alt: 'S’mores cookies', caption: 'smores cookies filled w melted marshmallows' },
  { src: '/toasted-coconut.png', alt: 'Toasted coconut bake', caption: 'mini salted coconut choc chip cookies' },
];

const heroDoodles = [
  { kind: 'icon', icon: Sprout, className: 'left-[4%] top-[13%] text-moss', delay: '0s' },
  { kind: 'icon', icon: Recycle, className: 'left-[25%] top-[28%] text-fern', delay: '0.6s' },
  { kind: 'text', text: 'π', className: 'left-[45%] top-[13%] text-clay', delay: '1.1s' },
  { kind: 'text', text: '∑', className: 'left-[14%] top-[60%] text-moss', delay: '1.7s' },
  { kind: 'icon', icon: Laptop, className: 'left-[52%] top-[53%] text-midnight/55', delay: '0.9s' },
  { kind: 'text', text: '🍵', className: 'left-[35%] top-[72%]', delay: '1.4s' },
  { kind: 'text', text: '✿', className: 'left-[7%] top-[42%] text-clay', delay: '0.3s' },
  { kind: 'text', text: '☘', className: 'left-[57%] top-[29%] text-fern', delay: '2s' },
  { kind: 'text', text: 'λ', className: 'left-[64%] top-[16%] text-moss', delay: '2.4s' },
  { kind: 'text', text: '↻', className: 'left-[66%] top-[67%] text-fern', delay: '1.9s' },
  { kind: 'text', text: '✦', className: 'left-[75%] top-[38%] text-clay', delay: '0.8s' },
  { kind: 'icon', icon: Sprout, className: 'left-[77%] top-[78%] text-moss', delay: '2.8s' },
  { kind: 'text', text: '🏃‍♀️', className: 'left-[48%] top-[78%]', delay: '2.2s' },
];

const lowerHeroDoodles = [
  { kind: 'icon', icon: Sprout, className: 'left-[5%] top-[24%] text-moss', delay: '0.4s' },
  { kind: 'text', text: '✿', className: 'left-[35%] top-[31%] text-clay', delay: '0.8s' },
  { kind: 'text', text: 'π', className: 'left-[58%] top-[42%] text-clay', delay: '1.8s' },
  { kind: 'text', text: '✎', className: 'left-[72%] top-[23%] text-clay', delay: '2.3s' },
  { kind: 'text', text: '🎵', className: 'left-[18%] top-[48%]', delay: '2.6s' },
  { kind: 'text', text: '🎧', className: 'left-[26%] top-[22%]', delay: '1.5s' },
  { kind: 'text', text: '🍪', className: 'left-[49%] top-[66%]', delay: '0.2s' },
  { kind: 'icon', icon: Recycle, className: 'left-[66%] top-[61%] text-moss', delay: '3s' },
  { kind: 'text', text: '✧', className: 'left-[80%] top-[51%] text-clay', delay: '1s' },
  { kind: 'text', text: '∑', className: 'left-[12%] top-[74%] text-moss', delay: '2.1s' },
  { kind: 'text', text: '🍵', className: 'left-[39%] top-[78%]', delay: '1.1s' },
  { kind: 'text', text: '☘', className: 'left-[83%] top-[75%] text-fern', delay: '2.8s' },
];

const experiences = [
  {
    role: 'Software Engineering Intern, Site Reliability Engineering',
    place: 'Verizon',
    logo: '/verizon.png',
    time: 'Jun. 2025 — Aug. 2025',
    tags: ['Spring Boot', 'Redis', 'Security', 'Testing'],
    points: [
      'Shipped upgrades across six Spring Boot microservices while preserving backward compatibility during a Spring Boot 3.x migration.',
      'Implemented token-based auth, role-based access control, and Redis-backed cache/session layers that reduced API response time by 25%.',
      'Expanded domain logic and wrote 120+ unit and integration tests with JUnit 5 and Mockito.',
    ],
  },
  {
    role: 'Undergraduate Researcher',
    place: 'Hein Lab, Cornell University Department of Computational Biology',
    image: '/heinlab.png',
    time: 'Apr. 2024 — Present',
    tags: ['Python', 'SciPy', 'NumPy', 'Computational Biology'],
    points: [
      'Developing modular simulation systems for stochastic population dynamics and group-structured ecological models using Python-based computational frameworks.',
      'Designed nonlinear interaction models incorporating fission processes and group-size-dependent predation, with parameter sweeps and equilibrium analyses to identify regime shifts.',
      'Implemented matrix-based dynamical systems methods and eigenvalue analyses to quantify population stability, extinction risk, and emergent collective behaviors.',
      'Applying computational approaches to conservation problems by modeling how social structure and environmental pressures influence population persistence.',
    ],
  },
  {
    role: 'Research Assistant',
    place: 'Design & Augmented Intelligence Lab',
    image: '/dail.png',
    imagePosition: 'left',
    time: 'Dec. 2024 — Present',
    tags: ['Python', 'OpenCV', 'Pandas', 'VR Data'],
    points: [
      'Engineered pipelines over 50,000+ Meta Quest 3 navigation datapoints to study hospital wayfinding for patients with cognitive impairments.',
      'Reduced preprocessing time by 30% and analyzed behavior signals like backtracking, dwell time, and signage saliency.',
    ],
  },
  {
    role: 'Project Manager',
    place: 'Cornell Sustainability Consulting',
    image: '/tourism.png',
    time: 'Apr. 2024 — Present',
    tags: ['Data Modeling', 'Dashboards', 'Climate'],
    points: [
      'Led development of the STAMP Carbon Platform, integrating 18 datasets into emissions tracking and continuity models.',
      'Built dashboards that help stakeholders monitor sustainability KPIs and manage operational risks.',
    ],
  },
];

const projects = [
  {
    name: 'Palestinian Pedagogy Network Timeline',
    icon: BrainCircuit,
    stack: 'JavaScript, HTML/CSS',
    link: 'https://palestinepedagogynetwork.github.io/potential-lamp/timeline.html',
    description:
      'Customized an interactive timeline for the Palestinian Pedagogy Network, an open-access digital resource developed in Cornell’s The Ethics & Politics of Knowledge course to support public exploration of Palestinian sources and teaching materials.',
  },
  {
    name: 'ReliefDrop',
    icon: CloudSun,
    stack: 'AWS Lambda, API Gateway, DynamoDB, S3, React, Vite',
    link: 'https://github.com/harshinilaks/cloud-donation-platform',
    description:
      'A serverless community donation platform with controlled forms, live UI updates, S3 file uploads, and signed download links.',
  },
  {
    name: 'Abstract Algebra Group Theory Visualization Platform',
    icon: Binary,
    stack: 'React, Node.js, Express, MongoDB',
    link: 'https://github.com/harshinilaks/group-explorer',
    description:
      'An interactive abstract algebra app that generates group elements, Cayley tables, Dn polygon visualizers, and step-by-step operations.',
  },
];

const skills = [
  { title: 'Languages', items: ['Java', 'Python', 'C', 'JavaScript', 'TypeScript', 'SQL', 'OCaml', 'R'] },
  { title: 'Frameworks', items: ['React', 'Node', 'Express', 'Spring Boot', 'React Native', 'Vite'] },
  { title: 'Cloud & Data', items: ['AWS Lambda', 'S3', 'API Gateway', 'Redis', 'DynamoDB', 'MongoDB', 'PostgreSQL'] },
  { title: 'Libraries', items: ['Pandas', 'NumPy', 'SciPy', 'OpenCV', 'PyTorch', 'Matplotlib'] },
];

function Pill({ children }) {
  return <span className="rounded-full border border-midnight/10 bg-white/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-midnight/70">{children}</span>;
}

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.32em] text-moss">{eyebrow}</p>
      <h2 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">{title}</h2>
      {children && <p className="mt-4 text-lg leading-8 text-ink/70">{children}</p>}
    </div>
  );
}

function LeafCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState(Array.from({ length: 6 }, () => ({ x: -100, y: -100 })));
  const target = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const trailRef = useRef(Array.from({ length: 6 }, () => ({ x: -100, y: -100 })));

  useEffect(() => {
    const handleMouseMove = (event) => {
      target.current = { x: event.clientX, y: event.clientY };
    };

    let animationFrame;
    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.16;
      current.current.y += (target.current.y - current.current.y) * 0.16;
      trailRef.current = trailRef.current.map((orb, index) => {
        const leader = index === 0 ? current.current : trailRef.current[index - 1];
        return {
          x: orb.x + (leader.x - orb.x) * (0.2 - index * 0.018),
          y: orb.y + (leader.y - orb.y) * (0.2 - index * 0.018),
        };
      });
      setPosition({ x: current.current.x, y: current.current.y });
      setTrail(trailRef.current);
      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      {trail.map((orb, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-fern/60 blur-[1px]"
          style={{
            left: orb.x,
            top: orb.y,
            width: `${18 - index * 2}px`,
            height: `${18 - index * 2}px`,
            opacity: 0.72 - index * 0.075,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: position.x, top: position.y }}
      >
        <Heart className="size-6 fill-fern text-moss drop-shadow-sm" />
      </div>
    </div>
  );
}

function BakingSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % bakingPhotos.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="mt-5">
      <div className="relative h-52 overflow-hidden rounded-[1.5rem] shadow-soft">
        {bakingPhotos.map((photo, index) => (
          <img
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${
              index === activeIndex ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
            }`}
          />
        ))}
      </div>
      <div className="mt-3 flex justify-center gap-2">
        {bakingPhotos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            aria-label={`Show ${photo.alt}`}
            onClick={() => setActiveIndex(index)}
            className={`size-2.5 rounded-full transition ${
              index === activeIndex ? 'bg-moss' : 'bg-moss/25 hover:bg-moss/50'
            }`}
          />
        ))}
      </div>
      <p className="mt-3 text-center text-sm font-semibold text-ink/65">{bakingPhotos[activeIndex].caption}</p>
    </div>
  );
}

function HeroDoodles() {
  return (
    <div className="pointer-events-none absolute left-0 top-20 hidden h-[23rem] w-[62%] overflow-hidden lg:block">
      <div className="absolute left-[6%] top-[10%] size-56 rounded-full bg-fern/10 blur-3xl" />
      <div className="absolute left-[40%] top-[20%] size-48 rounded-full bg-clay/10 blur-3xl" />
      {heroDoodles.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={`${item.kind}-${index}`}
            className={`hero-doodle absolute rounded-full border border-midnight/10 bg-cream/65 p-3 text-2xl shadow-soft backdrop-blur-md ${item.className}`}
            style={{ animationDelay: item.delay }}
          >
            {item.kind === 'icon' ? <Icon className="size-6" /> : <span className="block leading-none">{item.text}</span>}
          </div>
        );
      })}
    </div>
  );
}

function LowerHeroDoodles() {
  return (
    <div className="pointer-events-none absolute bottom-10 left-0 hidden h-80 w-[66%] overflow-hidden lg:block">
      <div className="absolute left-[18%] top-[28%] size-48 rounded-full bg-clay/10 blur-3xl" />
      <div className="absolute left-[52%] top-[18%] size-52 rounded-full bg-fern/10 blur-3xl" />
      {lowerHeroDoodles.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={`${item.kind}-lower-${index}`}
            className={`hero-doodle absolute rounded-full border border-midnight/10 bg-cream/65 p-3 text-2xl shadow-soft backdrop-blur-md ${item.className}`}
            style={{ animationDelay: item.delay }}
          >
            {item.kind === 'icon' ? <Icon className="size-6" /> : <span className="block leading-none">{item.text}</span>}
          </div>
        );
      })}
    </div>
  );
}

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden font-sans text-ink">
      <LeafCursor />
      <div className="noise" />
      <header className="fixed left-0 right-0 top-4 z-50 mx-auto w-[min(1100px,calc(100%-2rem))] rounded-full border border-midnight/10 bg-cream/70 px-4 py-3 shadow-soft backdrop-blur-xl">
        <nav className="flex items-center justify-between gap-4">
          <a href="#top" className="font-display text-xl font-bold tracking-tight">HL</a>
          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="group relative overflow-hidden rounded-full px-4 py-2 text-sm font-semibold capitalize text-ink/70 transition duration-300 hover:-translate-y-0.5 hover:bg-white/55 hover:text-moss hover:shadow-soft"
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute inset-x-4 bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-fern transition duration-300 group-hover:scale-x-100" />
                <span className="absolute -right-2 -top-2 size-6 scale-0 rounded-full bg-fern/25 blur-sm transition duration-300 group-hover:scale-100" />
              </a>
            ))}
          </div>
          <a href="mailto:hl2389@cornell.edu" className="rounded-full bg-ink px-4 py-2 text-sm font-bold text-cream transition hover:bg-moss">
            say hi
          </a>
        </nav>
      </header>

      <section id="top" className="relative mx-auto flex min-h-screen w-[min(1180px,calc(100%-2rem))] items-center pb-16 pt-32">
        <HeroDoodles />
        <LowerHeroDoodles />
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="mb-6 flex flex-wrap gap-3">
              <Pill>CS @ Cornell</Pill>
              <Pill>Applied Math Minor</Pill>
              <Pill>Incoming @ Apple  </Pill>
              <Pill>Prev @ Verizon  </Pill>

            </div>
            <h1 className="font-display text-6xl font-semibold leading-[0.95] tracking-tight text-ink md:text-8xl">
              hi, i'm harshini lakshminarayanan!
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-ink/72">
              i'm passionate about building reliable software & data systems for people-centered impact.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-clay px-6 py-3 font-bold text-white shadow-soft transition hover:-translate-y-1 hover:bg-midnight">
                explore work <ArrowUpRight className="size-4 transition group-hover:rotate-45" />
              </a>
              <a href="https://github.com/harshinilaks" className="inline-flex items-center gap-2 rounded-full border border-midnight/15 bg-white/50 px-6 py-3 font-bold text-ink transition hover:-translate-y-1 hover:border-moss hover:text-moss">
                <Code2 className="size-4" /> github
              </a>
              <a href="https://linkedin.com/in/harshini-lakshminarayanan-a47b18293" className="inline-flex items-center gap-2 rounded-full border border-midnight/15 bg-white/50 px-6 py-3 font-bold text-ink transition hover:-translate-y-1 hover:border-moss hover:text-moss">
                <ArrowUpRight className="size-4" /> linkedin
              </a>
            </div>
          </div>

          <div className="glass relative overflow-hidden rounded-[2.5rem] p-7">
            <div className="absolute -right-20 -top-20 size-56 rounded-full bg-fern/30 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 size-52 rounded-full bg-blush/50 blur-3xl" />
            <div className="relative rounded-[2rem] border border-midnight/10 bg-cream/70 p-6">
              <div className="mb-6 flex items-center justify-between">
                <Sparkles className="size-7 text-clay" />
                <span className="rounded-full bg-midnight px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cream">portfolio.exe</span>
              </div>
              <div className="mb-6 overflow-hidden rounded-[1.65rem] border border-midnight/10 bg-white/45 p-2 shadow-soft">
                <img
                  src="/harshini-photo.png"
                  alt="Harshini Lakshminarayanan"
                  className="h-[24rem] w-full rounded-[1.25rem] object-cover object-[50%_34%]"
                />
              </div>
              <p className="mb-4 text-center text-sm font-bold uppercase tracking-[0.32em] text-moss">interests</p>
              <div className="space-y-5">
                {focusAreas.map(({ icon: Icon, label, detail }) => (
                  <div key={label} className="rounded-3xl border border-midnight/10 bg-white/45 p-5 transition hover:-translate-y-1 hover:bg-white/70">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="rounded-2xl bg-moss/12 p-3 text-moss"><Icon className="size-5" /></div>
                      <h3 className="font-display text-2xl font-semibold capitalize">{label}</h3>
                    </div>
                    <p className="leading-7 text-ink/65">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto w-[min(1080px,calc(100%-2rem))] py-24">
        <SectionHeading eyebrow="about" title="what i'm up to">
        </SectionHeading>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ['currently in', 'austin, TX - working as a site reliability engineering intern on the ai & data platforms team at apple!'],
            ['based in', 'princeton, NJ and ithaca, NY — usually somewhere with matcha, notebooks, too many tabs open, or baking something sweet!'],
            ['what i\'m reading', 'making my way through "a heartbreaking work of staggering genius" by dave eggers'],
          ].map(([title, text]) => (
            <div key={title} className="glass rounded-[2rem] p-6">
              <h3 className="mb-3 font-display text-2xl font-semibold">{title}</h3>
              <p className="leading-7 text-ink/70">{text}</p>
              {title === 'currently in' && (
                <div className="mt-5 flex h-[21.75rem] items-center justify-center">
                  <img src="/apple.jpg" alt="Apple logo" className="max-h-56 max-w-full object-contain" />
                </div>
              )}
              {title === 'based in' && <BakingSlideshow />}
              {title === 'what i\'m reading' && (
                <div className="mt-5 flex h-[17rem] items-center justify-center">
                  <img src="/book.jpg" alt="A Heartbreaking Work of Staggering Genius by Dave Eggers" className="max-h-full rounded-[1.5rem] object-contain shadow-soft" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto w-[min(1080px,calc(100%-2rem))] py-24">
        <SectionHeading eyebrow="experience" title="large-scale systems, research, & sustainability work." />
        <div className="space-y-5">
          {experiences.map((job) => (
            <article key={`${job.role}-${job.place}`} className="glass rounded-[2rem] p-6 md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-stretch">
                {job.logo && (
                  <div className="flex min-h-40 shrink-0 items-center justify-center rounded-[1.75rem] border border-midnight/10 bg-white/70 p-6 shadow-soft md:w-44">
                    <img src={job.logo} alt={`${job.place} logo`} className="max-h-24 max-w-32 object-contain" />
                  </div>
                )}
                {job.image && job.imagePosition === 'left' && (
                  <div className="min-h-56 shrink-0 overflow-hidden rounded-[1.75rem] border border-midnight/10 bg-white/70 p-2 shadow-soft md:w-56">
                    <img src={job.image} alt={`${job.place} visual`} className="h-full w-full rounded-[1.35rem] object-cover" />
                  </div>
                )}
                <div className="flex flex-1 flex-col">
                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                    <div>
                      <h3 className="font-display text-3xl font-semibold">{job.role}</h3>
                      <p className="mt-1 flex flex-wrap items-center gap-2 font-semibold text-moss"><MapPin className="size-4" /> {job.place}</p>
                    </div>
                    <p className="rounded-full bg-white/55 px-4 py-2 text-sm font-bold text-ink/65">{job.time}</p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.tags.map((tag) => <Pill key={tag}>{tag}</Pill>)}
                  </div>
                  <ul className="mt-6 grid gap-3 text-ink/72 md:grid-cols-2">
                    {job.points.map((point) => <li key={point} className="leading-7">{point}</li>)}
                  </ul>
                </div>
                {job.image && job.imagePosition !== 'left' && (
                  <div className="min-h-56 shrink-0 overflow-hidden rounded-[1.75rem] border border-midnight/10 bg-white/70 p-2 shadow-soft md:w-56">
                    <img src={job.image} alt={`${job.place} visual`} className="h-full w-full rounded-[1.35rem] object-cover" />
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto w-[min(1080px,calc(100%-2rem))] py-24">
        <SectionHeading eyebrow="projects" title="a few selected projects!" />
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map(({ name, icon: Icon, stack, description, link }) => {
            const Card = link ? 'a' : 'article';

            return (
              <Card
                key={name}
                href={link}
                target={link ? '_blank' : undefined}
                rel={link ? 'noreferrer' : undefined}
                className="glass group flex min-h-[330px] flex-col rounded-[2rem] p-6 text-left no-underline transition hover:-translate-y-2"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="rounded-3xl bg-midnight p-4 text-cream"><Icon className="size-6" /></div>
                  <ArrowUpRight className="size-5 text-ink/35 transition group-hover:rotate-45 group-hover:text-clay" />
                </div>
                <h3 className="font-display text-3xl font-semibold">{name}</h3>
                <p className="mt-4 flex-1 leading-7 text-ink/70">{description}</p>
                <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-moss">{stack}</p>
              </Card>
            );
          })}
        </div>
      </section>

      <section id="skills" className="mx-auto w-[min(1080px,calc(100%-2rem))] py-24">
        <SectionHeading eyebrow="skills" title="you can find me working with" />
        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((group) => (
            <div key={group.title} className="glass rounded-[2rem] p-6">
              <div className="mb-5 flex items-center gap-3">
                {group.title === 'Cloud & Data' ? <Database className="size-5 text-clay" /> : <ServerCog className="size-5 text-clay" />}
                <h3 className="font-display text-2xl font-semibold">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => <span key={item} className="rounded-full bg-white/55 px-4 py-2 text-sm font-semibold text-ink/70">{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto w-[min(1080px,calc(100%-2rem))] py-24">
        <div className="glass overflow-hidden rounded-[2.5rem] p-8 text-center md:p-14">
          <GraduationCap className="mx-auto mb-5 size-10 text-moss" />
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold md:text-6xl">let's chat!</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-ink/70">
            always open to talk about large-scale software systems, climate, or the best homebaked cookie recipes!
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="mailto:hl2389@cornell.edu" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-bold text-cream transition hover:bg-moss"><Mail className="size-4" /> email me</a>
            <a href="https://linkedin.com/in/harshini-lakshminarayanan-a47b18293" className="inline-flex items-center gap-2 rounded-full border border-midnight/15 bg-white/50 px-6 py-3 font-bold text-ink transition hover:border-moss hover:text-moss"><ArrowUpRight className="size-4" /> connect</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
