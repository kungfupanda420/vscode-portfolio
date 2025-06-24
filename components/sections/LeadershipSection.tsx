import { Users, Trophy, Target, Calendar } from "lucide-react"

const LeadershipSection = () => {
  const leadershipRoles = [
    {
      organization: "Tathva Tech Team",
      role: "Team Member",
      responsibility: "Event Management",
      period: "2023-2024",
      description:
        "Led technical event management for Tathva, NIT Calicut's annual technical festival. Coordinated with multiple teams to ensure smooth execution of technical events.",
      achievements: [
        "Successfully managed multiple technical events",
        "Coordinated with 50+ team members",
        "Implemented efficient event scheduling systems",
      ],
      skills: ["Event Management", "Team Coordination", "Technical Planning"],
      icon: Trophy,
    },
    {
      organization: "Google Developer Groups (GDG)",
      role: "Developer",
      responsibility: "Chatbot Development",
      period: "2022-2023",
      description: "Developed and maintained chatbot solutions for community engagement and automated support systems.",
      achievements: [
        "Built intelligent chatbot systems",
        "Improved community engagement by 40%",
        "Automated support processes",
      ],
      skills: ["AI/ML", "Chatbot Development", "Community Engagement"],
      icon: Users,
    },
    {
      organization: "ISTE (Indian Society for Technical Education)",
      role: "Tech Lead",
      responsibility: "Blog Platforms",
      period: "2023-Present",
      description:
        "Led the development of blog platforms and technical content management systems for the ISTE chapter.",
      achievements: [
        "Developed comprehensive blog platform",
        "Managed technical content for 200+ members",
        "Implemented modern web technologies",
      ],
      skills: ["Web Development", "Content Management", "Technical Leadership"],
      icon: Target,
    },
    {
      organization: "Cultural Activities",
      role: "Captain/Treasurer",
      responsibility: "Streetplay Team",
      period: "2021-2023",
      description:
        "Managed team operations and financial responsibilities for cultural streetplay activities, balancing creative and administrative duties.",
      achievements: [
        "Led team to multiple competition victories",
        "Managed team budget and resources",
        "Organized cultural events and performances",
      ],
      skills: ["Team Leadership", "Financial Management", "Creative Direction"],
      icon: Users,
    },
  ]

  const leadershipStats = {
    totalRoles: leadershipRoles.length,
    yearsOfLeadership: "4+",
    teamsLed: "3",
    eventsManaged: "10+",
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#4ec9b0] mb-2">Leadership & Team Experience</h1>
        <p className="text-[#cccccc]">My journey in leadership roles and team management</p>
      </div>

      {/* Leadership Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-[#2d2d30] p-4 rounded-lg border border-[#3c3c3c] text-center">
          <div className="text-2xl font-bold text-[#4ec9b0]">{leadershipStats.totalRoles}</div>
          <div className="text-[#cccccc] text-sm">Leadership Roles</div>
        </div>
        <div className="bg-[#2d2d30] p-4 rounded-lg border border-[#3c3c3c] text-center">
          <div className="text-2xl font-bold text-[#569cd6]">{leadershipStats.yearsOfLeadership}</div>
          <div className="text-[#cccccc] text-sm">Years Experience</div>
        </div>
        <div className="bg-[#2d2d30] p-4 rounded-lg border border-[#3c3c3c] text-center">
          <div className="text-2xl font-bold text-[#9cdcfe]">{leadershipStats.teamsLed}</div>
          <div className="text-[#cccccc] text-sm">Teams Led</div>
        </div>
        <div className="bg-[#2d2d30] p-4 rounded-lg border border-[#3c3c3c] text-center">
          <div className="text-2xl font-bold text-[#dcdcaa]">{leadershipStats.eventsManaged}</div>
          <div className="text-[#cccccc] text-sm">Events Managed</div>
        </div>
      </div>

      {/* Leadership Roles */}
      <div className="space-y-6">
        {leadershipRoles.map((role, index) => (
          <div key={index} className="bg-[#2d2d30] p-6 rounded-lg border border-[#3c3c3c]">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#1e1e1e] rounded-lg text-[#4ec9b0]">
                  <role.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#4ec9b0]">{role.organization}</h3>
                  <p className="text-[#9cdcfe] text-lg">{role.role}</p>
                  <p className="text-[#cccccc] text-sm">{role.responsibility}</p>
                </div>
              </div>
              <div className="mt-2 md:mt-0 flex items-center text-[#cccccc]">
                <Calendar size={14} className="mr-1" />
                <span className="text-sm">{role.period}</span>
              </div>
            </div>

            <p className="text-[#cccccc] leading-relaxed mb-4">{role.description}</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#569cd6] mb-2">Key Achievements</h4>
                <ul className="space-y-1">
                  {role.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-[#cccccc] text-sm flex items-start">
                      <span className="text-[#4ec9b0] mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[#569cd6] mb-2">Skills Developed</h4>
                <div className="flex flex-wrap gap-2">
                  {role.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-[#1e1e1e] text-[#9cdcfe] rounded-full text-sm border border-[#3c3c3c]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Leadership Team Format */}
      <div className="mt-8 bg-[#2d2d30] p-6 rounded-lg border border-[#3c3c3c]">
        <h2 className="text-xl font-semibold text-[#569cd6] mb-4">Leadership.team</h2>
        <div className="bg-[#1e1e1e] p-4 rounded border border-[#3c3c3c] overflow-x-auto">
          <pre className="text-sm">
            <code className="text-[#9cdcfe]">
              {`// Leadership Experience Summary
const leadership = {
  technical_leadership: [
    "ISTE Tech Lead - Blog Platforms",
    "GDG Developer - Chatbot Development",
    "Tathva Tech Team - Event Management"
  ],
  management_skills: [
    "Team Coordination", "Event Management", 
    "Financial Management", "Technical Planning"
  ],
  impact: {
    events_managed: "10+",
    team_members_led: "50+",
    years_experience: "4+",
    organizations: ["ISTE", "GDG", "Tathva", "Cultural Teams"]
  },
  core_strengths: [
    "Technical Leadership", "Team Building",
    "Project Management", "Community Engagement"
  ]
}`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}

export default LeadershipSection
