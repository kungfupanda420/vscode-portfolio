import { ExternalLink, Github, Star } from "lucide-react"

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "SIP Portal",
      description: "Centralized internship system for streamlined application and management processes",
      tech: ["Node.js", "React", "MySQL"],
      highlights: ["Centralized System", "User Management", "Application Tracking"],
      category: "Web Application",
      status: "Completed",
    },
    {
      id: 2,
      title: "AI Library Assistant",
      description: "Intelligent library management system serving over 8,000 users",
      tech: ["Python", "Flask", "AI/ML"],
      highlights: ["8k+ Users", "AI-Powered", "Library Management"],
      category: "AI Application",
      status: "Production",
    },
    {
      id: 3,
      title: "Geo-attendance Tracker",
      description: "Real-time attendance validation system using geolocation technology",
      tech: ["PHP", "MySQL", "Geolocation API"],
      highlights: ["Real-time Validation", "GPS Integration", "Attendance Management"],
      category: "Web Application",
      status: "Completed",
    },
    {
      id: 4,
      title: "AI Image Styler",
      description: "Custom artwork generator using artificial intelligence for creative image styling",
      tech: ["Python", "AI/ML", "Image Processing"],
      highlights: ["Custom Artwork", "AI Generation", "Style Transfer"],
      category: "AI Application",
      status: "Completed",
    },
    {
      id: 5,
      title: "Study Resource Tutor",
      description: "Document parsing and analysis system using LLMs and OCR technology",
      tech: ["Python", "LLM", "OCR"],
      highlights: ["Document Parsing", "LLM Integration", "Educational Tool"],
      category: "AI Application",
      status: "Completed",
    },
    {
      id: 6,
      title: "ISTE Website",
      description: "Official website for ISTE chapter with 400+ event registrations",
      tech: ["React", "Node.js", "Database"],
      highlights: ["400+ Registrations", "Event Management", "Responsive Design"],
      category: "Web Application",
      status: "Production",
    },
    {
      id: 7,
      title: "Sign Language Translator",
      description: "Real-time sign language recognition and translation system",
      tech: ["OpenCV", "MediaPipe", "Python"],
      highlights: ["Real-time Recognition", "Computer Vision", "Accessibility"],
      category: "AI Application",
      status: "Completed",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production":
        return "text-[#4ec9b0] bg-[#4ec9b0]/10"
      case "Completed":
        return "text-[#569cd6] bg-[#569cd6]/10"
      default:
        return "text-[#cccccc] bg-[#cccccc]/10"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI Application":
        return "text-[#9cdcfe] bg-[#9cdcfe]/10"
      case "Web Application":
        return "text-[#dcdcaa] bg-[#dcdcaa]/10"
      default:
        return "text-[#cccccc] bg-[#cccccc]/10"
    }
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#4ec9b0] mb-2">Projects Catalog</h1>
        <p className="text-[#cccccc]">A showcase of my technical projects and contributions</p>
      </div>

      {/* Project Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-[#2d2d30] p-4 rounded-lg border border-[#3c3c3c] text-center">
          <div className="text-2xl font-bold text-[#4ec9b0]">{projects.length}</div>
          <div className="text-[#cccccc] text-sm">Total Projects</div>
        </div>
        <div className="bg-[#2d2d30] p-4 rounded-lg border border-[#3c3c3c] text-center">
          <div className="text-2xl font-bold text-[#569cd6]">8k+</div>
          <div className="text-[#cccccc] text-sm">Users Served</div>
        </div>
        <div className="bg-[#2d2d30] p-4 rounded-lg border border-[#3c3c3c] text-center">
          <div className="text-2xl font-bold text-[#9cdcfe]">400+</div>
          <div className="text-[#cccccc] text-sm">Registrations</div>
        </div>
        <div className="bg-[#2d2d30] p-4 rounded-lg border border-[#3c3c3c] text-center">
          <div className="text-2xl font-bold text-[#dcdcaa]">5</div>
          <div className="text-[#cccccc] text-sm">AI Projects</div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#2d2d30] p-6 rounded-lg border border-[#3c3c3c] hover:border-[#569cd6] transition-colors group"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-[#cccccc] group-hover:text-[#4ec9b0] transition-colors">
                {project.title}
              </h3>
              <div className="flex space-x-2">
                <button className="p-1 hover:bg-[#3c3c3c] rounded transition-colors">
                  <Github size={16} className="text-[#969696] hover:text-[#cccccc]" />
                </button>
                <button className="p-1 hover:bg-[#3c3c3c] rounded transition-colors">
                  <ExternalLink size={16} className="text-[#969696] hover:text-[#cccccc]" />
                </button>
              </div>
            </div>

            <p className="text-[#cccccc] text-sm leading-relaxed mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-[#1e1e1e] text-[#9cdcfe] rounded text-xs border border-[#3c3c3c]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="space-y-2 mb-4">
              {project.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center text-sm">
                  <Star size={12} className="text-[#dcdcaa] mr-2 flex-shrink-0" />
                  <span className="text-[#cccccc]">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <span className={`px-2 py-1 rounded text-xs ${getCategoryColor(project.category)}`}>
                {project.category}
              </span>
              <span className={`px-2 py-1 rounded text-xs ${getStatusColor(project.status)}`}>{project.status}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Project Catalog Format */}
      <div className="mt-8 bg-[#2d2d30] p-6 rounded-lg border border-[#3c3c3c]">
        <h2 className="text-xl font-semibold text-[#569cd6] mb-4">Projects.catalog</h2>
        <div className="bg-[#1e1e1e] p-4 rounded border border-[#3c3c3c] overflow-x-auto">
          <pre className="text-sm">
            <code className="text-[#9cdcfe]">
              {`// Featured Projects Summary
const projects = {
  web_applications: 3,
  ai_ml_projects: 4,
  total_users_impacted: "8000+",
  technologies_used: [
    "React", "Node.js", "Python", "Flask", 
    "MySQL", "OpenCV", "MediaPipe", "LLMs"
  ],
  notable_achievements: [
    "8k+ users served (AI Library Assistant)",
    "400+ registrations (ISTE Website)",
    "Real-time geolocation validation",
    "Custom AI artwork generation"
  ]
}`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection
