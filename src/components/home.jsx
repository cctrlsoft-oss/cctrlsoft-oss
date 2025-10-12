export default function Home({ onLoginClick }) {
  return (
    <section className="bg-black text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 overflow-hidden">
      {/* Izquierda */}
      <div className="card">
        animacion 3D
      </div>

      {/* Centro */}
      <div className="md:w-1/2 text-center md:text-left px-4">
        <h3 className="text-purple-400 text-xl font-semibold mb-2">
          Desarrollo Web
        </h3>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white border-4 border-purple-500 inline-block px-4 py-2 rounded-xl mb-4">
          CtrlSoft
        </h1>
        <p className="text-gray-300 leading-relaxed mb-8">
          Tu negocio tiene potencial para llegar más lejos. Con un sitio web
          profesional, conecta con más personas, expande tus oportunidades y haz
          que tu marca trascienda fronteras en el universo digital.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-4">
          <div className="flex items-center gap-2 bg-[#2A273F] rounded-full px-6 py-3 shadow-lg">
            <span className="text-white text-sm font-medium">24/7 Soporte</span>
          </div>
          <div className="flex items-center gap-2 bg-[#2A273F] rounded-full px-6 py-3 shadow-lg">
            <span className="text-white text-sm font-medium">Personalizado</span>
          </div>
        </div>

        {/* Botón para ir al login */}
        <button
          onClick={onLoginClick}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full"
        >
          Ir al Login
        </button>
      </div>

      {/* Derecha */}
      <div className="hidden md:block md:w-1/3 relative">
        <img
          src="/src/assets/images/WhatsApp_icon.png"
          alt="Persona usando laptop"
          className="rounded-2xl object-cover w-full h-auto"
        />
        <div className="absolute bottom-4 right-4 bg-green-500 p-3 rounded-full">
          <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
}
