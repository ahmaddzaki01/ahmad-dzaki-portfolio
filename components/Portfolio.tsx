"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
} from "react";

import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  CircuitBoard,
  Code2,
  Cpu,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Network,
  Radio,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
  X,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

function BrandIcon({
  brand,
  size = 18,
}: {
  brand: "linkedin" | "instagram" | "gmail" | "whatsapp";
  size?: number;
}) {
  if (brand === "linkedin") {
    return (
      <svg
        className="brand-icon linkedin-icon"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.57V9H3.56v11.45Z"
        />
      </svg>
    );
  }

  if (brand === "instagram") {
    return (
      <svg
        className="brand-icon instagram-icon"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="ig-gradient"
            x1="0"
            y1="1"
            x2="1"
            y2="0"
          >
            <stop offset="0" stopColor="#feda75" />
            <stop offset=".35" stopColor="#fa7e1e" />
            <stop offset=".65" stopColor="#d62976" />
            <stop offset="1" stopColor="#4f5bd5" />
          </linearGradient>
        </defs>

        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          fill="none"
          stroke="url(#ig-gradient)"
          strokeWidth="2"
        />

        <circle
          cx="12"
          cy="12"
          r="4.2"
          fill="none"
          stroke="url(#ig-gradient)"
          strokeWidth="2"
        />

        <circle
          cx="17.4"
          cy="6.7"
          r="1.1"
          fill="#d62976"
        />
      </svg>
    );
  }

  if (brand === "whatsapp") {
    return (
      <svg
        className="brand-icon whatsapp-icon"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fill="#25D366"
          d="M12 2C6.49 2 2 6.49 2 12c0 1.77.46 3.49 1.34 5.01L2.5 21.5l4.62-.81A9.94 9.94 0 0 0 12 22c5.51 0 10-4.49 10-10S17.51 2 12 2Z"
        />

        <path
          fill="#fff"
          d="M17.47 14.29c-.29-.15-1.71-.84-1.98-.94-.27-.1-.47-.15-.67.15-.2.29-.77.94-.95 1.13-.17.2-.35.22-.64.07-.29-.15-1.21-.45-2.31-1.43-.85-.76-1.43-1.69-1.6-1.98-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.09 4.49.71.31 1.26.2 1.86.12.57-.09 1.71-.7 1.95-1.37.24-.67.24-1.24.17-1.37-.07-.12-.27-.2-.56-.34Z"
        />
      </svg>
    );
  }

  return (
    <svg
      className="brand-icon gmail-icon"
      width={size + 2}
      height={size}
      viewBox="0 0 28 20"
      aria-hidden="true"
    >
      <path
        fill="#EA4335"
        d="M2 17.8V3.1c0-.5.3-.9.8-1.1L14 9.8l11.2-7.8c.5-.2.8.1.8.6v15.2c0 .8-.6 1.4-1.4 1.4h-2.8V7.2L14 13.5 6.2 7.2v10.6H3.4c-.8 0-1.4-.6-1.4-1.4Z"
      />

      <path
        fill="#C5221F"
        d="M2 3.1c0-.7.8-1.1 1.4-.7L14 9.8 24.6 2.4c.6-.4 1.4 0 1.4.7v2.1L14 13.5 2 5.2V3.1Z"
      />
    </svg>
  );
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
  {
    title: "IoT-Based GPS Vehicle Tracking System",
    category: "IoT & Web",
    description:
      "End-to-end hardware and web monitoring solution for real-time vehicle location tracking, integrating GPS, ESP32, sensors, connectivity, data acquisition, and a backend dashboard.",
    tags: ["ESP32", "GPS", "IoT", "Web Monitoring"],
    icon: MapPin,
    images: ["/projects/gpsweb.png", "/projects/gpshardware.png"],
  },
  {
    title: "RFID & ESP32-Based Attendance System",
    category: "IoT & Embedded",
    description:
      "Hardware-integrated attendance device using an RC522 RFID module and ESP32 with real-time Telegram notifications, including on-device testing and field validation.",
    tags: ["ESP32", "RC522", "RFID", "Telegram"],
    icon: ShieldCheck,
    images: ["/projects/AttendanceSystem.png"],
  },
  {
    title: "Microstrip Antenna Design at 2.6 GHz",
    category: "RF & Telecom",
    description:
      "RF microstrip antenna designed and simulated at 2.6 GHz using CST Studio Suite.",
    tags: ["CST Studio", "RF", "Antenna", "2.6 GHz"],
    icon: Radio,
    images: ["/projects/antenna.png"],
  },
  {
    title: "ESP32-Based Automatic Gate",
    category: "Embedded Systems",
    description:
      "Automated boom-gate prototype using ESP32, a servo motor, ultrasonic sensor, and PIR sensor for object and vehicle detection.",
    tags: ["ESP32", "Servo", "Ultrasonic", "PIR"],
    icon: Cpu,
    images: ["/projects/gate.png"],
  },
  {
    title: "Power Supply Circuit",
    category: "Electronics",
    description:
      "Designed a power supply circuit producing a fixed 5V output and variable 0–15V output by converting AC input into DC output.",
    tags: ["AC-DC", "5V", "0–15V", "Circuit Design"],
    icon: CircuitBoard,
    images: ["/projects/powersupply.png"],
  },
  {
    title: "ADC Circuit with IC ADC0804",
    category: "Electronics",
    description:
      "Built an analog-to-digital converter circuit displaying an 8-bit binary value up to 255 across eight LEDs.",
    tags: ["ADC0804", "ADC", "Digital Logic", "Measurement"],
    icon: Code2,
    images: ["/projects/adccircuit.png"],
  },
  {
    title: "Line Follower Robot",
    category: "Embedded Systems",
    description:
      "Autonomous line-following robot using an Op-Amp-based circuit and LDR sensors for track-following control logic.",
    tags: ["Op-Amp", "LDR", "Robot", "Control"],
    icon: Cpu,
    images: ["/projects/linefollower.png"],
  },
  {
    title: "Website-Based Ballroom Booking System",
    category: "Web Development",
    description:
      "Web application for Menara Dang Merdu where users view schedules and track requests while admins manage bookings and avoid scheduling conflicts.",
    tags: ["Web App", "Booking", "Dashboard"],
    icon: BriefcaseBusiness,
    images: ["/projects/ballromwebbrks.png"],
  },
  {
    title: "Website-Based Shareholder Management System",
    category: "Web Development",
    description:
      "Web application for centralized shareholder data management, search, display, recording, and reporting.",
    tags: ["Web App", "Data Management", "Search", "Reporting"],
    icon: Users,
    images: ["/projects/sahamwebbrks.png"],
  },
  {
    title: "Website-Based Unsecured Installment Loan System",
    category: "Web Development",
    description:
      "Web application for managing unsecured loan applications and records, including borrower data, applications, and installment information.",
    tags: ["Web App", "Data", "Loan Records", "Dashboard"],
    icon: Network,
    images: ["/projects/angsuranwebbrks.png"],
  },
];

const skills = [
  [
    "Electronics & EMC/RF",
    "Analog & digital circuits, EMC fundamentals, RF and antenna design/simulation, instrumentation and measurement.",
    CircuitBoard,
  ],
  [
    "Embedded Systems & IoT",
    "ESP32, Arduino, sensor integration, RFID systems, GPS tracking, data acquisition, and hardware-software integration.",
    Cpu,
  ],
  [
    "Networking & IT",
    "LAN troubleshooting and maintenance, network infrastructure monitoring, Cisco Packet Tracer, and CCNA fundamentals.",
    Network,
  ],
  [
    "Software Development",
    "Front-end and back-end web application development with practical experience building internal business systems.",
    Code2,
  ],
  [
    "Programming",
    "C/C++ for embedded systems and basic Python, supported by practical hardware and software projects.",
    Code2,
  ],
  [
    "Technical Troubleshooting",
    "Hardware/software troubleshooting, root-cause analysis, documentation, data accuracy, and systematic problem solving.",
    Wrench,
  ],
] as const;

const tools = [
  "MATLAB",
  "EasyEDA",
  "CST Studio Suite",
  "Tinkercad",
  "Arduino IDE",
  "VS Code",
  "Cisco Packet Tracer",
  "Google Apps Script",
  "Canva",
  "Microsoft Office",
];

const categories = [
  "All",
  "IoT & Web",
  "IoT & Embedded",
  "RF & Telecom",
  "Embedded Systems",
  "Electronics",
  "Web Development",
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const photoWrapRef = useRef<HTMLDivElement>(null);

  /*
   * ============================================================
   * 3D PORTRAIT INTERACTION
   * ============================================================
   */

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

        const insideX =
          px >= rect.left - proximity &&
          px <= rect.right + proximity;

        const insideY =
          py >= rect.top - proximity &&
          py <= rect.bottom + proximity;

        if (!insideX || !insideY) {
          reset();
          return;
        }

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX =
          (px - centerX) / (rect.width / 2 + proximity);

        const distanceY =
          (py - centerY) / (rect.height / 2 + proximity);

        const rx = Math.max(
          -9,
          Math.min(9, -distanceY * 9)
        );

        const ry = Math.max(
          -11,
          Math.min(11, distanceX * 11)
        );

        const glareX = Math.max(
          0,
          Math.min(100, 50 + distanceX * 45)
        );

        const glareY = Math.max(
          0,
          Math.min(100, 50 + distanceY * 45)
        );

        el.style.setProperty(
          "--photo-rx",
          `${rx}deg`
        );

        el.style.setProperty(
          "--photo-ry",
          `${ry}deg`
        );

        el.style.setProperty(
          "--photo-glare-x",
          `${glareX}%`
        );

        el.style.setProperty(
          "--photo-glare-y",
          `${glareY}%`
        );

        el.classList.add("is-3d-active");
      });
    };

    window.addEventListener(
      "mousemove",
      move,
      { passive: true }
    );

    window.addEventListener(
      "mouseleave",
      reset
    );

    return () => {
      cancelAnimationFrame(raf);

      window.removeEventListener(
        "mousemove",
        move
      );

      window.removeEventListener(
        "mouseleave",
        reset
      );
    };
  }, []);

  /*
   * ============================================================
   * SECTION REVEAL ANIMATION
   * ============================================================
   */

  useEffect(() => {
    const elements =
      document.querySelectorAll<HTMLElement>(
        ".section"
      );

    if (
      !("IntersectionObserver" in window)
    ) {
      elements.forEach((element) => {
        element.classList.add(
          "reveal-visible"
        );
      });

      return;
    }

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(
                "reveal-visible"
              );

              observer.unobserve(
                entry.target
              );
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: "0px 0px -70px 0px",
        }
      );

    elements.forEach((element) => {
      element.classList.add(
        "reveal-section"
      );

      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /*
   * ============================================================
   * CLOSE MODAL WITH ESCAPE
   * ============================================================
   */

  useEffect(() => {
    if (!selected) return;

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setSelected(null);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [selected]);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter(
            (p) => p.category === filter
          ),
    [filter]
  );

  const SelectedIcon =
    selected?.icon ??
    BriefcaseBusiness;

  function handleSubmit(
    e: FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const data =
      new FormData(e.currentTarget);

    const name = String(
      data.get("name") || ""
    );

    const email = String(
      data.get("email") || ""
    );

    const message = String(
      data.get("message") || ""
    );

    const subject =
      encodeURIComponent(
        `Portfolio contact from ${name}`
      );

    const body =
      encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      );

    window.location.href =
      `mailto:ahmaddzaaki.01@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <main>

      {/* ======================================================
          GLOBAL PORTFOLIO ANIMATIONS
          ====================================================== */}

      <style>{`
        /* ------------------------------------------------------
           BASE MOTION
        ------------------------------------------------------ */

        html {
          scroll-behavior: smooth;
        }

        ::selection {
          background: rgba(0, 127, 61, 0.22);
        }

        /* ------------------------------------------------------
           SECTION REVEAL
        ------------------------------------------------------ */

        .reveal-section {
          opacity: 0;
          transform: translateY(32px);
          transition:
            opacity 0.8s cubic-bezier(.22,1,.36,1),
            transform 0.8s cubic-bezier(.22,1,.36,1);
        }

        .reveal-section.reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ------------------------------------------------------
           NAVIGATION
        ------------------------------------------------------ */

        .nav-wrap {
          transition:
            background 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .brand {
          transition:
            transform 0.3s ease,
            letter-spacing 0.3s ease;
        }

        .brand:hover {
          transform: translateY(-2px);
          letter-spacing: 0.04em;
        }

        .brand-mark {
          transition:
            transform 0.35s cubic-bezier(.22,1,.36,1),
            box-shadow 0.35s ease;
        }

        .brand:hover .brand-mark {
          transform:
            rotate(-7deg)
            scale(1.08);
          box-shadow:
            0 10px 30px rgba(0,127,61,.22);
        }

        .nav-links a {
          position: relative;
          transition:
            color 0.25s ease,
            transform 0.25s ease;
        }

        .nav-links a:not(.nav-cv)::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -7px;
          width: 0;
          height: 2px;
          transform: translateX(-50%);
          background: currentColor;
          transition: width 0.3s ease;
        }

        .nav-links a:not(.nav-cv):hover {
          transform: translateY(-2px);
        }

        .nav-links a:not(.nav-cv):hover::after {
          width: 70%;
        }

        .nav-cv {
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .nav-cv:hover {
          transform:
            translateY(-2px)
            scale(1.02);
          box-shadow:
            0 12px 30px rgba(0,127,61,.2);
        }

        .menu-btn {
          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }

        .menu-btn:hover {
          transform: rotate(4deg) scale(1.05);
        }

        /* ------------------------------------------------------
           HERO BACKGROUND
        ------------------------------------------------------ */

        .hero {
          position: relative;
          overflow: hidden;
        }

        .hero-grid {
          animation:
            heroGridMove 22s linear infinite;
        }

        @keyframes heroGridMove {
          0% {
            background-position:
              0 0;
          }

          100% {
            background-position:
              80px 80px;
          }
        }

        .hero::before {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background:
            radial-gradient(
              circle,
              rgba(0,127,61,.16) 0%,
              rgba(0,127,61,.05) 42%,
              transparent 72%
            );
          top: -160px;
          left: -120px;
          pointer-events: none;
          animation:
            heroOrb 9s ease-in-out infinite;
        }

        .hero::after {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background:
            radial-gradient(
              circle,
              rgba(0,127,61,.11) 0%,
              transparent 68%
            );
          right: -230px;
          bottom: -250px;
          pointer-events: none;
          animation:
            heroOrb 11s ease-in-out infinite reverse;
        }

        @keyframes heroOrb {
          0%,
          100% {
            transform:
              translate3d(0,0,0)
              scale(1);
          }

          50% {
            transform:
              translate3d(25px,-18px,0)
              scale(1.08);
          }
        }

        /* ------------------------------------------------------
           HERO TEXT
        ------------------------------------------------------ */

        .hero-content {
          animation:
            heroContentIn 1s
            cubic-bezier(.22,1,.36,1)
            both;
        }

        @keyframes heroContentIn {
          from {
            opacity: 0;
            transform:
              translateY(30px);
          }

          to {
            opacity: 1;
            transform:
              translateY(0);
          }
        }

        .hero-content .eyebrow {
          animation:
            heroFadeUp 0.8s
            0.12s
            both;
        }

        .hero-content h1 {
          animation:
            heroTitleIn 1s
            0.18s
            cubic-bezier(.22,1,.36,1)
            both;
        }

        @keyframes heroTitleIn {
          from {
            opacity: 0;
            transform:
              translateY(22px)
              scale(.98);
            letter-spacing:
              .08em;
          }

          to {
            opacity: 1;
            transform:
              translateY(0)
              scale(1);
          }
        }

        .hero-content h1 span {
          display: inline-block;
          background:
            linear-gradient(
              110deg,
              currentColor 0%,
              #36c77b 35%,
              currentColor 65%,
              #36c77b 100%
            );
          background-size: 240% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation:
            titleShimmer 5s
            ease-in-out
            infinite;
        }

        @keyframes titleShimmer {
          0%,
          100% {
            background-position:
              0% 50%;
          }

          50% {
            background-position:
              100% 50%;
          }
        }

        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform:
              translateY(15px);
          }

          to {
            opacity: 1;
            transform:
              translateY(0);
          }
        }

        .hero-title {
          margin: 10px 0 0;
          font-size: clamp(1rem, 1.4vw, 1.2rem);
          line-height: 1.5;
          font-weight: 500;
          letter-spacing: .01em;
          color: rgba(255,255,255,.92);
          white-space: normal;
          animation:
            heroFadeUp .8s
            .3s both;
        }

        /* ------------------------------------------------------
           STATUS
        ------------------------------------------------------ */

        .status {
          animation:
            heroFadeUp .7s
            both;
        }

        .status > span {
          animation:
            statusPulse 1.8s
            ease-in-out
            infinite;
        }

        @keyframes statusPulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
            box-shadow:
              0 0 0 0
              rgba(0,127,61,.4);
          }

          50% {
            opacity: .75;
            transform: scale(.78);
            box-shadow:
              0 0 0 7px
              rgba(0,127,61,0);
          }
        }

        /* ------------------------------------------------------
           BUTTONS
        ------------------------------------------------------ */

        .btn {
          position: relative;
          overflow: hidden;
          transition:
            transform .3s
              cubic-bezier(.22,1,.36,1),
            box-shadow .3s ease,
            border-color .3s ease;
        }

        .btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -130%;
          width: 80%;
          height: 100%;
          transform:
            skewX(-20deg);
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,.35),
              transparent
            );
          transition:
            left .65s ease;
          pointer-events: none;
        }

        .btn:hover {
          transform:
            translateY(-4px)
            scale(1.015);
          box-shadow:
            0 15px 35px
            rgba(0,0,0,.12);
        }

        .btn:hover::before {
          left: 140%;
        }

        .btn svg {
          transition:
            transform .3s
            cubic-bezier(.22,1,.36,1);
        }

        .btn:hover svg {
          transform:
            translate(3px,-2px);
        }

        /* ------------------------------------------------------
           SOCIAL LINKS
        ------------------------------------------------------ */

        .socials a {
          transition:
            transform .25s ease,
            opacity .25s ease;
        }

        .socials a:hover {
          transform:
            translateY(-3px);
          opacity: 1;
        }

        .socials a:hover .brand-icon {
          transform:
            scale(1.14);
        }

        .brand-icon {
          transition:
            transform .3s
            cubic-bezier(.22,1,.36,1);
        }

        /* ------------------------------------------------------
           TECHNICAL MARQUEE
        ------------------------------------------------------ */

        .hero-marquee {
          position: relative;
          width: 100%;
          margin-top: 34px;
          overflow: hidden;
          mask-image:
            linear-gradient(
              90deg,
              transparent,
              black 8%,
              black 92%,
              transparent
            );
          -webkit-mask-image:
            linear-gradient(
              90deg,
              transparent,
              black 8%,
              black 92%,
              transparent
            );
        }

        .hero-marquee-track {
          display: flex;
          width: max-content;
          animation:
            marqueeMove 26s
            linear infinite;
        }

        .hero-marquee-track span {
          display: inline-flex;
          align-items: center;
          gap: 13px;
          margin-right: 28px;
          font-size: .72rem;
          font-weight: 800;
          letter-spacing: .14em;
          text-transform: uppercase;
          opacity: .46;
          white-space: nowrap;
        }

        .hero-marquee-track i {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background:
            currentColor;
          opacity: .65;
        }

        @keyframes marqueeMove {
          from {
            transform:
              translateX(0);
          }

          to {
            transform:
              translateX(-50%);
          }
        }

        /* ------------------------------------------------------
           PHOTO GLOW
        ------------------------------------------------------ */

        .hero-photo-glow {
          animation:
            photoGlow 4s
            ease-in-out
            infinite;
        }

        @keyframes photoGlow {
          0%,
          100% {
            opacity: .6;
            transform:
              scale(1);
          }

          50% {
            opacity: .9;
            transform:
              scale(1.05);
          }
        }

        /* ------------------------------------------------------
           SECTION HEADINGS
        ------------------------------------------------------ */

        .section-kicker {
          transition:
            letter-spacing .35s ease,
            opacity .35s ease;
        }

        .section:hover .section-kicker {
          letter-spacing: .18em;
        }

        .section-head h2 span,
        .section > .container > h2 span {
          transition:
            color .35s ease,
            text-shadow .35s ease;
        }

        .section-head:hover h2 span,
        .section > .container > h2:hover span {
          text-shadow:
            0 0 25px
            rgba(0,127,61,.18);
        }

        /* ------------------------------------------------------
           SKILL CARDS
        ------------------------------------------------------ */

        .skill-card {
          position: relative;
          overflow: hidden;
          transition:
            transform .4s
              cubic-bezier(.22,1,.36,1),
            box-shadow .4s ease,
            border-color .4s ease;
        }

        .skill-card::before {
          content: "";
          position: absolute;
          top: -80px;
          right: -80px;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background:
            radial-gradient(
              circle,
              rgba(0,127,61,.13),
              transparent 70%
            );
          transition:
            transform .5s ease;
          pointer-events: none;
        }

        .skill-card:hover {
          transform:
            translateY(-9px);
          box-shadow:
            0 22px 45px
            rgba(0,0,0,.10);
        }

        .skill-card:hover::before {
          transform:
            scale(1.6);
        }

        .skill-card svg {
          transition:
            transform .4s
            cubic-bezier(.22,1,.36,1);
        }

        .skill-card:hover svg {
          transform:
            rotate(-7deg)
            scale(1.12);
        }

        .skill-num {
          transition:
            transform .35s ease,
            opacity .35s ease;
        }

        .skill-card:hover .skill-num {
          transform:
            translateX(5px);
          opacity: .8;
        }

        /* ------------------------------------------------------
           TOOLS
        ------------------------------------------------------ */

        .tool-list span {
          transition:
            transform .25s ease,
            background .25s ease,
            box-shadow .25s ease;
        }

        .tool-list span:hover {
          transform:
            translateY(-3px);
          box-shadow:
            0 8px 20px
            rgba(0,0,0,.08);
        }

        /* ------------------------------------------------------
           TIMELINE
        ------------------------------------------------------ */

        .timeline-item {
          transition:
            transform .4s
            cubic-bezier(.22,1,.36,1);
        }

        .timeline-item:hover {
          transform:
            translateX(7px);
        }

        .timeline-dot {
          transition:
            transform .35s ease,
            box-shadow .35s ease;
        }

        .timeline-item:hover
        .timeline-dot {
          transform:
            scale(1.25);
          box-shadow:
            0 0 0 7px
            rgba(0,127,61,.12);
        }

        /* ------------------------------------------------------
           PROJECT FILTER
        ------------------------------------------------------ */

        .filters button {
          position: relative;
          overflow: hidden;
          transition:
            transform .25s ease,
            background .25s ease,
            color .25s ease,
            box-shadow .25s ease;
        }

        .filters button:hover {
          transform:
            translateY(-2px);
        }

        .filters button.active {
          box-shadow:
            0 8px 22px
            rgba(0,127,61,.15);
        }

        /* ------------------------------------------------------
           PROJECT CARDS
        ------------------------------------------------------ */

        .project-card {
          position: relative;
          overflow: hidden;
          transition:
            transform .45s
              cubic-bezier(.22,1,.36,1),
            box-shadow .45s ease,
            border-color .35s ease;
        }

        .project-card::before {
          content: "";
          position: absolute;
          top: -100px;
          right: -100px;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background:
            radial-gradient(
              circle,
              rgba(0,127,61,.11),
              transparent 70%
            );
          opacity: 0;
          transition:
            opacity .4s ease,
            transform .5s ease;
          pointer-events: none;
        }

        .project-card:hover {
          transform:
            translateY(-10px);
          box-shadow:
            0 24px 50px
            rgba(0,0,0,.11);
        }

        .project-card:hover::before {
          opacity: 1;
          transform:
            scale(1.35);
        }

        .project-icon {
          transition:
            transform .4s
            cubic-bezier(.22,1,.36,1),
            box-shadow .4s ease;
        }

        .project-card:hover
        .project-icon {
          transform:
            translateY(-4px)
            rotate(-5deg)
            scale(1.08);
          box-shadow:
            0 12px 28px
            rgba(0,127,61,.13);
        }

        .project-card h3 {
          transition:
            transform .35s ease,
            color .35s ease;
        }

        .project-card:hover h3 {
          transform:
            translateX(4px);
        }

        .project-link {
          transition:
            transform .3s ease,
            gap .3s ease;
        }

        .project-card:hover
        .project-link {
          gap: 9px;
        }

        /* ------------------------------------------------------
           LEADERSHIP & CERTIFICATION ALIGNMENT
        ------------------------------------------------------ */

        .leadership-layout {
          align-items: stretch;
        }

        .leadership-grid {
          height: 100%;
          align-items: stretch;
        }

        .leadership-grid > .leadership-interactive-card,
        .leadership-layout .cert-panel {
          box-sizing: border-box;
          min-width: 0;
          height: 100%;
        }

        .leadership-grid > .leadership-interactive-card {
          display: flex;
          flex-direction: column;
        }

        .leadership-grid > .leadership-interactive-card p {
          margin-top: auto;
        }

        .leadership-layout .cert-panel {
          align-self: stretch;
        }

        /* ------------------------------------------------------
           CERTIFICATION
        ------------------------------------------------------ */

        .leadership-grid > .leadership-interactive-card,
        .leadership-layout .cert-panel {
          position: relative;
          overflow: hidden;
          transition:
            transform .45s cubic-bezier(.22,1,.36,1),
            box-shadow .45s ease,
            border-color .35s ease,
            background .35s ease;
        }

        .leadership-grid > .leadership-interactive-card::before,
        .leadership-layout .cert-panel::before {
          content: "";
          position: absolute;
          top: -90px;
          right: -90px;
          width: 190px;
          height: 190px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(0,127,61,.14),
            transparent 70%
          );
          opacity: .55;
          transform: scale(.75);
          transition:
            transform .5s cubic-bezier(.22,1,.36,1),
            opacity .4s ease;
          pointer-events: none;
        }

        .leadership-grid > .leadership-interactive-card::after,
        .leadership-layout .cert-panel::after {
          content: "";
          position: absolute;
          top: 0;
          left: -120%;
          width: 75%;
          height: 100%;
          transform: skewX(-18deg);
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.28),
            transparent
          );
          transition: left .7s ease;
          pointer-events: none;
        }

        .leadership-grid > .leadership-interactive-card:hover,
        .leadership-layout .cert-panel:hover {
          transform: translateY(-9px) scale(1.01);
          box-shadow: 0 24px 50px rgba(0,0,0,.12);
        }

        .leadership-grid > .leadership-interactive-card:hover::before,
        .leadership-layout .cert-panel:hover::before {
          opacity: 1;
          transform: scale(1.45);
        }

        .leadership-grid > .leadership-interactive-card:hover::after,
        .leadership-layout .cert-panel:hover::after {
          left: 140%;
        }

        .leadership-grid > .leadership-interactive-card > svg,
        .leadership-layout .cert-icon {
          transition:
            transform .4s cubic-bezier(.22,1,.36,1),
            box-shadow .4s ease;
        }

        .leadership-grid > .leadership-interactive-card:hover > svg,
        .leadership-layout .cert-panel:hover .cert-icon {
          transform: translateY(-3px) rotate(-8deg) scale(1.12);
        }

        .leadership-grid > .leadership-interactive-card h3,
        .leadership-layout .cert-panel h3 {
          transition: transform .35s ease;
        }

        .leadership-grid > .leadership-interactive-card:hover h3,
        .leadership-layout .cert-panel:hover h3 {
          transform: translateX(4px);
        }

        /* ------------------------------------------------------
           CONTACT
        ------------------------------------------------------ */

        .contact-email,
        .contact-meta-item {
          transition:
            transform .3s ease,
            opacity .3s ease;
        }

        .contact-email:hover,
        .contact-meta-item:hover {
          transform:
            translateX(6px);
        }

        .contact-form {
          transition:
            transform .4s
            cubic-bezier(.22,1,.36,1),
            box-shadow .4s ease;
        }

        .contact-form:focus-within {
          transform:
            translateY(-3px);
          box-shadow:
            0 24px 55px
            rgba(0,0,0,.08);
        }

        .contact-form input,
        .contact-form textarea {
          transition:
            border-color .25s ease,
            box-shadow .25s ease,
            transform .25s ease;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          transform:
            translateY(-1px);
          box-shadow:
            0 0 0 4px
            rgba(0,127,61,.08);
        }

        /* ------------------------------------------------------
           FOOTER
        ------------------------------------------------------ */

        .footer-links a {
          transition:
            transform .3s
            cubic-bezier(.22,1,.36,1),
            opacity .3s ease;
        }

        .footer-links a:hover {
          transform:
            translateY(-4px)
            scale(1.08);
        }

        /* ------------------------------------------------------
           MODAL
        ------------------------------------------------------ */

        .modal-backdrop {
          animation:
            modalBackdropIn .3s
            ease both;
        }

        .modal {
          animation:
            modalIn .45s
            cubic-bezier(.22,1,.36,1)
            both;
        }

        @keyframes modalBackdropIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes modalIn {
          from {
            opacity: 0;
            transform:
              translateY(25px)
              scale(.96);
          }

          to {
            opacity: 1;
            transform:
              translateY(0)
              scale(1);
          }
        }

        .modal-close {
          transition:
            transform .3s ease,
            background .3s ease;
        }

        .modal-close:hover {
          transform:
            rotate(90deg)
            scale(1.08);
        }

        .gallery-item {
          overflow: hidden;
          transition:
            transform .4s
              cubic-bezier(.22,1,.36,1),
            box-shadow .4s ease;
        }

        .gallery-item img {
          transition:
            transform .6s
            cubic-bezier(.22,1,.36,1);
        }

        .gallery-item:hover {
          transform:
            translateY(-5px);
          box-shadow:
            0 20px 40px
            rgba(0,0,0,.12);
        }

        .gallery-item:hover img {
          transform:
            scale(1.06);
        }

        /* ------------------------------------------------------
           MOBILE
        ------------------------------------------------------ */

        @media (max-width: 900px) {
        }

        @media (max-width: 640px) {

          .hero-marquee {
            margin-top: 25px;
          }

          .hero-content h1 span {
            background-size:
              180% 100%;
          }
        }

        @media (max-width: 900px) {
          .leadership-layout {
            align-items: stretch;
          }

          .leadership-layout .cert-panel {
            height: auto;
            min-height: 100%;
          }
        }

        /* ------------------------------------------------------
           MOBILE + iOS RESPONSIVE LAYOUT
        ------------------------------------------------------ */

        /* Prevent Safari/iOS from unexpectedly resizing text and
           prevent small horizontal overflow caused by animations. */
        :root {
          -webkit-text-size-adjust: 100%;
          text-size-adjust: 100%;
        }

        body {
          overflow-x: hidden;
          -webkit-overflow-scrolling: touch;
        }

        img {
          max-width: 100%;
          height: auto;
        }

        button,
        a,
        input,
        textarea {
          -webkit-tap-highlight-color: transparent;
        }

        /* Tablet / small laptop */
        @media (max-width: 900px) {
          .container {
            width: min(100% - 40px, 760px);
            margin-inline: auto;
          }

          .nav {
            min-height: 68px;
          }

          .menu-btn {
            display: inline-flex !important;
            align-items: center;
            justify-content: center;
            width: 44px;
            height: 44px;
            flex: 0 0 44px;
            border: 0;
            cursor: pointer;
            touch-action: manipulation;
          }

          .nav-links {
            position: absolute;
            top: calc(100% + 8px);
            left: 20px;
            right: 20px;
            z-index: 100;
            display: flex !important;
            flex-direction: column;
            align-items: stretch;
            gap: 4px;
            padding: 10px;
            border-radius: 18px;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transform: translateY(-8px) scale(.98);
            transform-origin: top center;
            transition:
              opacity .25s ease,
              transform .25s ease,
              visibility .25s ease;
          }

          .nav-links.open {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            transform: translateY(0) scale(1);
          }

          .nav-links a {
            min-height: 44px;
            display: flex;
            align-items: center;
            padding: 10px 14px;
            border-radius: 12px;
          }

          .nav-links a:not(.nav-cv)::after {
            display: none;
          }

          .nav-cv {
            justify-content: center;
            margin-top: 5px;
          }

          .hero {
            min-height: auto;
          }

          .hero-layout {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 38px !important;
            min-height: auto !important;
            padding-top: 72px;
            padding-bottom: 58px;
          }

          .hero-content {
            width: 100%;
            max-width: 760px;
            margin-inline: auto;
          }

          .hero-photo-wrap {
            width: min(76vw, 430px);
            max-width: 430px;
            margin: 0 auto;
            justify-self: center;
          }

          .two-col,
          .about-layout,
          .contact-layout {
            grid-template-columns: minmax(0, 1fr) !important;
          }

          .section-head {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 18px;
          }

          .skill-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }

          .project-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }

          .leadership-layout {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 20px;
          }

          .leadership-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }

          .leadership-grid > .leadership-interactive-card,
          .leadership-layout .cert-panel {
            height: auto;
            min-height: 0;
          }

          .filters {
            gap: 8px;
            overflow-x: auto;
            overflow-y: hidden;
            flex-wrap: nowrap !important;
            justify-content: flex-start !important;
            padding: 4px 2px 10px;
            scrollbar-width: none;
            -webkit-overflow-scrolling: touch;
            overscroll-behavior-x: contain;
          }

          .filters::-webkit-scrollbar {
            display: none;
          }

          .filters button {
            flex: 0 0 auto;
            min-height: 44px;
            white-space: nowrap;
            touch-action: manipulation;
          }

          .contact-form {
            width: 100%;
            box-sizing: border-box;
          }
        }

        /* Phones, including iPhone */
        @media (max-width: 640px) {
          .container {
            width: calc(100% - 32px);
            max-width: none;
          }

          .nav-wrap {
            padding-top: env(safe-area-inset-top);
          }

          .nav {
            min-height: 62px;
          }

          .brand {
            min-width: 0;
            max-width: calc(100% - 58px);
            gap: 9px;
          }

          .brand > span:last-child {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .nav-links {
            left: 16px;
            right: 16px;
            max-height: calc(100svh - 90px);
            overflow-y: auto;
            overscroll-behavior: contain;
            -webkit-overflow-scrolling: touch;
          }

          .hero-layout {
            width: calc(100% - 32px);
            gap: 30px !important;
            padding-top: 54px;
            padding-bottom: 44px;
          }

          .hero-content {
            text-align: left;
          }

          .status {
            font-size: .72rem;
          }

          .hero-content h1 {
            font-size: clamp(2.55rem, 14vw, 4rem) !important;
            line-height: .98 !important;
            letter-spacing: -.045em !important;
            overflow-wrap: anywhere;
          }

          .hero-content h1 span {
            background-size: 180% 100%;
          }

          .hero-title {
            margin-top: 12px;
            font-size: .94rem;
            line-height: 1.45;
            max-width: 100%;
          }

          .hero-copy {
            font-size: .96rem;
            line-height: 1.65;
          }

          .hero-sub {
            font-size: .9rem;
            line-height: 1.7;
          }

          .hero-actions {
            display: grid;
            grid-template-columns: minmax(0, 1fr);
            gap: 10px;
            width: 100%;
          }

          .hero-actions .btn {
            width: 100%;
            min-height: 48px;
            box-sizing: border-box;
            justify-content: center;
          }

          .socials {
            display: grid;
            grid-template-columns: minmax(0, 1fr);
            gap: 10px;
            align-items: start;
          }

          .socials a {
            min-height: 42px;
            min-width: 0;
            display: flex;
            align-items: center;
            gap: 8px;
            overflow-wrap: anywhere;
            word-break: break-word;
          }

          .socials .dot {
            display: none;
          }

          .hero-marquee {
            margin-top: 24px;
          }

          .hero-marquee-track span {
            font-size: .62rem;
            letter-spacing: .1em;
            margin-right: 22px;
          }

          .hero-photo-wrap {
            width: min(86vw, 360px);
            max-width: 360px;
            margin-inline: auto;
          }

          .section {
            overflow: hidden;
          }

          .section-head {
            display: block !important;
          }

          .section-head > p {
            margin-top: 16px;
            max-width: 100%;
            font-size: .9rem;
            line-height: 1.65;
          }

          .section h2 {
            font-size: clamp(1.9rem, 9vw, 2.55rem);
            line-height: 1.08;
          }

          .skill-grid,
          .project-grid,
          .leadership-grid {
            grid-template-columns: minmax(0, 1fr) !important;
          }

          .skill-card,
          .project-card,
          .leadership-grid > .leadership-interactive-card,
          .leadership-layout .cert-panel {
            width: 100%;
            min-width: 0;
            box-sizing: border-box;
          }

          .project-card:hover,
          .leadership-grid > .leadership-interactive-card:hover,
          .leadership-layout .cert-panel:hover,
          .skill-card:hover {
            transform: translateY(-4px);
          }

          .project-card h3,
          .leadership-grid > .leadership-interactive-card h3 {
            overflow-wrap: anywhere;
          }

          .tags {
            flex-wrap: wrap;
          }

          .project-link {
            min-height: 44px;
          }

          .leadership-layout {
            grid-template-columns: minmax(0, 1fr) !important;
          }

          .leadership-grid > .leadership-interactive-card p {
            margin-top: 14px;
          }

          .contact-layout {
            grid-template-columns: minmax(0, 1fr) !important;
          }

          .contact-form {
            padding: 18px !important;
            border-radius: 18px;
          }

          .contact-form input,
          .contact-form textarea,
          .contact-form button {
            font-size: 16px !important;
          }

          .contact-form input,
          .contact-form textarea {
            min-height: 48px;
            box-sizing: border-box;
          }

          .contact-form textarea {
            min-height: 130px;
          }

          .contact-form button {
            min-height: 48px;
            width: 100%;
            justify-content: center;
          }

          .modal-backdrop {
            padding:
              max(14px, env(safe-area-inset-top))
              14px
              max(14px, env(safe-area-inset-bottom))
              14px;
            align-items: flex-start;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }

          .modal {
            width: 100% !important;
            max-width: none !important;
            max-height: calc(100dvh - 28px);
            max-height: calc(100svh - 28px);
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            overscroll-behavior: contain;
            margin: 0;
          }

          .modal-close {
            width: 44px;
            height: 44px;
            min-width: 44px;
          }

          .gallery-item img {
            width: 100%;
            height: auto;
            object-fit: cover;
          }

          .footer-links {
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px 18px;
          }
        }

        /* Very small phones: 320–375px */
        @media (max-width: 375px) {
          .container,
          .hero-layout {
            width: calc(100% - 24px);
          }

          .hero-layout {
            padding-top: 44px;
          }

          .hero-content h1 {
            font-size: clamp(2.25rem, 14vw, 3rem) !important;
          }

          .brand-mark {
            width: 34px !important;
            height: 34px !important;
          }

          .section h2 {
            font-size: 1.85rem;
          }

          .hero-photo-wrap {
            width: min(88vw, 320px);
          }
        }

        /* iOS Safari safe-area and touch behaviour */
        @supports (-webkit-touch-callout: none) {
          html {
            -webkit-text-size-adjust: 100%;
          }

          body {
            min-height: 100%;
          }

          input,
          textarea,
          select,
          button {
            font-family: inherit;
          }

          .hero,
          .section {
            scroll-margin-top: 72px;
          }

          .hero-photo-wrap,
          .project-card,
          .skill-card,
          .leadership-interactive-card,
          .btn,
          .menu-btn,
          .filters button {
            touch-action: manipulation;
          }
        }

        /* ------------------------------------------------------
           ACCESSIBILITY / REDUCED MOTION
        ------------------------------------------------------ */

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            animation-duration:
              .01ms !important;
            animation-iteration-count:
              1 !important;
            transition-duration:
              .01ms !important;
            scroll-behavior:
              auto !important;
          }

          .reveal-section {
            opacity: 1 !important;
            transform: none !important;
          }

        }
      `}</style>

      {/* ======================================================
          NAVIGATION
          ====================================================== */}

      <header className="nav-wrap">
        <nav className="nav container">

          <a
            className="brand"
            href="#home"
          >
            <span className="brand-mark">
              AD
            </span>

            <span>
              AHMAD DZAKI
            </span>
          </a>

          <button
            className="menu-btn"
            onClick={() =>
              setMenuOpen(
                (v) => !v
              )
            }
            aria-label="Toggle navigation"
            aria-expanded={
              menuOpen
            }
          >
            {menuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

          <div
            className={`nav-links ${
              menuOpen ? "open" : ""
            }`}
          >
            {[
              "home",
              "about",
              "education",
              "skills",
              "experience",
              "projects",
              "leadership",
              "contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() =>
                  setMenuOpen(false)
                }
              >
                {item}
              </a>
            ))}

            <a
              className="nav-cv"
              href="/Ahmad-Dzaki-CV.pdf"
              download
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </nav>
      </header>

      {/* ======================================================
          HERO
          ====================================================== */}

      <section
        id="home"
        className="hero"
      >
        <div className="hero-grid" />

        <div className="container hero-layout">

          <div className="hero-content">

            <div className="status">
              <span />
              Open to opportunities
            </div>

            <h1>
              AHMAD{" "}
              <span>DZAKI</span>
            </h1>

            <p className="hero-title">
              Electronics Engineering · Telecommunications
            </p>

            <p className="hero-copy">
              Building practical
              solutions across{" "}
              <strong>
                IoT, Embedded Systems,
                RF/EMC & Networking.
              </strong>
            </p>

            <p className="hero-sub">
              Fresh graduate (D4) from
              Politeknik Caltex Riau with
              hands-on experience in
              engineering internships,
              technical troubleshooting,
              hardware-software
              integration, web systems,
              and connected devices.
            </p>

            <div className="hero-actions">

              <a
                className="btn primary"
                href="#projects"
              >
                Explore Projects
                <ArrowUpRight size={18} />
              </a>

              <a
                className="btn secondary"
                href="#contact"
              >
                Let&apos;s Connect
                <Mail size={18} />
              </a>

            </div>

            <div className="socials">

              <a
                href="mailto:ahmaddzaaki.01@gmail.com"
              >
                <BrandIcon brand="gmail" />
                ahmaddzaaki.01@gmail.com
              </a>

              <span className="dot">
                •
              </span>

              <a
                href="https://www.linkedin.com/in/ahmad-dzaki/"
                target="_blank"
                rel="noreferrer"
              >
                <BrandIcon brand="linkedin" />
                LinkedIn
              </a>

              <span className="dot">
                •
              </span>

              <a
                href="https://wa.me/6281927856578"
                target="_blank"
                rel="noreferrer"
              >
                <BrandIcon brand="whatsapp" />
                +62 819-2785-6578
              </a>

              <span className="dot">
                •
              </span>

              <a
                href="https://www.instagram.com/ahmaddzaaki/"
                target="_blank"
                rel="noreferrer"
              >
                <BrandIcon brand="instagram" />
                @ahmaddzaaki
              </a>

            </div>

            {/* TECHNICAL MARQUEE */}

            <div
              className="hero-marquee"
              aria-label="Technical areas"
            >
              <div className="hero-marquee-track">

                {[
                  "IoT",
                  "Embedded Systems",
                  "RF / EMC",
                  "Networking",
                  "Web Systems",
                  "Electronics",
                  "ESP32",
                  "GPS",
                  "Automation",

                  "IoT",
                  "Embedded Systems",
                  "RF / EMC",
                  "Networking",
                  "Web Systems",
                  "Electronics",
                  "ESP32",
                  "GPS",
                  "Automation",
                ].map(
                  (
                    item,
                    index
                  ) => (
                    <span
                      key={`${item}-${index}`}
                    >
                      <i />
                      {item}
                    </span>
                  )
                )}

              </div>
            </div>

          </div>

          {/* ==================================================
              INTERACTIVE 3D PORTRAIT
              ================================================== */}

          <div
            ref={photoWrapRef}
            className="hero-photo-wrap"
            aria-label="Interactive 3D portrait"
          >

            <div className="hero-photo-glow" />

            <div className="hero-photo-depth" />

            <img
              className="hero-photo"
              src="/profile-photo.png"
              alt="Professional portrait"
            />

            <div className="hero-photo-glare" />

          </div>

        </div>

      </section>

      {/* ======================================================
          ABOUT
          ====================================================== */}

      <section
        id="about"
        className="section section-white"
      >
        <div className="container two-col about-layout">

          <div>
            <p className="section-kicker">
              01 / ABOUT
            </p>

            <h2>
              Engineering mindset.
              <br />
              <span>
                Practical execution.
              </span>
            </h2>
          </div>

          <div className="about-copy">

            <p>
              Fresh graduate (D4) in
              Electronics Engineering,
              majoring in
              Telecommunications,
              from Politeknik Caltex
              Riau.
            </p>

            <p>
              My experience combines
              embedded systems, IoT,
              RF/antenna design,
              computer networking,
              web application
              development,
              instrumentation, and
              technical troubleshooting
              through engineering
              internships and multiple
              independent projects.
            </p>

            <p>
              I am interested in
              opportunities across
              electronics, embedded
              systems/IoT, RF/EMC,
              and technical field
              support, where I can
              contribute through
              systematic problem solving
              and reliable technical
              execution.
            </p>

          </div>

        </div>
      </section>

      {/* ======================================================
          EDUCATION
          ====================================================== */}

      <section
        id="education"
        className="section education-section section-blue"
      >
        <div className="container">

          <div className="section-head">

            <div>
              <p className="section-kicker">
                02 / EDUCATION
              </p>

              <h2>
                Academic{" "}
                <span>
                  foundation
                </span>
              </h2>
            </div>

            <p>
              A focused
              applied-engineering
              education in electronics
              and telecommunications,
              supported by practical
              coursework.
            </p>

          </div>

          <div className="education-card">

            <div className="edu-icon">
              <GraduationCap
                size={34}
              />
            </div>

            <div className="education-main">

              <div className="edu-topline">

                <p className="edu-date">
                  AUG 2022 — AUG 2026
                </p>

                <span className="edu-location">
                  <MapPin size={14} />
                  Pekanbaru, Riau,
                  Indonesia
                </span>

              </div>

              <h2>
                Politeknik Caltex
                Riau
              </h2>

              <h3>
                Applied Bachelor&apos;s
                Degree (D4),
                Electronics Engineering
                (Majoring
                Telecommunications)
              </h3>

              <div className="course-tags">

                {[
                  "Electronic Circuit Fundamentals",
                  "Digital & Analog Systems",
                  "Embedded Systems",
                  "Internet of Things",
                  "Industrial Automation",
                  "Instrumentation",
                  "Electromagnetic Compatibility",
                  "Wireless Communication",
                  "Fiber Optic Communication",
                  "Computer Networking",
                ].map((c) => (
                  <span key={c}>
                    {c}
                  </span>
                ))}

              </div>

              <div className="scholarship">

                <Award size={18} />

                <div>
                  <strong>
                    Riau Provincial
                    Government Merit
                    Scholarship
                  </strong>

                  <span>
                    2023–2026
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ======================================================
          SKILLS
          ====================================================== */}

      <section
        id="skills"
        className="section section-white"
      >
        <div className="container">

          <div className="section-head">

            <div>
              <p className="section-kicker">
                03 / SKILLS
              </p>

              <h2>
                Technical{" "}
                <span>
                  capabilities
                </span>
              </h2>
            </div>

            <p>
              A cross-disciplinary
              technical foundation
              connecting electronics,
              communication, software,
              networking, and
              real-world
              troubleshooting.
            </p>

          </div>

          <div className="skill-grid">

            {skills.map(
              (
                [title, desc, Icon],
                i
              ) => (
                <article
                  className="skill-card"
                  key={title}
                >
                  <div className="skill-num">
                    0{i + 1}
                  </div>

                  <Icon size={23} />

                  <h3>
                    {title}
                  </h3>

                  <p>
                    {desc}
                  </p>
                </article>
              )
            )}

          </div>

          <div className="tools-panel">

            <div>
              <p className="mini-label">
                TOOLS & SOFTWARE
              </p>

              <h3>
                Technical toolkit
              </h3>
            </div>

            <div className="tool-list">

              {tools.map((t) => (
                <span key={t}>
                  {t}
                </span>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* ======================================================
          EXPERIENCE
          ====================================================== */}

      <section
        id="experience"
        className="section section-blue"
      >
        <div className="container">

          <p className="section-kicker">
            04 / EXPERIENCE
          </p>

          <h2>
            Internship{" "}
            <span>
              experience
            </span>
          </h2>

          <div className="timeline">

            <article className="timeline-item">

              <div className="timeline-dot" />

              <div className="time">
                OCT 2025 — FEB 2026
              </div>

              <div className="timeline-content">

                <div className="company">
                  PT BANK RIAU KEPRI
                  SYARIAH
                </div>

                <h3>
                  Corporate Secretariat
                  Division · Intern
                </h3>

                <ul>

                  <li>
                    Designed and
                    developed an IoT-based
                    GPS vehicle tracking
                    hardware system with
                    real-time web-based
                    monitoring for
                    advertising partner
                    vehicles, integrating
                    sensors, connectivity
                    modules, and a backend
                    dashboard.
                  </li>

                  <li>
                    Built three internal
                    web-based systems
                    supporting corporate
                    operations: ballroom
                    booking, shareholder
                    management, and
                    unsecured installment
                    loan applications.
                  </li>

                  <li>
                    Managed data entry
                    and document archiving
                    for sponsorship
                    records, ensuring
                    accuracy and
                    traceability.
                  </li>

                </ul>

              </div>

            </article>

            <article className="timeline-item">

              <div className="timeline-dot" />

              <div className="time">
                FEB 2025 — JUN 2025
              </div>

              <div className="timeline-content">

                <div className="company">
                  PT BUMI SIAK PUSAKO
                </div>

                <h3>
                  Information &
                  Communication
                  Technology (ICT) ·
                  Intern
                </h3>

                <ul>

                  <li>
                    Designed and built an
                    RFID-based attendance
                    hardware system using
                    an ESP32 microcontroller
                    with RC522 RFID module
                    and Telegram
                    integration.
                  </li>

                  <li>
                    Conducted hardware
                    and software testing
                    and troubleshooting on
                    end-user devices,
                    performing root-cause
                    analysis and repairs
                    to prevent recurring
                    field issues.
                  </li>

                  <li>
                    Supported monitoring
                    and preventive
                    maintenance of office
                    network infrastructure
                    and hardware.
                  </li>

                </ul>

              </div>

            </article>

          </div>

        </div>
      </section>

      {/* ======================================================
          PROJECTS
          ====================================================== */}

      <section
        id="projects"
        className="section projects-section section-white"
      >
        <div className="container">

          <div className="section-head">

            <div>
              <p className="section-kicker">
                05 / PROJECTS
              </p>

              <h2>
                Project{" "}
                <span>
                  portofolio
                </span>
              </h2>
            </div>

            <p>
              Practical engineering
              projects across IoT,
              embedded systems, RF,
              electronics, and web
              development.
            </p>

          </div>

          <div
            className="filters"
            role="tablist"
            aria-label="Project categories"
          >

            {categories.map((c) => (
              <button
                key={c}
                className={
                  filter === c
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setFilter(c)
                }
                role="tab"
                aria-selected={
                  filter === c
                }
              >
                {c}
              </button>
            ))}

          </div>

          <div className="project-grid">

            {filtered.map(
              (project) => {
                const Icon =
                  project.icon;

                return (
                  <article
                    className="project-card"
                    key={project.title}
                    onClick={() =>
                      setSelected(
                        project
                      )
                    }
                  >

                    <div className="project-icon">
                      <Icon size={24} />
                    </div>

                    <span className="project-category">
                      {project.category}
                    </span>

                    <h3>
                      {project.title}
                    </h3>

                    <p>
                      {project.description}
                    </p>

                    <div className="tags">

                      {project.tags.map(
                        (t) => (
                          <span key={t}>
                            {t}
                          </span>
                        )
                      )}

                    </div>

                    <button
                      className="project-link"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelected(
                          project
                        );
                      }}
                    >
                      View details
                      <ChevronRight
                        size={17}
                      />
                    </button>

                  </article>
                );
              }
            )}

          </div>

        </div>
      </section>

      {/* ======================================================
          LEADERSHIP
          ====================================================== */}

      <section
        id="leadership"
        className="section leadership-section section-blue"
      >
        <div className="container">

          <div className="section-head">

            <div>

              <p className="section-kicker">
                06 / LEADERSHIP &
                CERTIFICATIONS
              </p>

              <h2>
                Leadership,{" "}
                <span>
                  community &
                  certification
                </span>
              </h2>

            </div>

            <p>
              Leadership experience
              and professional
              learning that complement
              the technical foundation.
            </p>

          </div>

          <div className="leadership-layout">

            <div className="leadership-grid">

              <div className="leadership-interactive-card">

                <Users size={20} />

                <h3>
                  Association of
                  Electronics
                  Telecommunication
                  (AET)
                </h3>

                <p>
                  Coordinator,
                  Spiritual/Religious
                  Affairs Division
                  (2024–2025); Event
                  Coordinator, Student
                  Day 2024; Research &
                  Technology Division
                  Member (2023–2024);
                  Fiber Optic Workshop
                  Instructor (2024).
                </p>

              </div>

              <div className="leadership-interactive-card">

                <Sparkles size={20} />

                <h3>
                  Cisco Netriders
                  Student Activity Unit
                </h3>

                <p>
                  Head of Events Division
                  for Sumatera Networking
                  Competition VII 2024,
                  leading planning,
                  technical implementation,
                  and committee
                  coordination. Also
                  served in Public
                  Relations for Internal
                  Cisco Networking
                  Competition 2024.
                </p>

              </div>

            </div>

            <aside className="cert-panel leadership-interactive-card">

              <div className="cert-panel-head">

                <div className="cert-icon">
                  <Award size={22} />
                </div>

                <div>

                  <p className="mini-label">
                    CERTIFICATION
                  </p>

                  <h3>
                    CCNA —
                    Introduction to
                    Networks
                  </h3>

                </div>

              </div>

              <p>
                Cisco Networking
                Academy · Verification
                available on Credly
              </p>

            </aside>

          </div>

        </div>
      </section>

      {/* ======================================================
          CONTACT
          ====================================================== */}

      <section
        id="contact"
        className="section contact section-white"
      >
        <div className="container contact-grid">

          <div>

            <p className="section-kicker">
              07 / CONTACT
            </p>

            <h2>
              Let&apos;s build
              something{" "}
              <span>
                connected.
              </span>
            </h2>

            <p className="contact-copy">
              I am actively seeking
              opportunities in
              electronics, embedded
              systems/IoT, RF/EMC,
              and technical field
              support.
            </p>

            <a
              className="contact-email"
              href="mailto:ahmaddzaaki.01@gmail.com"
            >
              <BrandIcon
                brand="gmail"
                size={19}
              />
              ahmaddzaaki.01@gmail.com
            </a>

            <a
              className="contact-email"
              href="https://www.linkedin.com/in/ahmad-dzaki/"
              target="_blank"
              rel="noreferrer"
            >
              <BrandIcon
                brand="linkedin"
                size={19}
              />
              linkedin.com/in/ahmad-dzaki
            </a>

            <div className="contact-meta">

              <a
                href="https://wa.me/6281927856578"
                target="_blank"
                rel="noreferrer"
                className="contact-meta-item"
              >
                <BrandIcon
                  brand="whatsapp"
                  size={17}
                />
                +62 819-2785-6578
              </a>

              <a
                href="https://www.instagram.com/ahmaddzaaki/"
                target="_blank"
                rel="noreferrer"
                className="contact-meta-item"
              >
                <BrandIcon
                  brand="instagram"
                  size={17}
                />
                @ahmaddzaaki
              </a>

              <div className="contact-location">

                <MapPin size={17} />

                <span>
                  Pekanbaru, Riau,
                  Indonesia
                </span>

              </div>

            </div>

          </div>

          <form
            className="contact-form"
            onSubmit={
              handleSubmit
            }
          >

            <label>
              Name

              <input
                name="name"
                required
                placeholder="Your name"
              />
            </label>

            <label>
              Email

              <input
                name="email"
                type="email"
                required
                placeholder="your@email.com"
              />
            </label>

            <label>
              Message

              <textarea
                name="message"
                rows={6}
                required
                placeholder="Tell me about an opportunity or project..."
              />
            </label>

            <button
              className="btn primary"
              type="submit"
            >
              Send message
              <Send size={17} />
            </button>

          </form>

        </div>
      </section>

      {/* ======================================================
          FOOTER
          ====================================================== */}

      <footer>

        <div className="container footer-inner">

          <div>

            <strong>
              AHMAD DZAKI
            </strong>

            <span>
              Electronics Engineering ·
              Telecommunications
            </span>

          </div>

          <div className="footer-links">

            <a
              href="mailto:ahmaddzaaki.01@gmail.com"
              aria-label="Email"
            >
              <BrandIcon
                brand="gmail"
                size={16}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/ahmad-dzaki/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <BrandIcon
                brand="linkedin"
                size={16}
              />
            </a>

            <a
              href="https://www.instagram.com/ahmaddzaaki/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <BrandIcon
                brand="instagram"
                size={16}
              />
            </a>

          </div>

          <small>
            © 2026 Ahmad Dzaki
          </small>

        </div>

      </footer>

      {/* ======================================================
          PROJECT MODAL
          ====================================================== */}

      {selected && (
        <div
          className="modal-backdrop"
          onClick={() =>
            setSelected(null)
          }
        >

          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="modal-close"
              onClick={() =>
                setSelected(null)
              }
              aria-label="Close project details"
            >
              <X size={19} />
            </button>

            <span className="project-category">
              {selected.category}
            </span>

            <h2>
              {selected.title}
            </h2>

            <p>
              {selected.description}
            </p>

            <div className="modal-tags">

              {selected.tags.map(
                (t) => (
                  <span key={t}>
                    {t}
                  </span>
                )
              )}

            </div>

            <div className="project-gallery">

              <div className="gallery-heading">

                <span>
                  PROJECT VISUALS
                </span>

                <small>
                  {selected.images?.length
                    ? `${selected.images.length} image${
                        selected.images.length >
                        1
                          ? "s"
                          : ""
                      }`
                    : "Ready for your screenshots"}
                </small>

              </div>

              {selected.images?.length ? (
                <div className="gallery-grid">

                  {selected.images.map(
                    (src, i) => (
                      <a
                        className="gallery-item"
                        href={src}
                        target="_blank"
                        rel="noreferrer"
                        key={src}
                      >

                        <img
                          src={src}
                          alt={`${selected.title} preview ${
                            i + 1
                          }`}
                        />

                        <span>
                          View image ↗
                        </span>

                      </a>
                    )
                  )}

                </div>
              ) : (
                <div className="gallery-empty">

                  <div className="gallery-empty-icon">
                    <SelectedIcon
                      size={28}
                    />
                  </div>

                  <strong>
                    Add project
                    screenshots here
                  </strong>

                  <p>
                    Place your image in{" "}
                    <code>
                      public/projects/
                    </code>
                    , then add its
                    path to this project&apos;s{" "}
                    <code>
                      images
                    </code>{" "}
                    array in{" "}
                    <code>
                      components/Portfolio.tsx
                    </code>
                    .
                  </p>

                  <code>
                    {`images: ["/projects/your-image.jpg"]`}
                  </code>

                </div>
              )}

            </div>

          </div>

        </div>
      )}

    </main>
  );
}