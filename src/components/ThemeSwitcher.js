"use client";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/switch";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div>
      <BsFillMoonStarsFill
        button
        onClick={() => setTheme("dark")}
        className="cursor-pointer text-2xl dark:hidden"
      />
      <BsSun
        onClick={() => setTheme("light")}
        className="cursor-pointer text-2xl hidden dark:block text-white"
      />
    </div>
  );
}
