import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import { ArrowRight, ShieldCheck, Truck, Leaf, Sparkles } from 'lucide-react'

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 pt-16 pb-20 grid md:grid-cols-2 items-center gap-10">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1.5 rounded-full bg-black text-white">
              <Sparkles size={14} /> New season just dropped
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Find your next favorite thing
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Beautifully crafted products for everyday life — thoughtfully designed, responsibly made.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link to="/shop" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                Shop now <ArrowRight size={18} />
              </Link>
              <a href="#features" className="inline-flex px-5 py-3 rounded-lg border font-medium hover:bg-gray-50 transition">
                Explore features
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div className="inline-flex items-center gap-2"><ShieldCheck size={16} /> Secure checkout</div>
              <div className="inline-flex items-center gap-2"><Truck size={16} /> Fast shipping</div>
              <div className="inline-flex items-center gap-2"><Leaf size={16} /> Eco-friendly</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-white/70 backdrop-blur border shadow-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"
                alt="Featured products"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur border rounded-xl shadow p-4 hidden md:block">
              <p className="text-xs text-gray-500">Curated by BlueShop</p>
              <p className="text-sm font-semibold">Top picks this week</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold">Why shop with us</h2>
          <p className="mt-2 text-gray-600">We focus on quality, comfort, and delightful experiences.</p>
        </div>
        <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
            title="Premium Quality"
            description="Every item is hand‑picked and tested to meet our high standards."
            icon={<Sparkles className="text-blue-600" size={20} />}
          />
          <Feature
            title="Fast & Free Shipping"
            description="Enjoy quick delivery with free shipping on qualifying orders."
            icon={<Truck className="text-blue-600" size={20} />}
          />
          <Feature
            title="Secure Payments"
            description="Your data is protected with industry‑leading security."
            icon={<ShieldCheck className="text-blue-600" size={20} />}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="absolute inset-0 opacity-20" style={{backgroundImage:'radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px)', backgroundSize:'20px 20px'}} />
          <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Ready to explore the collection?</h3>
              <p className="text-white/90 mt-1">Discover new arrivals and timeless essentials.</p>
            </div>
            <Link to="/shop" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-blue-700 font-semibold hover:bg-blue-50 transition">
              Browse products <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/60 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} BlueShop. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/shop" className="hover:text-gray-900">Shop</Link>
            <a href="#features" className="hover:text-gray-900">Features</a>
            <Link to="/test" className="hover:text-gray-900">Status</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Feature({ title, description, icon }) {
  return (
    <div className="rounded-xl border bg-white/70 backdrop-blur p-5 hover:shadow-md transition">
      <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-blue-50 mb-3">
        {icon}
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  )
}
