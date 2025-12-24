export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-[#F1F3F5]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D2D44] mb-4 text-pretty">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Three simple steps to start investing
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#F39C12] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              1
            </div>
            <h3 className="text-2xl font-bold text-[#1D2D44] mb-3">
              Create Account
            </h3>
            <p className="text-gray-600">
              Sign up with email or Google. Complete your profile and verify
              your identity in minutes.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#F39C12] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              2
            </div>
            <h3 className="text-2xl font-bold text-[#1D2D44] mb-3">
              Browse & Connect
            </h3>
            <p className="text-gray-600">
              Search properties using our advanced filters or join investment
              groups. Chat with sellers in real-time.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#F39C12] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              3
            </div>
            <h3 className="text-2xl font-bold text-[#1D2D44] mb-3">
              Invest & Grow
            </h3>
            <p className="text-gray-600">
              Complete your investment and track your portfolio. Receive updates
              and earnings notifications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
