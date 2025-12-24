export default function Footer() {
  return (
    <footer className="bg-[#1D2D44] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">PropFin</h3>
            <p className="text-gray-400 text-sm">Invest smart. Build together.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-[#F39C12] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#F39C12] transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#F39C12] transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-[#F39C12] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#F39C12] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#F39C12] transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-[#F39C12] transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#F39C12] transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#F39C12] transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 PropFin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
