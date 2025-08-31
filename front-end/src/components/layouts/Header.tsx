export function Header() {
  return (
	<header className="relative h-100 w-full flex items-center justify-center overflow-hidden">
		<img 
		src="/images/CoupleJourney/herosection.jpg" 
		alt="Cover" 
		className="absolute inset-0 w-full h-100 object-cover" />
		<div className="relative z-10 flex items-center justify-center px-4 py-20">
		  <div className="group relative max-w-xl w-full rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-transparent">
		    <div className="rounded-2xl bg-white/5 backdrop-blur-xs border border-white/10 shadow-2xl px-8 py-10 text-center text-white">
		      <h1 className="text-6xl font-bold mb-3 drop-shadow-sm font-arizonia">Rick &amp; Laura</h1>
		      <p className="text-5xl italic font-light">
		        A Journey of Love and Togetherness
		      </p>
		    </div>
		  </div>
		</div>

      </header>
  );
}