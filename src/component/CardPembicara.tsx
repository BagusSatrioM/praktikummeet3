interface CardPembicaraProps {
  name: string;
  role: string;
  imageUrl: string;
}

const CardPembicara: React.FC<CardPembicaraProps> = ({
  name,
  role,
  imageUrl,
}) => {
  return (
    <div className="cursor-pointer flex flex-col items-center gap-4 group">
      
      {/* Image */}
      <div className="relative">
        <img
          src={imageUrl}
          alt={name}
          className="h-64 w-64 rounded-full border-4 border-red-900 object-cover 
          transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col items-center border-2 border-red-900 w-full p-4 rounded-lg shadow-md 
      group-hover:shadow-xl transition-all duration-300">
        
        <h3 className="text-xl text-red-900 font-semibold">{name}</h3>
        <p className="text-sm text-gray-600 text-center">{role}</p>

      </div>
    </div>
  );
};

export default CardPembicara;