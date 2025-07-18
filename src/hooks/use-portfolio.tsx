"use client"

import { useState, useEffect, createContext, useContext } from "react"

interface PortfolioContextType {
  theme: "light" | "dark"
  setTheme: (theme: "light" | "dark") => void
  toggleTheme: () => void
  language: "es" | "en"
  setLanguage: (language: "es" | "en") => void
  animations: boolean
  setAnimations: (animations: boolean) => void
  activeSection: string
  setActiveSection: (section: string) => void
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined)

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [language, setLanguage] = useState<"es" | "en">("es")
  const [animations, setAnimations] = useState(true)
  const [activeSection, setActiveSection] = useState("")

  // Detectar tema del sistema
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      
      const initialTheme = savedTheme || systemTheme
      setTheme(initialTheme)
      
      if (initialTheme === "dark") {
        document.documentElement.classList.add("dark")
      }
    }
  }, [])

  // Guardar preferencias en localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme)
      localStorage.setItem("language", language)
      localStorage.setItem("animations", animations.toString())
    }
  }, [theme, language, animations])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    
    if (typeof window !== "undefined") {
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }
  }

  const value = {
    theme,
    setTheme,
    toggleTheme,
    language,
    setLanguage,
    animations,
    setAnimations,
    activeSection,
    setActiveSection
  }

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  )
}

export function usePortfolio() {
  const context = useContext(PortfolioContext)
  if (context === undefined) {
    throw new Error("usePortfolio must be used within a PortfolioProvider")
  }
  return context
}

// Hook para detectar scroll
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const updatePosition = () => {
      const position = window.pageYOffset
      setScrollPosition(position)
      setIsScrolled(position > 50)
    }

    window.addEventListener("scroll", updatePosition)
    updatePosition()

    return () => window.removeEventListener("scroll", updatePosition)
  }, [])

  return { scrollPosition, isScrolled }
}

// Hook para detectar sección activa
export function useActiveSection(sections: string[]) {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(id => document.getElementById(id)).filter(Boolean)
      
      const currentSection = sectionElements.find(section => {
        if (!section) return false
        const rect = section.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  return activeSection
}

// Hook para animaciones con Intersection Observer
export function useIntersectionObserver(options?: IntersectionObserverInit) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [ref, setRef] = useState<Element | null>(null)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    observer.observe(ref)

    return () => observer.disconnect()
  }, [ref, options])

  return [setRef, isIntersecting] as const
}

// Hook para copiar al portapapeles
export function useClipboard() {
  const [isCopied, setIsCopied] = useState(false)

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (error) {
      console.error("Failed to copy text:", error)
    }
  }

  return { copy, isCopied }
}
