import { Code, Globe, Brain, Database, Server } from "lucide-react"

const ToolsSection = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: Code,
      skills: ["C/C++", "Python", "JavaScript", "TypeScript"],
      color: "text-[#4ec9b0]",
    },
    {
      category: "Web Development",
      icon: Globe,
      skills: ["HTML/CSS", "React", "Node.js", "Next.js", "Firebase"],
      color: "text-[#569cd6]",
    },
    {
      category: "AI/ML & Data Science",
      icon: Brain,
      skills: ["Deep Learning", "NLP", "LLMs", "OpenCV", "MediaPipe"],
      color: "text-[#9cdcfe]",
    },
    {
      category: "Databases",
      icon: Database,
      skills: ["MySQL", "SQL", "Firebase Firestore"],
      color: "text-[#dcdcaa]",
    },
    {
      category: "Backend & Tools",
      icon: Server,
      skills: ["Flask", "PHP", "OCR", "Git", "Linux"],
      color: "text-[#ce9178]",
    },
  ]

  const proficiencyLevels = {
    "C/C++": 85,
    Python: 90,
    JavaScript: 85,
    React: 80,
    "Node.js": 75,
    "Deep Learning": 70,
    MySQL: 80,
    "Next.js": 75,
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#4ec9b0] mb-2">Tools & Technologies</h1>
        <p className="text-[#cccccc]">My technical toolkit and expertise areas</p>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-[#2d2d30] p-6 rounded-lg border border-[#3c3c3c]">
            <div className="flex items-center mb-4">
              <div className={`p-2 rounded-lg bg-[#1e1e1e] ${category.color} mr-3`}>
                <category.icon size={20} />
              </div>
              <h3 className="font-semibold text-[#cccccc]">{category.category}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[#1e1e1e] text-[#9cdcfe] rounded-full text-sm border border-[#3c3c3c] hover:border-[#569cd6] transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Proficiency Bars */}
      <div className="bg-[#2d2d30] p-6 rounded-lg border border-[#3c3c3c] mb-8">
        <h2 className="text-xl font-semibold text-[#569cd6] mb-4">Proficiency Levels</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {Object.entries(proficiencyLevels).map(([skill, level]) => (
            <div key={skill} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-[#cccccc] text-sm">{skill}</span>
                <span className="text-[#9cdcfe] text-sm">{level}%</span>
              </div>
              <div className="w-full bg-[#1e1e1e] rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-[#4ec9b0] to-[#569cd6] h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tools Data Format */}
      <div className="bg-[#2d2d30] p-6 rounded-lg border border-[#3c3c3c]">
        <h2 className="text-xl font-semibold text-[#569cd6] mb-4">Tools.data</h2>
        <div className="bg-[#1e1e1e] p-4 rounded border border-[#3c3c3c] overflow-x-auto">
          <pre className="text-sm">
            <code className="text-[#9cdcfe]">
              {`{
  "programming": ["C/C++", "Python", "JavaScript", "TypeScript"],
  "web_frontend": ["HTML/CSS", "React", "Next.js"],
  "web_backend": ["Node.js", "Flask", "PHP"],
  "databases": ["MySQL", "Firebase"],
  "ai_ml": ["Deep Learning", "NLP", "LLMs", "OpenCV", "MediaPipe"],
  "tools": ["Git", "Linux", "OCR"],
  "current_focus": ["Next.js", "AI/ML", "Full-stack Development"],
  "learning": ["Advanced AI/ML", "Cloud Technologies", "DevOps"]
}`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}

export default ToolsSection
