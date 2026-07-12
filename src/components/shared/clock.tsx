"use client";

import { useEffect, useState } from "react";

/*
 * Relógio ao vivo no cabeçalho do "documento" — renderiza placeholder
 * até montar para não divergir na hidratação.
 */
export function Clock() {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const update = () => setNow(formatter.format(new Date()));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return <span className="tabular-nums">{now ?? "--:--:--"}</span>;
}
