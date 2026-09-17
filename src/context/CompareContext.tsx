"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Provider } from "@/lib/data";

interface CompareContextType {
  comparedProviders: Provider[];
  addToCompare: (provider: Provider) => boolean;
  removeFromCompare: (providerId: string) => void;
  clearCompare: () => void;
  isInCompare: (providerId: string) => boolean;
  isCompareModalOpen: boolean;
  setIsCompareModalOpen: (open: boolean) => void;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export function CompareProvider({ children }: { children: React.ReactNode }) {
  const [comparedProviders, setComparedProviders] = useState<Provider[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("graphicsidea_compare");
      if (saved) {
        setComparedProviders(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("graphicsidea_compare", JSON.stringify(comparedProviders));
    } catch {
      // ignore
    }
  }, [comparedProviders]);

  const addToCompare = (provider: Provider): boolean => {
    if (comparedProviders.some((p) => p.id === provider.id)) {
      return false;
    }
    if (comparedProviders.length >= 3) {
      alert("You can compare up to 3 providers simultaneously. Remove one to add another.");
      return false;
    }
    setComparedProviders((prev) => [...prev, provider]);
    return true;
  };

  const removeFromCompare = (providerId: string) => {
    setComparedProviders((prev) => prev.filter((p) => p.id !== providerId));
  };

  const clearCompare = () => {
    setComparedProviders([]);
    setIsCompareModalOpen(false);
  };

  const isInCompare = (providerId: string) => {
    return comparedProviders.some((p) => p.id === providerId);
  };

  return (
    <CompareContext.Provider
      value={{
        comparedProviders,
        addToCompare,
        removeFromCompare,
        clearCompare,
        isInCompare,
        isCompareModalOpen,
        setIsCompareModalOpen,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error("useCompare must be used within a CompareProvider");
  }
  return context;
}
