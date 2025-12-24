export default function Stats() {
    return (
        <section id="stats" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
                <div className="animate-fadeInUp text-center">
                    <p className="text-5xl font-bold text-[#F39C12] mb-2">2.8K+</p>
                    <p className="text-gray-600">Properties Listed</p>
                </div>
                <div className="animate-fadeInUp text-center">
                    <p className="text-5xl font-bold text-[#F39C12] mb-2">14.5K+</p>
                    <p className="text-gray-600">Active Investors</p>
                </div>
                <div className="animate-fadeInUp text-center">
                    <p className="text-5xl font-bold text-[#F39C12] mb-2">$48.2M</p>
                    <p className="text-gray-600">Total Invested</p>
                </div>
                <div className="animate-fadeInUp text-center">
                    <p className="text-5xl font-bold text-[#F39C12] mb-2">98%</p>
                    <p className="text-gray-600">User Satisfaction</p>
                </div>
            </div>
        </div>
    </section>
    )
}