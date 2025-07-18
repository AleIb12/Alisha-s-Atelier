"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ArrowUp, Moon, Sun } from "lucide-react"

interface NavigationItem {
  id: string
  label: string
  href: string
  description?: string
  badge?: string
}

interface EnhancedNavigationProps {
  items: NavigationItem[]
  className?: string
  showBackToTop?: boolean
  showThemeToggle?: boolean
}

export function EnhancedNavigation({ 
  items, 
  className,
  showBackToTop = true,
  showThemeToggle = true 
}: EnhancedNavigationProps) {
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Detectar sección activa
      const sections = items.map(item => document.getElementById(item.id)).filter(Boolean)
      const currentSection = sections.find(section => {
        if (!section) return false
        const rect = section.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })
      
      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [items])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark")
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Navegación principal */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg border-b border-purple-200/30 dark:border-purple-800/30" 
          : "bg-transparent",
        className
      )}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg"></div>
            <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>

          {/* Navegación desktop */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-1">
              {items.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <NavigationMenuLink asChild>
                    <Button
                      variant={activeSection === item.id ? "default" : "ghost"}
                      onClick={() => scrollToSection(item.id)}
                      className={cn(
                        "transition-all duration-300",
                        activeSection === item.id && "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                      )}
                    >
                      {item.label}
                      {item.badge && (
                        <Badge variant="secondary" className="ml-2 text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </Button>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Controles */}
          <div className="flex items-center space-x-2">
            {showThemeToggle && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={toggleTheme}
                className="rounded-full"
              >
                {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </Button>
            )}

            {/* Navegación móvil */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="space-y-6 mt-6">
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id}>
                        <Button
                          variant={activeSection === item.id ? "default" : "ghost"}
                          onClick={() => scrollToSection(item.id)}
                          className={cn(
                            "w-full justify-start transition-all duration-300",
                            activeSection === item.id && "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                          )}
                        >
                          {item.label}
                          {item.badge && (
                            <Badge variant="secondary" className="ml-auto text-xs">
                              {item.badge}
                            </Badge>
                          )}
                        </Button>
                        {item.description && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 ml-4">
                            {item.description}
                          </p>
                        )}
                        <Separator className="mt-4" />
                      </div>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Botón de volver arriba */}
      {showBackToTop && isScrolled && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 rounded-full w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}

      {/* Indicador de progreso de scroll */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 transform origin-left transition-transform duration-150"
           style={{ 
             transform: `scaleX(${Math.min(window.scrollY / (document.body.scrollHeight - window.innerHeight), 1)})` 
           }} 
      />
    </>
  )
}
