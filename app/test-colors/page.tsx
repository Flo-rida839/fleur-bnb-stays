export default function TestColors() {
  return (
    <div className="p-8 space-y-4">
      <div className="text-2xl font-bold">Color Test</div>
      <div className="p-4 bg-teal-500 text-white">teal-500</div>
      <div className="p-4 bg-gold text-white">gold</div>
      <div className="p-4 bg-gold-dark text-white">gold-dark</div>
      <div className="p-4 bg-gradient-luxury text-white">gradient-luxury</div>
      <div className="animate-shimmer bg-gradient-to-r from-teal-600 via-gold to-teal-600 p-4">
        shimmer animation
      </div>
    </div>
  );
}
