export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-serif mb-4 tracking-wide">A&E RESAW</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Quality blanks made in Phoenix, Arizona.
            </p>
          </div>
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="/products" className="hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4">Contact</h4>
            <p className="text-sm text-white/70 leading-relaxed">
              Phoenix, Arizona<br />
              info@aeresaw.com
            </p>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} A&E Resaw. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
