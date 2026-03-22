import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark" | "system";

function resolveTheme(theme: Theme): "light" | "dark" {
  if (theme === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return theme;
}

function applyResolved(resolved: "light" | "dark") {
  document.documentElement.classList.toggle("dark", resolved === "dark");
  document.documentElement.style.colorScheme = resolved;
}

const order: Theme[] = ["light", "dark", "system"];

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const initial: Theme = stored === "light" || stored === "dark" ? stored : "system";
    setTheme(initial);
    applyResolved(resolveTheme(initial));

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      const current = localStorage.getItem("theme");
      if (!current || current === "system") {
        applyResolved(resolveTheme("system"));
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const cycle = useCallback(() => {
    setTheme((prev) => {
      const next = order[(order.indexOf(prev) + 1) % order.length];
      localStorage.setItem("theme", next);
      applyResolved(resolveTheme(next));
      return next;
    });
  }, []);

  return (
    <button
      type="button"
      onClick={cycle}
      className="inline-flex size-9 items-center justify-center rounded-full border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground transition-all outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
      aria-label={`Theme: ${theme}. Click to change.`}
      title={theme.charAt(0).toUpperCase() + theme.slice(1)}
    >
      {theme === "light" && <Sun className="h-5 w-5" />}
      {theme === "dark" && <Moon className="h-5 w-5" />}
      {theme === "system" && <Monitor className="h-5 w-5" />}
    </button>
  );
}
