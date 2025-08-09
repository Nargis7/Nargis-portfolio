import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-10 px-6 text-center">
      <div className="flex justify-center gap-6 text-xl mb-4">
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
          <FaLinkedin />
        </a>
        <a href="https://github.com/your-profile" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
          <FaGithub />
        </a>
        <a href="https://twitter.com/your-profile" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
          <FaTwitter />
        </a>
      </div>
      <p className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Nargis Perween. All rights reserved.
      </p>
    </footer>
  )
}