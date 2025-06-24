import { GraduationCap, MapPin, Calendar } from "lucide-react"

const AboutSection = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#4ec9b0] mb-2">GNANA PRATHEEK REDDY</h1>
        <p className="text-[#9cdcfe] text-lg">Computer Science Engineering Student</p>
        <p className="text-[#cccccc] mt-2">
          Passionate developer with expertise in full-stack development, AI/ML, and leadership. Currently pursuing
          B.Tech in Computer Science Engineering at NIT Calicut.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-[#569cd6] mb-4 flex items-center">
            <GraduationCap className="mr-2" size={20} />
            Education
          </h2>

          <div className="space-y-4">
            <div className="bg-[#2d2d30] p-4 rounded-lg border border-[#3c3c3c]">
              <h3 className="font-semibold text-[#4ec9b0]">B.Tech Computer Science Engineering</h3>
              <p className="text-[#9cdcfe]">NIT Calicut</p>
              <div className="flex items-center mt-2 text-sm text-[#cccccc]">
                <Calendar size={14} className="mr-1" />
                <span>2021 - 2025</span>
              </div>
            </div>

            <div className="bg-[#2d2d30] p-4 rounded-lg border border-[#3c3c3c]">
              <h3 className="font-semibold text-[#4ec9b0]">12th Grade</h3>
              <p className="text-[#9cdcfe]">Narayana Junior College</p>
            </div>

            <div className="bg-[#2d2d30] p-4 rounded-lg border border-[#3c3c3c]">
              <h3 className="font-semibold text-[#4ec9b0]">10th Grade</h3>
              <p className="text-[#9cdcfe]">DR.KKR's Gowtham School</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#569cd6] mb-4 flex items-center">
            <MapPin className="mr-2" size={20} />
            About Me
          </h2>

          <div className="bg-[#2d2d30] p-4 rounded-lg border border-[#3c3c3c]">
            <p className="text-[#cccccc] leading-relaxed mb-4">
              I'm a passionate Computer Science student at NIT Calicut with a strong foundation in full-stack
              development and artificial intelligence. I enjoy building innovative solutions that solve real-world
              problems.
            </p>

            <p className="text-[#cccccc] leading-relaxed mb-4">
              My experience spans across web development, AI/ML projects, and leadership roles. I've successfully
              delivered projects that have served thousands of users and led teams in various technical and
              non-technical capacities.
            </p>

            <div className="mt-4">
              <h4 className="font-semibold text-[#4ec9b0] mb-2">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {["Web Development", "AI/ML", "Open Source", "Leadership", "Problem Solving"].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-[#1e1e1e] text-[#9cdcfe] rounded-full text-sm border border-[#3c3c3c]"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
