const projectLinks = [
  { name: "Sports News Web", href: "#" },
  { name: "Match Highlights Hub", href: "#" },
  { name: "Club Ranking Board", href: "#" },
];

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "Category", href: "#" },
  { name: "Trending", href: "#" },
  { name: "Recent", href: "#" },
];

const Footer = () => {
  return (
    <section className=" w-full bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <h3 className="font-sequel text-2xl tracking-wide">SportNews</h3>
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-300">
            Daily football stories, transfer insights, and data-driven updates
            for every fan.
          </p>
        </div>

        <div>
          <h4 className="font-dm text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="transition hover:text-white">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-dm text-lg font-semibold">My Projects</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {projectLinks.map((project) => (
              <li key={project.name}>
                <a href={project.href} className="transition hover:text-white">
                  {project.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-dm text-lg font-semibold">Stay Connected</h4>
          <p className="mt-4 text-sm text-slate-300">
            Follow the latest updates and match stories every day.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="#"
              aria-label="Twitter"
              className="rounded-md border border-slate-500/60 px-3 py-1.5 text-xs text-slate-200 transition hover:border-slate-300 hover:text-white"
            >
              Twitter
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="rounded-md border border-slate-500/60 px-3 py-1.5 text-xs text-slate-200 transition hover:border-slate-300 hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700/80 px-6 py-4 text-center text-xs text-slate-400 sm:px-8 lg:px-10">
        Copyright {new Date().getFullYear()} SportNews. All rights reserved.
      </div>
    </section>
  );
};

export default Footer;
