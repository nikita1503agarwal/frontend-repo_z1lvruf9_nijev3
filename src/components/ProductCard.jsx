export default function ProductCard({ product, onAdd }) {
  return (
    <div className="group rounded-xl border bg-white/60 backdrop-blur p-3 hover:shadow-md transition overflow-hidden">
      <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition"
          />
        ) : (
          <div className="w-full h-full grid place-items-center text-gray-400 text-sm">
            No image
          </div>
        )}
      </div>
      <div className="pt-3">
        <h3 className="font-semibold text-gray-800 line-clamp-1">{product.title}</h3>
        <p className="text-sm text-gray-500 line-clamp-2 min-h-[2.5rem]">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-bold">${product.price?.toFixed(2)}</span>
          <button
            onClick={() => onAdd(product)}
            className="text-sm px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
