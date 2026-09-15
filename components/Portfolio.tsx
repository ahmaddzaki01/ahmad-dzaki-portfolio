 "use client";

import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import {
  ArrowUpRight, Award, BriefcaseBusiness, CheckCircle2, ChevronRight, CircuitBoard,
  Code2, Cpu, Download, GraduationCap, Mail, MapPin, Menu, Network,
  Radio, Send, ShieldCheck, Sparkles, Users, Wrench, X
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

function BrandIcon({ brand, size = 18 }: { brand: "linkedin" | "instagram" | "gmail"; size?: number }) {
  if (brand === "linkedin") return <svg className="brand-icon linkedin-icon" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.57V9H3.56v11.45Z"/></svg>;
  if (brand === "instagram") return <svg className="brand-icon instagram-icon" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="ig-gradient" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#feda75"/><stop offset=".35" stopColor="#fa7e1e"/><stop offset=".65" stopColor="#d62976"/><stop offset="1" stopColor="#4f5bd5"/></linearGradient></defs><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="url(#ig-gradient)" strokeWidth="2"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="url(#ig-gradient)" strokeWidth="2"/><circle cx="17.4" cy="6.7" r="1.1" fill="#d62976"/></svg>;
  return <svg className="brand-icon gmail-icon" width={size + 2} height={size} viewBox="0 0 28 20" aria-hidden="true"><path fill="#EA4335" d="M2 17.8V3.1c0-.5.3-.9.8-1.1L14 9.8l11.2-7.8c.5-.2.8.1.8.6v15.2c0 .8-.6 1.4-1.4 1.4h-2.8V7.2L14 13.5 6.2 7.2v10.6H3.4c-.8 0-1.4-.6-1.4-1.4Z"/><path fill="#C5221F" d="M2 3.1c0-.7.8-1.1 1.4-.7L14 9.8 24.6 2.4c.6-.4 1.4 0 1.4.7v2.1L14 13.5 2 5.2V3.1Z"/></svg>;
}

type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  images?: string[];
};

const projects: Project[] = [
  { title:"IoT-Based GPS Vehicle Tracking System", category:"IoT & Web", description:"End-to-end hardware and web monitoring solution for real-time vehicle location tracking, integrating GPS, ESP32, sensors, connectivity, data acquisition, and a backend dashboard.", tags:["ESP32","GPS","IoT","Web Monitoring"], icon:MapPin, images:["/projects/gpsweb.png", "/projects/gpshardware.png"] },
  { title:"RFID & ESP32-Based Attendance System", category:"IoT & Embedded", description:"Hardware-integrated attendance device using an RC522 RFID module and ESP32 with real-time Telegram notifications, including on-device testing and field validation.", tags:["ESP32","RC522","RFID","Telegram"], icon:ShieldCheck, images:["/projects/AttendanceSystem.png"] },
  { title:"Microstrip Antenna Design at 2.6 GHz", category:"RF & Telecom", description:"RF microstrip antenna designed and simulated at 2.6 GHz using CST Studio Suite.", tags:["CST Studio","RF","Antenna","2.6 GHz"], icon:Radio, images:["/projects/antenna.png"] },
  { title:"ESP32-Based Automatic Gate", category:"Embedded Systems", description:"Automated boom-gate prototype using ESP32, a servo motor, ultrasonic sensor, and PIR sensor for object and vehicle detection.", tags:["ESP32","Servo","Ultrasonic","PIR"], icon:Cpu, images:["/projects/gate.png"] },
  { title:"Power Supply Circuit", category:"Electronics", description:"Designed a power supply circuit producing a fixed 5V output and variable 0–15V output by converting AC input into DC output.", tags:["AC-DC","5V","0–15V","Circuit Design"], icon:CircuitBoard, images:["/projects/powersupply.png"] },
  { title:"ADC Circuit with IC ADC0804", category:"Electronics", description:"Built an analog-to-digital converter circuit displaying an 8-bit binary value up to 255 across eight LEDs.", tags:["ADC0804","ADC","Digital Logic","Measurement"], icon:Code2, images:["/projects/adccircuit.png"] },
  { title:"Line Follower Robot", category:"Embedded Systems", description:"Autonomous line-following robot using an Op-Amp-based circuit and LDR sensors for track-following control logic.", tags:["Op-Amp","LDR","Robot","Control"], icon:Cpu, images:["/projects/linefollower.png"] },
  { title:"Website-Based Ballroom Booking System", category:"Web Development", description:"Web application for Menara Dang Merdu where users view schedules and track requests while admins manage bookings and avoid scheduling conflicts.", tags:["Web App","Booking","Dashboard"], icon:BriefcaseBusiness, images:["/projects/ballromwebbrks.png"] },
  { title:"Website-Based Shareholder Management System", category:"Web Development", description:"Web application for centralized shareholder data management, search, display, recording, and reporting.", tags:["Web App","Data Management","Search","Reporting"], icon:Users, images:["/projects/sahamwebbrks.png"] },
  { title:"Website-Based Unsecured Installment Loan System", category:"Web Development", description:"Web application for managing unsecured loan applications and records, including borrower data, applications, and installment information.", tags:["Web App","Data","Loan Records","Dashboard"], icon:Network, images:["/projects/angsuranwebbrks.png"] },
];

const skills = [
  ["Electronics & EMC/RF","Analog & digital circuits, EMC fundamentals, RF and antenna design/simulation, instrumentation and measurement.",CircuitBoard],
  ["Embedded Systems & IoT","ESP32, Arduino, sensor integration, RFID systems, GPS tracking, data acquisition, and hardware-software integration.",Cpu],
  ["Networking & IT","LAN troubleshooting and maintenance, network infrastructure monitoring, Cisco Packet Tracer, and CCNA fundamentals.",Network],
  ["Software Development","Front-end and back-end web application development with practical experience building internal business systems.",Code2],
  ["Programming","C/C++ for embedded systems and basic Python, supported by practical hardware and software projects.",Code2],
  ["Technical Troubleshooting","Hardware/software troubleshooting, root-cause analysis, documentation, data accuracy, and systematic problem solving.",Wrench],
] as const;

const tools = ["MATLAB","EasyEDA","CST Studio Suite","Tinkercad","Arduino IDE","VS Code","Cisco Packet Tracer","Google Apps Script","Canva","Microsoft Office"];
const categories = ["All","IoT & Web","IoT & Embedded","RF & Telecom","Embedded Systems","Electronics","Web Development"];

export default function Portfolio() {
  const [menuOpen,setMenuOpen] = useState(false);
  const [filter,setFilter] = useState("All");
  const [selected,setSelected] = useState<Project|null>(null);
  const photoWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = photoWrapRef.current;
    if (!el) return;

    const finePointer = window.matchMedia("(pointer: fine)");
    if (!finePointer.matches) return;

    let raf = 0;

    const reset = () => {
      el.style.setProperty("--photo-rx", "0deg");
      el.style.setProperty("--photo-ry", "0deg");
      el.style.setProperty("--photo-glare-x", "50%");
      el.style.setProperty("--photo-glare-y", "50%");
      el.classList.remove("is-3d-active");
    };

    const move = (event: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const proximity = 150;

        const px = event.clientX;
        const py = event.clientY;
        const insideX = px >= rect.left - proximity && px <= rect.right + proximity;
        const insideY = py >= rect.top - proximity && py <= rect.bottom + proximity;

        if (!insideX || !insideY) {
          reset();
          return;
        }

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = (px - centerX) / (rect.width / 2 + proximity);
        const distanceY = (py - centerY) / (rect.height / 2 + proximity);

        const rx = Math.max(-9, Math.min(9, -distanceY * 9));
        const ry = Math.max(-11, Math.min(11, distanceX * 11));
        const glareX = Math.max(0, Math.min(100, 50 + distanceX * 45));
        const glareY = Math.max(0, Math.min(100, 50 + distanceY * 45));

        el.style.setProperty("--photo-rx", `${rx}deg`);
        el.style.setProperty("--photo-ry", `${ry}deg`);
        el.style.setProperty("--photo-glare-x", `${glareX}%`);
        el.style.setProperty("--photo-glare-y", `${glareY}%`);
        el.classList.add("is-3d-active");
      });
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseleave", reset);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", reset);
    };
  }, []);

  const filtered = useMemo(() => filter==="All" ? projects : projects.filter(p=>p.category===filter), [filter]);
  const SelectedIcon = selected?.icon ?? BriefcaseBusiness;

  function handleSubmit(e:FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name")||"");
    const email = String(data.get("email")||"");
    const message = String(data.get("message")||"");
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:ahmaddzaaki.01@gmail.com?subject=${subject}&body=${body}`;
  }

  return <main>
    <header className="nav-wrap"><nav className="nav container">
      <a className="brand" href="#home"><span className="brand-mark">AD</span><span>AHMAD DZAKI</span></a>
      <button className="menu-btn" onClick={()=>setMenuOpen(v=>!v)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen?<X size={22}/>:<Menu size={22}/>}</button>
      <div className={`nav-links ${menuOpen?"open":""}`}>
        {["home","about","education","skills","experience","projects","leadership","contact"].map(item=><a key={item} href={`#${item}`} onClick={()=>setMenuOpen(false)}>{item}</a>)}
        <a className="nav-cv" href="/Ahmad-Dzaki-CV.pdf" download><Download size={16}/> Download CV</a>
      </div>
    </nav></header>

    <section id="home" className="hero"><div className="hero-grid"/>
      <div className="container hero-layout">
        <div className="hero-content">
          <div className="status"><span/> Open to opportunities</div>
          <p className="eyebrow">ELECTRONICS ENGINEERING · TELECOMMUNICATIONS</p>
          <h1>AHMAD <span>DZAKI</span></h1>
          <p className="hero-title">Electronics Engineering · Telecommunications</p>
          <p className="hero-copy">Building practical solutions across <strong>IoT, Embedded Systems, RF/EMC & Networking.</strong></p>
          <p className="hero-sub">Fresh graduate (D4) from Politeknik Caltex Riau with hands-on experience in engineering internships, technical troubleshooting, hardware-software integration, web systems, and connected devices.</p>
          <div className="hero-actions"><a className="btn primary" href="#projects">Explore Projects <ArrowUpRight size={18}/></a><a className="btn secondary" href="#contact">Let&apos;s Connect <Mail size={18}/></a></div>
          <div className="socials"><a href="mailto:ahmaddzaaki.01@gmail.com"><BrandIcon brand="gmail"/> ahmaddzaaki.01@gmail.com</a><span className="dot">•</span><a href="https://www.linkedin.com/in/ahmad-dzaki/" target="_blank" rel="noreferrer"><BrandIcon brand="linkedin"/> LinkedIn</a><span className="dot">•</span><a href="tel:+6285376861935"><span className="phone-icon" aria-hidden="true">☎</span> +62 853-7686-1935</a><span className="dot">•</span><a href="https://www.instagram.com/ahmaddzaaki/" target="_blank" rel="noreferrer"><BrandIcon brand="instagram"/> @ahmaddzaaki</a></div>
        </div>
        <div ref={photoWrapRef} className="hero-photo-wrap" aria-label="Interactive 3D portrait">
          <div className="hero-photo-glow"/>
          <div className="hero-photo-depth"/>
          <img className="hero-photo" src="/profile-photo.png" alt="Professional portrait"/>
          <div className="hero-photo-glare"/>
        </div>
      </div>
    </section>

    <section id="about" className="section section-white"><div className="container two-col about-layout">
      <div><p className="section-kicker">01 / ABOUT</p><h2>Engineering mindset.<br/><span>Practical execution.</span></h2></div>
      <div className="about-copy">
        <p>Fresh graduate (D4) in Electronics Engineering, majoring in Telecommunications, from Politeknik Caltex Riau.</p>
        <p>My experience combines embedded systems, IoT, RF/antenna design, computer networking, web application development, instrumentation, and technical troubleshooting through engineering internships and multiple independent projects.</p>
        <p>I am interested in opportunities across electronics, embedded systems/IoT, RF/EMC, and technical field support, where I can contribute through systematic problem solving and reliable technical execution.</p>
        </div>
      </div>
    </section>

    <section id="education" className="section education-section section-blue"><div className="container">
      <div className="section-head"><div><p className="section-kicker">02 / EDUCATION</p><h2>Academic <span>foundation</span></h2></div><p>A focused applied-engineering education in electronics and telecommunications, supported by practical coursework.</p></div>
      <div className="education-card">
        <div className="edu-icon"><GraduationCap size={34}/></div>
        <div className="education-main">
          <div className="edu-topline"><p className="edu-date">AUG 2022 — AUG 2026</p><span className="edu-location"><MapPin size={14}/> Pekanbaru, Riau, Indonesia</span></div>
          <h2>Politeknik Caltex Riau</h2>
          <h3>Applied Bachelor&apos;s Degree (D4), Electronics Engineering (Majoring Telecommunications)</h3>
          <div className="course-tags">{["Electronic Circuit Fundamentals","Digital & Analog Systems","Embedded Systems","Internet of Things","Industrial Automation","Instrumentation","Electromagnetic Compatibility","Wireless Communication","Fiber Optic Communication","Computer Networking"].map(c=><span key={c}>{c}</span>)}</div>
          <div className="scholarship"><Award size={18}/><div><strong>Riau Provincial Government Merit Scholarship</strong><span>2023–2026</span></div></div>
        </div>
      </div>
    </div></section>

    <section id="skills" className="section section-white"><div className="container">
      <div className="section-head"><div><p className="section-kicker">03 / SKILLS</p><h2>Technical <span>capabilities</span></h2></div><p>A cross-disciplinary technical foundation connecting electronics, communication, software, networking, and real-world troubleshooting.</p></div>
      <div className="skill-grid">{skills.map(([title,desc,Icon],i)=><article className="skill-card" key={title}><div className="skill-num">0{i+1}</div><Icon size={23}/><h3>{title}</h3><p>{desc}</p></article>)}</div>
      <div className="tools-panel"><div><p className="mini-label">TOOLS & SOFTWARE</p><h3>Technical toolkit</h3></div><div className="tool-list">{tools.map(t=><span key={t}>{t}</span>)}</div></div>
    </div></section>

    <section id="experience" className="section section-blue"><div className="container">
      <p className="section-kicker">04 / EXPERIENCE</p><h2>Internship <span>experience</span></h2>
      <div className="timeline">
        <article className="timeline-item"><div className="timeline-dot"/><div className="time">OCT 2025 — FEB 2026</div><div className="timeline-content"><div className="company">PT BANK RIAU KEPRI SYARIAH</div><h3>Corporate Secretariat Division · Intern</h3><ul>
          <li>Designed and developed an IoT-based GPS vehicle tracking hardware system with real-time web-based monitoring for advertising partner vehicles, integrating sensors, connectivity modules, and a backend dashboard.</li>
          <li>Built three internal web-based systems supporting corporate operations: ballroom booking, shareholder management, and unsecured installment loan applications.</li>
          <li>Managed data entry and document archiving for sponsorship records, ensuring accuracy and traceability.</li>
        </ul></div></article>
        <article className="timeline-item"><div className="timeline-dot"/><div className="time">FEB 2025 — JUN 2025</div><div className="timeline-content"><div className="company">PT BUMI SIAK PUSAKO</div><h3>Information & Communication Technology (ICT) · Intern</h3><ul>
          <li>Designed and built an RFID-based attendance hardware system using an ESP32 microcontroller with RC522 RFID module and Telegram integration.</li>
          <li>Conducted hardware and software testing and troubleshooting on end-user devices, performing root-cause analysis and repairs to prevent recurring field issues.</li>
          <li>Supported monitoring and preventive maintenance of office network infrastructure and hardware.</li>
        </ul></div></article>
      </div>
    </div></section>

    <section id="projects" className="section projects-section section-white"><div className="container">
      <div className="section-head"><div><p className="section-kicker">05 / PROJECTS</p><h2>Project <span>portofolio</span></h2></div><p>Practical engineering projects across IoT, embedded systems, RF, electronics, and web development.</p></div>
      <div className="filters" role="tablist" aria-label="Project categories">{categories.map(c=><button key={c} className={filter===c?"active":""} onClick={()=>setFilter(c)} role="tab" aria-selected={filter===c}>{c}</button>)}</div>
      <div className="project-grid">{filtered.map(project=>{const Icon=project.icon;return <article className="project-card" key={project.title} onClick={()=>setSelected(project)}>
        <div className="project-icon"><Icon size={24}/></div><span className="project-category">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p>
        <div className="tags">{project.tags.map(t=><span key={t}>{t}</span>)}</div>
        <button className="project-link" onClick={e=>{e.stopPropagation();setSelected(project)}}>View details <ChevronRight size={17}/></button>
      </article>})}</div>
    </div></section>

    <section id="leadership" className="section leadership-section section-blue"><div className="container">
      <div className="section-head"><div><p className="section-kicker">06 / LEADERSHIP & CERTIFICATIONS</p><h2>Leadership, <span>community & certification</span></h2></div><p>Leadership experience and professional learning that complement the technical foundation.</p></div>
      <div className="leadership-layout">
        <div className="leadership-grid">
          <div><Users size={20}/><h3>Association of Electronics Telecommunication (AET)</h3><p>Coordinator, Spiritual/Religious Affairs Division (2024–2025); Event Coordinator, Student Day 2024; Research & Technology Division Member (2023–2024); Fiber Optic Workshop Instructor (2024).</p></div>
          <div><Sparkles size={20}/><h3>Cisco Netriders Student Activity Unit</h3><p>Head of Events Division for Sumatera Networking Competition VII 2024, leading planning, technical implementation, and committee coordination. Also served in Public Relations for Internal Cisco Networking Competition 2024.</p></div>
        </div>
        <aside className="cert-panel">
          <div className="cert-panel-head"><div className="cert-icon"><Award size={22}/></div><div><p className="mini-label">CERTIFICATION</p><h3>CCNA — Introduction to Networks</h3></div></div>
          <p>Cisco Networking Academy · Verification available on Credly</p>
        </aside>
      </div>
    </div></section>

    <section id="contact" className="section contact section-white"><div className="container contact-grid">
      <div><p className="section-kicker">07 / CONTACT</p><h2>Let&apos;s build something <span>connected.</span></h2>
        <p className="contact-copy">I am actively seeking opportunities in electronics, embedded systems/IoT, RF/EMC, and technical field support.</p>
        <a className="contact-email" href="mailto:ahmaddzaaki.01@gmail.com"><BrandIcon brand="gmail" size={19}/> ahmaddzaaki.01@gmail.com</a>
        <a className="contact-email" href="https://www.linkedin.com/in/ahmad-dzaki/" target="_blank" rel="noreferrer"><BrandIcon brand="linkedin" size={19}/> linkedin.com/in/ahmad-dzaki</a>
        <div className="contact-meta"><a href="tel:+6285376861935" className="contact-meta-item"><span className="phone-icon" aria-hidden="true">☎</span> +62 853-7686-1935</a><a href="https://www.instagram.com/ahmaddzaaki/" target="_blank" rel="noreferrer" className="contact-meta-item"><BrandIcon brand="instagram" size={17}/> @ahmaddzaaki</a><div className="contact-location"><MapPin size={17}/> <span>Pekanbaru, Riau, Indonesia</span></div></div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}><label>Name<input name="name" required placeholder="Your name"/></label><label>Email<input name="email" type="email" required placeholder="your@email.com"/></label><label>Message<textarea name="message" rows={6} required placeholder="Tell me about an opportunity or project..."/></label><button className="btn primary" type="submit">Send message <Send size={17}/></button></form>
    </div></section>

    <footer><div className="container footer-inner"><div><strong>AHMAD DZAKI</strong><span>Electronics Engineering · Telecommunications</span></div><div className="footer-links"><a href="mailto:ahmaddzaaki.01@gmail.com" aria-label="Email"><BrandIcon brand="gmail" size={16}/></a><a href="https://www.linkedin.com/in/ahmad-dzaki/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BrandIcon brand="linkedin" size={16}/></a><a href="https://www.instagram.com/ahmaddzaaki/" target="_blank" rel="noreferrer" aria-label="Instagram"><BrandIcon brand="instagram" size={16}/></a></div><small>© 2026 Ahmad Dzaki</small></div></footer>

    {selected && <div className="modal-backdrop" onClick={()=>setSelected(null)}><div className="modal" role="dialog" aria-modal="true" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setSelected(null)} aria-label="Close project details"><X size={19}/></button><span className="project-category">{selected.category}</span><h2>{selected.title}</h2><p>{selected.description}</p><div className="modal-tags">{selected.tags.map(t=><span key={t}>{t}</span>)}</div><div className="project-gallery"><div className="gallery-heading"><span>PROJECT VISUALS</span><small>{selected.images?.length ? `${selected.images.length} image${selected.images.length > 1 ? "s" : ""}` : "Ready for your screenshots"}</small></div>{selected.images?.length ? <div className="gallery-grid">{selected.images.map((src,i)=><a className="gallery-item" href={src} target="_blank" rel="noreferrer" key={src}><img src={src} alt={`${selected.title} preview ${i+1}`} /><span>View image ↗</span></a>)}</div> : <div className="gallery-empty"><div className="gallery-empty-icon"><SelectedIcon size={28}/></div><strong>Add project screenshots here</strong><p>Place your image in <code>public/projects/</code>, then add its path to this project&apos;s <code>images</code> array in <code>components/Portfolio.tsx</code>.</p><code>{`images: ["/projects/your-image.jpg"]`}</code></div>}</div></div></div>}
  </main>;
}
