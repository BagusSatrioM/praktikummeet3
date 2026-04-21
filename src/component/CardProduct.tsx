interface CardProductProps {
  nama: string;
  deskripsi: string;
  harga: number;
  imageUrl: string;
}

const CardProduct: React.FC<CardProductProps> = ({
  nama,
  deskripsi,
  harga,
  imageUrl,
}) => {
  return (
    <div className="border-2 border-red-900 rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300">
      
      {/* Image */}
      <img
        src={imageUrl}
        alt={nama}
        className="w-full h-48 object-cover rounded-md mb-4"
      />

      {/* Content */}
      <h3 className="text-xl text-red-900 font-semibold mb-2">{nama}</h3>
      <p className="text-gray-600 text-sm mb-3">{deskripsi}</p>

      {/* Harga */}
      <p className="text-lg font-bold text-red-900 mb-4">
        Rp {harga.toLocaleString()}
      </p>

      {/* Button */}
      <button className="w-full px-4 py-2 bg-red-900 text-white rounded hover:bg-red-800 transition">
        Beli Sekarang
      </button>

    </div>
  );
};

export default CardProduct;