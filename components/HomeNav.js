import Link from "next/link";

function HomeNav() {
  const navLinks = [
    // { label: 'home', route: '/' },
    { label: "news", route: "/news" },
    { label: "band", route: "/band" },
    { label: "music", route: "/music" },
    { label: "media", route: "/media" },
    { label: "contact", route: "/contact" },
  ];
  return (
    <div className="mx-auto">
      <nav className="">
        <ul className="nav-links text-white font-bubblegum text-6xl">
          {navLinks.map((link) => (
            <li key={link.label} className={`nav-link ${link.label}`}>
              <Link href={link.route}>
                <a className="hover:text-blue-300">{link.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default HomeNav;
