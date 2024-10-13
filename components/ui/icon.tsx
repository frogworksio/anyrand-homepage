import { icons } from "lucide-react";

export const Icon = ({
  name,
  color = "currentColor", // Set default color
  size,
  className,
}: {
  name: keyof typeof icons;
  color?: string; // Mark color as optional
  size: number;
  className?: string;
}) => {
  const LucideIcon = icons[name as keyof typeof icons];

  return <LucideIcon color={color} size={size} className={className} />;
};
