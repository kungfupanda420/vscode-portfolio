"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import {
  User,
  Share2,
  Briefcase,
  Wrench,
  Folder,
  Users,
  X,
  Menu,
  TerminalIcon,
  ChevronRight,
  ChevronDown,
} from "lucide-react"
import Terminal from "@/components/Terminal"
import AboutSection from "@/components/sections/AboutSection"
import SocialsSection from "@/components/sections/SocialsSection"
import ExperienceSection from "@/components/sections/ExperienceSection"
import ToolsSection from "@/components/sections/ToolsSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import LeadershipSection from "@/components/sections/LeadershipSection"

interface Tab {
  id: string
  title: string
  component: React.ComponentType
  icon: React.ComponentType<{ size?: number }>
}

const activityBarItems = [
  { id: "about", icon: User, label: "About", file: "About.md" },
  { id: "socials", icon: Share2, label: "Socials", file: "Socials.json" },
  { id: "experience", icon: Briefcase, label: "Experience", file: "Experience.log" },
  { id: "tools", icon: Wrench, label: "Tools", file: "Tools.data" },
  { id: "projects", icon: Folder, label: "Projects", file: "Projects.catalog" },
  { id: "leadership", icon: Users, label: "Leadership", file: "Leadership.team" },
]

const sectionComponents = {
  about: AboutSection,
  socials: SocialsSection,
  experience: ExperienceSection,
  tools: ToolsSection,
  projects: ProjectsSection,
  leadership: LeadershipSection,
}

export default function VSCodePortfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [openTabs, setOpenTabs] = useState<Tab[]>([])
  const [activeTab, setActiveTab] = useState<string>("")
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [terminalOpen, setTerminalOpen] = useState(false)
  const [explorerExpanded, setExplorerExpanded] = useState(true)

  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<Array<{ section: string; text: string; action: () => void }>>([])

  const searchableContent = [
    // About section
    { section: "About", text: "GNANA PRATHEEK REDDY", action: () => openTab("about") },
    { section: "About", text: "B.Tech Computer Science Engineering", action: () => openTab("about") },
    { section: "About", text: "NIT Calicut", action: () => openTab("about") },
    { section: "About", text: "Passionate developer", action: () => openTab("about") },
    { section: "About", text: "full-stack development", action: () => openTab("about") },
    { section: "About", text: "AI/ML", action: () => openTab("about") },
    { section: "About", text: "leadership", action: () => openTab("about") },

    // Socials section
    { section: "Socials", text: "pratheek18183@gmail.com", action: () => openTab("socials") },
    { section: "Socials", text: "+917893028540", action: () => openTab("socials") },
    { section: "Socials", text: "linkedin.com/in/gnana-pratheek-reddy-kunduru", action: () => openTab("socials") },
    { section: "Socials", text: "github.com/Pratheek", action: () => openTab("socials") },
    { section: "Socials", text: "Email", action: () => openTab("socials") },
    { section: "Socials", text: "Phone", action: () => openTab("socials") },
    { section: "Socials", text: "LinkedIn", action: () => openTab("socials") },
    { section: "Socials", text: "GitHub", action: () => openTab("socials") },

    // Experience section
    { section: "Experience", text: "Apprentice Engineer", action: () => openTab("experience") },
    { section: "Experience", text: "CCD, NIT Calicut", action: () => openTab("experience") },
    { section: "Experience", text: "May 2025-Present", action: () => openTab("experience") },
    { section: "Experience", text: "Tathva Tech Team", action: () => openTab("experience") },
    { section: "Experience", text: "Event management", action: () => openTab("experience") },
    { section: "Experience", text: "GDG", action: () => openTab("experience") },
    { section: "Experience", text: "Chatbot development", action: () => openTab("experience") },
    { section: "Experience", text: "ISTE Tech Lead", action: () => openTab("experience") },
    { section: "Experience", text: "Blog platforms", action: () => openTab("experience") },
    { section: "Experience", text: "Streetplay Captain", action: () => openTab("experience") },

    // Tools section
    { section: "Tools", text: "C/C++", action: () => openTab("tools") },
    { section: "Tools", text: "Python", action: () => openTab("tools") },
    { section: "Tools", text: "JavaScript", action: () => openTab("tools") },
    { section: "Tools", text: "TypeScript", action: () => openTab("tools") },
    { section: "Tools", text: "React", action: () => openTab("tools") },
    { section: "Tools", text: "Node.js", action: () => openTab("tools") },
    { section: "Tools", text: "Next.js", action: () => openTab("tools") },
    { section: "Tools", text: "Firebase", action: () => openTab("tools") },
    { section: "Tools", text: "MySQL", action: () => openTab("tools") },
    { section: "Tools", text: "Deep Learning", action: () => openTab("tools") },
    { section: "Tools", text: "NLP", action: () => openTab("tools") },
    { section: "Tools", text: "LLMs", action: () => openTab("tools") },
    { section: "Tools", text: "OpenCV", action: () => openTab("tools") },
    { section: "Tools", text: "MediaPipe", action: () => openTab("tools") },
    { section: "Tools", text: "Flask", action: () => openTab("tools") },
    { section: "Tools", text: "PHP", action: () => openTab("tools") },

    // Projects section
    { section: "Projects", text: "SIP Portal", action: () => openTab("projects") },
    { section: "Projects", text: "AI Library Assistant", action: () => openTab("projects") },
    { section: "Projects", text: "8k+ users", action: () => openTab("projects") },
    { section: "Projects", text: "Geo-attendance Tracker", action: () => openTab("projects") },
    { section: "Projects", text: "AI Image Styler", action: () => openTab("projects") },
    { section: "Projects", text: "Study Resource Tutor", action: () => openTab("projects") },
    { section: "Projects", text: "ISTE Website", action: () => openTab("projects") },
    { section: "Projects", text: "400+ registrations", action: () => openTab("projects") },
    { section: "Projects", text: "Sign Language Translator", action: () => openTab("projects") },
    { section: "Projects", text: "Centralized internship system", action: () => openTab("projects") },
    { section: "Projects", text: "Real-time validation", action: () => openTab("projects") },
    { section: "Projects", text: "Custom artwork generator", action: () => openTab("projects") },
    { section: "Projects", text: "Document parsing", action: () => openTab("projects") },

    // Leadership section
    { section: "Leadership", text: "Tech Lead", action: () => openTab("leadership") },
    { section: "Leadership", text: "Team management", action: () => openTab("leadership") },
    { section: "Leadership", text: "Event coordination", action: () => openTab("leadership") },
    { section: "Leadership", text: "Financial management", action: () => openTab("leadership") },
    { section: "Leadership", text: "Community engagement", action: () => openTab("leadership") },
    { section: "Leadership", text: "Technical planning", action: () => openTab("leadership") },
  ]

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && searchResults.length > 0) {
      searchResults[0].action()
      setSearchQuery("")
      setSearchResults([])
    }
    if (e.key === "Escape") {
      setSearchQuery("")
      setSearchResults([])
    }
  }

  const handleSearchResultClick = (result: { section: string; text: string; action: () => void }) => {
    result.action()
    setSearchQuery("")
    setSearchResults([])
  }

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = searchableContent
        .filter(
          (item) =>
            item.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.section.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        .slice(0, 8) // Limit to 8 results
      setSearchResults(filtered)
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  useEffect(() => {
    // Open About tab by default
    openTab("about")
  }, [])

  const openTab = (sectionId: string) => {
    const item = activityBarItems.find((item) => item.id === sectionId)
    if (!item) return

    const existingTab = openTabs.find((tab) => tab.id === sectionId)
    if (existingTab) {
      setActiveTab(sectionId)
      return
    }

    const newTab: Tab = {
      id: sectionId,
      title: item.file,
      component: sectionComponents[sectionId as keyof typeof sectionComponents],
      icon: item.icon,
    }

    setOpenTabs((prev) => [...prev, newTab])
    setActiveTab(sectionId)
  }

  const closeTab = (tabId: string) => {
    setOpenTabs((prev) => prev.filter((tab) => tab.id !== tabId))
    if (activeTab === tabId) {
      const remainingTabs = openTabs.filter((tab) => tab.id !== tabId)
      setActiveTab(remainingTabs.length > 0 ? remainingTabs[remainingTabs.length - 1].id : "")
    }
  }

  const toggleTerminal = () => {
    setTerminalOpen(!terminalOpen)
  }

  const handleTerminalCommand = (command: string) => {
    const cmd = command.toLowerCase().trim()

    if (cmd.startsWith("open ")) {
      const section = cmd.replace("open ", "")
      const sectionItem = activityBarItems.find((item) => item.id === section || item.label.toLowerCase() === section)
      if (sectionItem) {
        openTab(sectionItem.id)
        return `Opened ${sectionItem.file}`
      }
      return `Section "${section}" not found`
    }

    return null // Let Terminal component handle other commands
  }

  const ActiveTabComponent = openTabs.find((tab) => tab.id === activeTab)?.component

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "`") {
        e.preventDefault()
        toggleTerminal()
      }
    },
    [toggleTerminal],
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown, toggleTerminal])

  return (
    <div className="h-screen vscode-editor flex flex-col overflow-hidden">
      {/* Title Bar */}
      <div className="h-8 vscode-titlebar flex items-center px-2 border-b border-[var(--vscode-sideBar-border)]">
        <div className="flex items-center space-x-4">
          <span>Pratheek's Portfolio - Visual Studio Code</span>
        </div>
      </div>

      {/* Menu Bar */}
      <div className="h-8 vscode-menubar flex items-center px-2 border-b border-[var(--vscode-sideBar-border)]">
        <div className="flex items-center space-x-4">
          <span className="vscode-menubar-item px-2 py-1 cursor-pointer rounded" onClick={() => openTab("about")}>
            About
          </span>
          <span className="vscode-menubar-item px-2 py-1 cursor-pointer rounded" onClick={() => openTab("socials")}>
            Socials
          </span>
          <span className="vscode-menubar-item px-2 py-1 cursor-pointer rounded" onClick={() => openTab("experience")}>
            Experience
          </span>
          <span className="vscode-menubar-item px-2 py-1 cursor-pointer rounded" onClick={() => openTab("tools")}>
            Tools
          </span>
          <span className="vscode-menubar-item px-2 py-1 cursor-pointer rounded" onClick={() => openTab("projects")}>
            Projects
          </span>
          <span className="vscode-menubar-item px-2 py-1 cursor-pointer rounded" onClick={() => openTab("leadership")}>
            Leadership
          </span>
          <span className="vscode-menubar-item px-2 py-1 cursor-pointer rounded" onClick={toggleTerminal}>
            Terminal
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search portfolio..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              className="w-full vscode-input px-3 py-1 rounded text-sm"
            />
            {searchResults.length > 0 && searchQuery && (
              <div className="absolute top-full left-0 right-0 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] rounded-b max-h-60 overflow-y-auto z-50">
                {searchResults.map((result, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 vscode-list-item cursor-pointer text-sm border-b border-[var(--vscode-input-border)] last:border-b-0"
                    onClick={() => handleSearchResultClick(result)}
                  >
                    <div className="syntax-type text-xs">{result.section}</div>
                    <div className="text-[var(--vscode-editor-foreground)]">{result.text}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="ml-auto">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1 vscode-menubar-item rounded">
            <Menu size={16} />
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        {sidebarOpen && (
          <div className="w-64 vscode-sidebar flex flex-col">
            <div className="p-2 text-xs uppercase tracking-wide font-semibold">Explorer</div>

            <div className="flex-1 overflow-auto">
              <div className="px-2">
                <div
                  className="flex items-center py-1 vscode-list-item cursor-pointer"
                  onClick={() => setExplorerExpanded(!explorerExpanded)}
                >
                  {explorerExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                  <span className="ml-1 text-sm font-semibold">PORTFOLIO</span>
                </div>

                {explorerExpanded && (
                  <div className="ml-4 space-y-1">
                    {activityBarItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center py-1 px-2 vscode-list-item cursor-pointer text-sm"
                        onClick={() => openTab(item.id)}
                      >
                        <item.icon size={16} className="mr-2 syntax-variable" />
                        <span>{item.file}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Tabs */}
          {openTabs.length > 0 && (
            <div className="flex bg-[var(--vscode-tab-inactiveBackground)] border-b border-[var(--vscode-tab-border)] overflow-x-auto">
              {openTabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`flex items-center px-3 py-2 border-r border-[var(--vscode-tab-border)] cursor-pointer min-w-0 ${
                    activeTab === tab.id ? "vscode-tab-active" : "vscode-tab-inactive"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <tab.icon size={16} className="mr-2 flex-shrink-0" />
                  <span className="text-sm truncate">{tab.title}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      closeTab(tab.id)
                    }}
                    className="ml-2 p-1 hover:bg-[var(--vscode-list-hoverBackground)] rounded flex-shrink-0"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Content */}
          <div className={`flex-1 overflow-auto vscode-editor ${terminalOpen ? "h-1/2" : ""}`}>
            {ActiveTabComponent ? (
              <ActiveTabComponent />
            ) : (
              <div className="flex items-center justify-center h-full text-[var(--vscode-tab-inactiveForeground)]">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4 text-[var(--vscode-editor-foreground)]">
                    Welcome to Pratheek's Portfolio
                  </h2>
                  <p className="mb-4">Select a section from the menu bar to get started</p>
                  <p className="text-sm">Press Ctrl+` to open the terminal</p>
                </div>
              </div>
            )}
          </div>

          {/* Terminal */}
          {terminalOpen && (
            <div className="h-1/2 border-t border-[var(--vscode-sideBar-border)]">
              <div className="h-8 bg-[var(--vscode-tab-inactiveBackground)] flex items-center px-3 text-sm border-b border-[var(--vscode-sideBar-border)]">
                <TerminalIcon size={16} className="mr-2" />
                <span>Terminal</span>
                <button
                  onClick={toggleTerminal}
                  className="ml-auto p-1 hover:bg-[var(--vscode-list-hoverBackground)] rounded"
                >
                  <X size={14} />
                </button>
              </div>
              <Terminal onCommand={handleTerminalCommand} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
