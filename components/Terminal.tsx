"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

interface TerminalProps {
  onCommand?: (command: string) => string | null
}

const Terminal: React.FC<TerminalProps> = ({ onCommand }) => {
  const [history, setHistory] = useState<string[]>([
    "Welcome to Pratheek's Portfolio Terminal",
    'Type "help" to see available commands',
    "",
  ])
  const [currentCommand, setCurrentCommand] = useState("")
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const commands = {
    help: () => [
      "Available commands:",
      "  help          - Show this help message",
      "  clear         - Clear the terminal",
      "  about         - Show about information",
      "  socials       - Display social links",
      "  contact       - Show contact information",
      "  skills        - List technical skills",
      "  projects      - Show project list",
      "  experience    - Display work experience",
      "  open <section> - Open a specific section",
      "  whoami        - Display current user",
      "  pwd           - Show current directory",
      "  ls            - List available sections",
      "",
    ],
    clear: () => {
      setHistory([])
      return []
    },
    about: () => [
      "GNANA PRATHEEK REDDY",
      "B.Tech Computer Science Engineering, NIT Calicut",
      "Passionate developer with expertise in full-stack development and AI/ML",
      "",
    ],
    socials: () => [
      "Social Links:",
      "📧 Email: pratheek18183@gmail.com",
      "📱 Phone: +917893028540",
      "💼 LinkedIn: linkedin.com/in/gnana-pratheek-reddy-kunduru",
      "🐙 GitHub: github.com/Pratheek",
      "",
    ],
    contact: () => ["Contact Information:", "Email: pratheek18183@gmail.com", "Phone: +917893028540", ""],
    skills: () => [
      "Technical Skills:",
      "💻 Programming: C/C++, Python",
      "🌐 Web: HTML/CSS/JS, React, Node.js, Next.js, Firebase, SQL",
      "🤖 AI/ML: Deep Learning, NLP, LLMs",
      "",
    ],
    projects: () => [
      "Featured Projects:",
      "1. SIP Portal - Centralized internship system (Node.js, React, MySQL)",
      "2. AI Library Assistant - Served 8k+ users (Python, Flask)",
      "3. Geo-attendance Tracker - Real-time validation (PHP, MySQL)",
      "4. AI Image Styler - Custom artwork generator",
      "5. Study Resource Tutor - Document parsing (Python, LLM, OCR)",
      "6. ISTE Website - 400+ registrations (React, Node.js)",
      "7. Sign Language Translator - (OpenCV, MediaPipe)",
      "",
    ],
    experience: () => [
      "Work Experience:",
      "🏢 Apprentice Engineer @ CCD, NIT Calicut (May 2025-Present)",
      "",
      "Leadership Roles:",
      "• Tathva Tech Team - Event management",
      "• GDG - Chatbot development",
      "• ISTE Tech Lead - Blog platforms",
      "• Streetplay Captain/Treasurer",
      "",
    ],
    whoami: () => ["pratheek@portfolio:~$", ""],
    pwd: () => ["/home/pratheek/portfolio", ""],
    ls: () => ["about.md      socials.json    experience.log", "tools.data    projects.catalog leadership.team", ""],
  }

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()

    // Add command to history
    setHistory((prev) => [...prev, `pratheek@portfolio:~$ ${cmd}`])

    // Check if parent component wants to handle the command
    if (onCommand) {
      const result = onCommand(cmd)
      if (result) {
        setHistory((prev) => [...prev, result, ""])
        return
      }
    }

    // Handle built-in commands
    if (trimmedCmd === "clear") {
      commands.clear()
      return
    }

    const commandFunc = commands[trimmedCmd as keyof typeof commands]
    if (commandFunc) {
      const output = commandFunc()
      setHistory((prev) => [...prev, ...output])
    } else if (trimmedCmd.startsWith("open ")) {
      const section = trimmedCmd.replace("open ", "")
      setHistory((prev) => [...prev, `Opening ${section}...`, ""])
    } else if (trimmedCmd === "") {
      setHistory((prev) => [...prev, ""])
    } else {
      setHistory((prev) => [...prev, `Command not found: ${cmd}`, 'Type "help" for available commands', ""])
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (currentCommand.trim()) {
        setCommandHistory((prev) => [...prev, currentCommand])
        setHistoryIndex(-1)
        executeCommand(currentCommand)
      } else {
        setHistory((prev) => [...prev, "pratheek@portfolio:~$ ", ""])
      }
      setCurrentCommand("")
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setCurrentCommand(commandHistory[newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1)
          setCurrentCommand("")
        } else {
          setHistoryIndex(newIndex)
          setCurrentCommand(commandHistory[newIndex])
        }
      }
    }
  }

  return (
    <div
      ref={terminalRef}
      className="h-full vscode-terminal p-4 overflow-auto"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="whitespace-pre-wrap">
        {history.map((line, index) => (
          <div key={index} className="leading-relaxed">
            {line}
          </div>
        ))}
      </div>

      <div className="flex items-center mt-2">
        <span className="syntax-type">pratheek@portfolio</span>
        <span>:</span>
        <span className="syntax-keyword">~</span>
        <span>$ </span>
        <input
          ref={inputRef}
          type="text"
          value={currentCommand}
          onChange={(e) => setCurrentCommand(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none ml-1"
          autoFocus
        />
      </div>
    </div>
  )
}

export default Terminal
