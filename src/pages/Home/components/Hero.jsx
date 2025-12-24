export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#1D2D44] to-[#0F1823] text-white pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-[#F39C12]/20 text-[#F39C12] px-4 py-2 rounded-full mb-6 text-sm font-semibold">
              🚀 Next Generation Real Estate Platform
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-pretty">
              Invest Smart. Build Together.
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Discover premium properties and grow your wealth through
              collective savings. Your path to financial freedom starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="register.html"
                className="bg-gradient-to-br from-[#F39C12] to-[#E68A0A] text-[#1B1B1E] font-semibold px-8 py-3 rounded-md text-center hover:-translate-y-px transition-all duration-300 shadow-lg"
              >
                Get Started Free
              </a>
              <a
                href="#how-it-works"
                className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md text-center hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Available Properties</p>
                  <p className="text-4xl font-bold text-[#F39C12]">2,847</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Active Investors</p>
                  <p className="text-4xl font-bold text-[#F39C12]">14,532</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Total Invested</p>
                  <p className="text-4xl font-bold text-[#F39C12]">$48.2M</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
