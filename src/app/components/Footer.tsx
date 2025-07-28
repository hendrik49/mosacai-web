import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-400 border-t border-white/10">
      <div className="container-center">
        <div className="section-padding">
          {/* CTA Section */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 lg:mb-4">
              Let's have a chat!
            </h2>
            <p className="text-gray-400 mb-6 text-sm md:text-base max-w-md mx-auto">
              We are open for hire. Let's bring your creative ideas to life
              together!
            </p>
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2.5 lg:px-8 lg:py-3 rounded-full font-medium transition-colors">
              Work with us
            </button>
          </div>

          {/* Mobile: Card Layout, Desktop: Original 4-Column Layout */}
          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex flex-col items-center lg:items-start space-y-4 lg:space-y-0">
                <div className="flex items-center space-x-2 lg:mb-4">
                  <img
                    src="/images/logo.png"
                    alt="PGV Logo"
                    className="h-8 lg:h-10 w-auto"
                  />
                </div>
                <p className="text-gray-400 leading-relaxed text-center lg:pb-4 lg:text-left text-sm lg:text-base max-w-xs lg:max-w-none lg:mb-6">
                  Designing Your Vision, Engineering Excellence. We are PGV.
                </p>
                <div className="flex space-x-4">
                  <img
                    src="/images/md.png"
                    alt="MD Logo"
                    className="h-6 lg:h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src="/images/mdec.png"
                    alt="MDEC Logo"
                    className="h-6 lg:h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>

            {/* Sitemap - Mobile: Grid, Desktop: List */}
            <div className="lg:col-span-1">
              <div className="text-center lg:text-left">
                <h3 className="text-base lg:text-lg font-semibold text-white mb-4">
                  Sitemap
                </h3>
                <div className="grid grid-cols-2 gap-2 lg:block lg:space-y-2">
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    About
                  </Link>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    Services
                  </Link>
                  <Link
                    href="/projects"
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    Projects
                  </Link>
                  <Link
                    href="/ai"
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    AI
                  </Link>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            {/* Address - Mobile: Card, Desktop: Original */}
            <div className="lg:col-span-1">
              <div className="text-center lg:text-left">
                <h3 className="text-base lg:text-lg font-semibold text-white mb-4">
                  Address
                </h3>
                <div className="bg-dark-200/30 rounded-lg p-3 lg:bg-transparent lg:p-0">
                  <div className="text-gray-400 text-xs lg:text-sm space-y-0.5 lg:space-y-1">
                    <p>No.31-3, Block D1,</p>
                    <p>Jalan PJU 1/41 Dataran Prima</p>
                    <p>47301, Petaling Jaya,</p>
                    <p>Selangor, Darul Ehsan,</p>
                    <p>Malaysia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact - Mobile: Cards, Desktop: Original */}
            <div className="lg:col-span-1">
              <div className="text-center lg:text-left">
                <h3 className="text-base lg:text-lg font-semibold text-white mb-4 lg:mb-6">
                  Contact
                </h3>

                {/* Mobile: Cards */}
                <div className="space-y-3 lg:hidden">
                  <div className="bg-dark-200/30 rounded-lg p-3">
                    <p className="text-gray-400 text-xs mb-1">Call us</p>
                    <a
                      href="tel:+60112388889"
                      className="text-white hover:text-primary-400 transition-colors text-sm font-medium"
                    >
                      +60 1112388889
                    </a>
                  </div>
                  <div className="bg-dark-200/30 rounded-lg p-3">
                    <p className="text-gray-400 text-xs mb-1">New clients</p>
                    <a
                      href="mailto:johan@pearlygatesventures.com"
                      className="text-white hover:text-primary-400 transition-colors text-xs break-all"
                    >
                      johan@pearlygatesventures.com
                    </a>
                  </div>
                </div>

                {/* Desktop: Original Layout */}
                <div className="hidden lg:block lg:space-y-4">
                  <div>
                    <p className="text-gray-400 mb-1 text-sm">
                      For new clients:
                    </p>
                    <a
                      href="mailto:johan@pearlygatesventures.com"
                      className="text-gray-300 hover:text-primary-400 transition-colors text-sm break-all"
                    >
                      johan@pearlygatesventures.com
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1 text-sm">
                      Questions & support:
                    </p>
                    <a
                      href="mailto:admin@pearlygatesventures.com"
                      className="text-gray-300 hover:text-primary-400 transition-colors text-sm break-all"
                    >
                      admin@pearlygatesventures.com
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1 text-sm">Call us:</p>
                    <a
                      href="tel:+60112388889"
                      className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                    >
                      +60 1112388889
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 mt-8 lg:mt-12 pt-6 lg:pt-8">
            <div className="flex flex-col items-center space-y-4 lg:flex-row lg:justify-between lg:space-y-0">
              <p className="text-gray-400 text-xs lg:text-sm text-center lg:text-left">
                All rights reserved {currentYear} © Pearly Gates Ventures Sdn.
                Bhd.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <img
                    src="/icons/twitter.svg"
                    alt="Twitter"
                    className="w-4 h-4 lg:w-5 lg:h-5 filter brightness-0 invert opacity-60 hover:opacity-100"
                  />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <img
                    src="/icons/linkedin.svg"
                    alt="LinkedIn"
                    className="w-4 h-4 lg:w-5 lg:h-5 filter brightness-0 invert opacity-60 hover:opacity-100"
                  />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <img
                    src="/icons/facebook.svg"
                    alt="Facebook"
                    className="w-4 h-4 lg:w-5 lg:h-5 filter brightness-0 invert opacity-60 hover:opacity-100"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
