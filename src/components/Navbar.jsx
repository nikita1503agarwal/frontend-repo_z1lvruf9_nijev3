import { ShoppingCart, Store } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar({ cartCount = 0, onCartClick }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-black text-white">
            <Store size={18} />
          </div>
          <span className="font-bold text-lg">BlueShop</span>
        </Link>
        {onCartClick ? (
          <button
            onClick={onCartClick}
            className="relative inline-flex items-center gap-2 px-3 py-2 rounded-md border hover:bg-gray-50 transition"
          >
            <ShoppingCart size={18} />
            <span className="text-sm font-medium">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-blue-600 text-white rounded-full px-1.5 py-0.5">
                {cartCount}
              </span>
            )}
          </button>
        ) : (
          <nav className="flex items-center gap-4 text-sm">
            <Link to="/shop" className="hover:underline">Shop</Link>
            <Link to="/test" className="hover:underline">Status</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
