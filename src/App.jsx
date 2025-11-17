import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import CartDrawer from './components/CartDrawer'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [open, setOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [placing, setPlacing] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        const res = await fetch(`${API_BASE}/api/products`)
        if (!res.ok) throw new Error('Failed to load products')
        let data = await res.json()
        if (!Array.isArray(data) || data.length === 0) {
          // Seed if empty
          const seed = await fetch(`${API_BASE}/api/seed`, { method: 'POST' })
          data = await seed.json()
        }
        setProducts(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const onAdd = (product) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === product.id)
      if (exists) {
        return prev.map((i) => (i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i))
      }
      return [...prev, { id: product.id, title: product.title, price: product.price, image: product.image, quantity: 1 }]
    })
  }

  const onQty = (id, qty) => {
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, quantity: qty } : i)))
  }

  const subtotal = useMemo(() => cart.reduce((s, i) => s + i.price * i.quantity, 0), [cart])

  const checkout = async () => {
    setPlacing(true)
    setMessage('')
    try {
      const payload = {
        customer_name: 'Guest Customer',
        customer_email: 'guest@example.com',
        shipping_address: '123 Demo Street',
        items: cart.map((c) => ({ product_id: c.id, title: c.title, price: c.price, quantity: c.quantity, image: c.image })),
      }
      const res = await fetch(`${API_BASE}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Checkout failed')
      const data = await res.json()
      setMessage(`Order placed! Total $${data.total_amount}`)
      setCart([])
      setOpen(false)
    } catch (e) {
      setMessage(e.message)
    } finally {
      setPlacing(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar cartCount={cart.length} onCartClick={() => setOpen(true)} />

      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight">Discover products you’ll love</h1>
          <p className="text-gray-600 mt-2">Modern, minimal and made for everyday life.</p>
        </div>

        {loading && <p className="text-center text-gray-500">Loading products...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={onAdd} />
          ))}
        </div>
      </section>

      <CartDrawer
        open={open}
        items={cart}
        onClose={() => setOpen(false)}
        onCheckout={checkout}
        onQty={onQty}
      />

      {placing && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-3 py-2 rounded-md shadow">
          Placing order...
        </div>
      )}
      {message && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white border text-sm px-3 py-2 rounded-md shadow">
          {message}
        </div>
      )}
    </div>
  )
}
