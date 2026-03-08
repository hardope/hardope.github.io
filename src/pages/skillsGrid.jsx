import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  SiPython, SiNodedotjs, SiNestjs, SiReact, SiNextdotjs, SiDocker,
  SiPostgresql, SiDjango, SiFastapi, SiExpress, SiRabbitmq,
} from "react-icons/si";
import { FaAws, FaDigitalOcean, FaJava, FaNetworkWired } from "react-icons/fa";
import { FaC } from "react-icons/fa6";
import { DiGithub, DiGoogleCloudPlatform, DiRedis } from "react-icons/di";
import { GitBranch } from "lucide-react";

const skillsData = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "DRF", icon: SiDjango, color: "#3776AB" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "Node.js", icon: SiNodedotjs, color: "#3C873A" },
  { name: "NestJs", icon: SiNestjs, color: "#E0234E" },
  { name: "ExpressJs", icon: SiExpress, color: "#888888" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "NextJs", icon: SiNextdotjs, color: "#CCCCCC" },
  { name: "Docker", icon: SiDocker, color: "#0db7ed" },
  { name: "RabbitMQ", icon: SiRabbitmq, color: "#FF6600" },
  { name: "Redis", icon: DiRedis, color: "#DC382D" },
  { name: "Git", icon: GitBranch, color: "#F05032" },
  { name: "GitHub", icon: DiGithub, color: "#AAAAAA" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "GCP", icon: DiGoogleCloudPlatform, color: "#4285F4" },
  { name: "DigitalOcean", icon: FaDigitalOcean, color: "#0080ff" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "C", icon: FaC, color: "#888888" },
  { name: "MicroServices", icon: FaNetworkWired, color: "#61DAFB" },
];

const ICON_SIZE = 72; // px, size of each icon cell
const MAGNIFY_RADIUS = 140; // px, radius of magnification effect
const MAX_SCALE = 1.8;
const MIN_SCALE = 0.7;
const COLS = 5;

export default function SkillsGrid() {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState(null);

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0]?.clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0]?.clientY : e.clientY;
    if (clientX == null || clientY == null) return;
    setMousePos({ x: clientX - rect.left, y: clientY - rect.top });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos(null);
  }, []);

  const getIconCenter = (index) => {
    const col = index % COLS;
    const row = Math.floor(index / COLS);
    const gap = 8;
    return {
      x: col * (ICON_SIZE + gap) + ICON_SIZE / 2,
      y: row * (ICON_SIZE + gap) + ICON_SIZE / 2,
    };
  };

  const getScale = (index) => {
    if (!mousePos) return 1;
    const center = getIconCenter(index);
    const dx = mousePos.x - center.x;
    const dy = mousePos.y - center.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > MAGNIFY_RADIUS) return MIN_SCALE;

    // Smooth cosine falloff for Apple Watch effect
    const normalized = distance / MAGNIFY_RADIUS;
    const factor = (Math.cos(normalized * Math.PI) + 1) / 2;
    return MIN_SCALE + (MAX_SCALE - MIN_SCALE) * factor;
  };

  const rows = Math.ceil(skillsData.length / COLS);
  const gap = 8;
  const containerWidth = COLS * (ICON_SIZE + gap) - gap;
  const containerHeight = rows * (ICON_SIZE + gap) - gap;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchEnd={handleMouseLeave}
      className="relative mx-auto cursor-crosshair"
      style={{
        width: containerWidth,
        height: containerHeight,
      }}
    >
      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: `${ICON_SIZE + gap}px ${ICON_SIZE + gap}px`,
        }}
      />

      {/* Glow following mouse */}
      {mousePos && (
        <div
          className="absolute rounded-full pointer-events-none transition-opacity duration-200"
          style={{
            width: MAGNIFY_RADIUS * 2,
            height: MAGNIFY_RADIUS * 2,
            left: mousePos.x - MAGNIFY_RADIUS,
            top: mousePos.y - MAGNIFY_RADIUS,
            background: `radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)`,
          }}
        />
      )}

      {skillsData.map((skill, index) => {
        const col = index % COLS;
        const row = Math.floor(index / COLS);
        const scale = getScale(index);
        const Icon = skill.icon;
        const opacity = mousePos ? 0.3 + 0.7 * ((scale - MIN_SCALE) / (MAX_SCALE - MIN_SCALE)) : 0.8;

        return (
          <motion.div
            key={skill.name}
            className="absolute flex flex-col items-center justify-center rounded-xl"
            style={{
              width: ICON_SIZE,
              height: ICON_SIZE,
              left: col * (ICON_SIZE + gap),
              top: row * (ICON_SIZE + gap),
            }}
            animate={{
              scale,
              opacity,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
              mass: 0.5,
            }}
          >
            <Icon
              size={28}
              style={{ color: skill.color }}
              className="mb-1 drop-shadow-lg"
            />
            <span
              className="text-[9px] font-medium text-center leading-tight"
              style={{
                color: skill.color,
                opacity: 0.9,
              }}
            >
              {skill.name}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
