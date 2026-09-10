import {
  BarChart3,
  Bell,
  BookOpen,
  Calendar,
  ClipboardCheck,
  FileText,
  FlaskConical,
  GraduationCap,
  Moon,
  Palmtree,
  Smartphone,
  Target,
  Users,
  WifiOff,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  ClipboardCheck,
  Calendar,
  Bell,
  BookOpen,
  FileText,
  GraduationCap,
  Users,
  Palmtree,
  FlaskConical,
  WifiOff,
  Smartphone,
  Target,
  BarChart3,
  Moon,
};

interface FeatureIconProps {
  name: string;
  className?: string;
}

export function FeatureIcon({ name, className = "h-5 w-5" }: FeatureIconProps) {
  const Icon = iconMap[name] ?? BookOpen;
  return <Icon className={className} aria-hidden="true" />;
}
