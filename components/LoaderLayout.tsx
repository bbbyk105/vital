// components/LoaderLayout.tsx
"use client";

import Loader from "@/components/Loader";
import { useState, useEffect } from "react";

export default function LoaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <Loader /> : <>{children}</>;
}
