import { X } from "lucide-react";

export default function CartDrawer({ open, items, onClose, onCheckout, onQty }) {
  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-semibold text-lg">Your cart</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-md">
            <X size={18} />
          </button>
        </div>
        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-160px)]">
          {items.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-3">
                <img src={item.image} alt={item.title} className="w-16 h-16 rounded object-cover bg-gray-100" />
                <div className="flex-1">
                  <h4 className="font-medium line-clamp-1">{item.title}</h4>
                  <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                  <div className="mt-2 inline-flex items-center gap-2">
                    <button className="px-2 py-1 border rounded" onClick={() => onQty(item.id, Math.max(1, item.quantity - 1))}>-</button>
                    <span className="min-w-[2ch] text-center">{item.quantity}</span>
                    <button className="px-2 py-1 border rounded" onClick={() => onQty(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))
          )}
        </div>
        <div className="p-4 border-t">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-semibold">${subtotal.toFixed(2)}</span>
          </div>
          <button
            className="w-full bg-blue-600 text-white py-2.5 rounded-md hover:bg-blue-700 disabled:opacity-50"
            onClick={onCheckout}
            disabled={items.length === 0}
          >
            Checkout
          </button>
        </div>
      </aside>
    </div>
  );
}
