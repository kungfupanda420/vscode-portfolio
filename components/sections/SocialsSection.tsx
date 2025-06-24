import { Mail, Phone, Linkedin, Github, ExternalLink } from "lucide-react"

const SocialsSection = () => {
  const socialLinks = [
    {
      name: "Email",
      value: "pratheek18183@gmail.com",
      icon: Mail,
      href: "mailto:pratheek18183@gmail.com",
      color: "text-[#ea4335]",
    },
    {
      name: "Phone",
      value: "+917893028540",
      icon: Phone,
      href: "tel:+917893028540",
      color: "text-[#4ec9b0]",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/gnana-pratheek-reddy-kunduru",
      icon: Linkedin,
      href: "https://linkedin.com/in/gnana-pratheek-reddy-kunduru",
      color: "text-[#0077b5]",
    },
    {
      name: "GitHub",
      value: "github.com/Pratheek",
      icon: Github,
      href: "https://github.com/Pratheek",
      color: "text-[#f0f6fc]",
    },
  ]

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#4ec9b0] mb-2">Social Links</h1>
        <p className="text-[#cccccc]">Connect with me on various platforms</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2d2d30] p-6 rounded-lg border border-[#3c3c3c] hover:border-[#569cd6] transition-colors group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg bg-[#1e1e1e] ${social.color}`}>
                  <social.icon size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#cccccc] group-hover:text-[#569cd6] transition-colors">
                    {social.name}
                  </h3>
                  <p className="text-[#9cdcfe] text-sm break-all">{social.value}</p>
                </div>
              </div>
              <ExternalLink size={16} className="text-[#969696] group-hover:text-[#569cd6] transition-colors" />
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 bg-[#2d2d30] p-6 rounded-lg border border-[#3c3c3c]">
        <h2 className="text-xl font-semibold text-[#569cd6] mb-4">Get In Touch</h2>
        <p className="text-[#cccccc] leading-relaxed">
          I'm always open to discussing new opportunities, collaborations, or just having a chat about technology. Feel
          free to reach out through any of the platforms above!
        </p>

        <div className="mt-4 p-4 bg-[#1e1e1e] rounded border border-[#3c3c3c]">
          <code className="text-[#9cdcfe] text-sm">
            {`{
  "email": "pratheek18183@gmail.com",
  "phone": "+917893028540",
  "linkedin": "gnana-pratheek-reddy-kunduru",
  "github": "Pratheek",
  "status": "open_to_opportunities"
}`}
          </code>
        </div>
      </div>
    </div>
  )
}

export default SocialsSection
