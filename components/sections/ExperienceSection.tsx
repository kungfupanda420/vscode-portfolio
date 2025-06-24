import { Briefcase, Calendar, MapPin } from "lucide-react"

const ExperienceSection = () => {
  const experience = {
    title: "Apprentice Engineer",
    company: "CCD, NIT Calicut",
    period: "May 2025 - Present",
    location: "NIT Calicut",
    description:
      "Working as an Apprentice Engineer at the Computer Center Division, contributing to various technical projects and system administration tasks.",
  }

  const leadership = [
    {
      role: "Tathva Tech Team",
      responsibility: "Event Management",
      description: "Led technical event management for Tathva, NIT Calicut's annual technical festival",
    },
    {
      role: "Google Developer Groups (GDG)",
      responsibility: "Chatbot Development",
      description: "Developed and maintained chatbot solutions for community engagement",
    },
    {
      role: "ISTE Tech Lead",
      responsibility: "Blog Platforms",
      description: "Led the development of blog platforms and technical content management systems",
    },
    {
      role: "Streetplay Captain/Treasurer",
      responsibility: "Team Leadership & Finance",
      description: "Managed team operations and financial responsibilities for cultural activities",
    },
  ]

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#4ec9b0] mb-2">Experience</h1>
        <p className="text-[#cccccc]">Professional experience and leadership roles</p>
      </div>

      {/* Professional Experience */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-[#569cd6] mb-4 flex items-center">
          <Briefcase className="mr-2" size={20} />
          Professional Experience
        </h2>

        <div className="bg-[#2d2d30] p-6 rounded-lg border border-[#3c3c3c]">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-[#4ec9b0]">{experience.title}</h3>
              <p className="text-[#9cdcfe] text-lg">{experience.company}</p>
            </div>
            <div className="mt-2 md:mt-0 text-right">
              <div className="flex items-center text-[#cccccc] mb-1">
                <Calendar size={14} className="mr-1" />
                <span className="text-sm">{experience.period}</span>
              </div>
              <div className="flex items-center text-[#cccccc]">
                <MapPin size={14} className="mr-1" />
                <span className="text-sm">{experience.location}</span>
              </div>
            </div>
          </div>

          <p className="text-[#cccccc] leading-relaxed">{experience.description}</p>
        </div>
      </div>

      {/* Leadership Experience */}
      <div>
        <h2 className="text-xl font-semibold text-[#569cd6] mb-4">Leadership & Extracurricular</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {leadership.map((item, index) => (
            <div key={index} className="bg-[#2d2d30] p-4 rounded-lg border border-[#3c3c3c]">
              <h3 className="font-semibold text-[#4ec9b0] mb-1">{item.role}</h3>
              <p className="text-[#9cdcfe] text-sm mb-2">{item.responsibility}</p>
              <p className="text-[#cccccc] text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="mt-8 bg-[#2d2d30] p-6 rounded-lg border border-[#3c3c3c]">
        <h2 className="text-xl font-semibold text-[#569cd6] mb-4">Experience Log</h2>
        <div className="font-mono text-sm space-y-2">
          <div className="text-[#4ec9b0]">[2025-05] Started as Apprentice Engineer at CCD, NIT Calicut</div>
          <div className="text-[#9cdcfe]">[2024] Led ISTE Tech Team for blog platform development</div>
          <div className="text-[#9cdcfe]">[2023] Served as Tathva Tech Team member for event management</div>
          <div className="text-[#9cdcfe]">[2022] Joined GDG for chatbot development initiatives</div>
          <div className="text-[#cccccc]">[2021] Started B.Tech journey at NIT Calicut</div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceSection
