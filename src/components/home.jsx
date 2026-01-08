export default function Home() {
  return (
<section className="bg-dark vh-100 text-white" id="home-section">
  <div className="container-fluid">
    <div className="row align-items-start justify-content-between">

      {/* <!-- Izquierda --> */}
      <div className="col-12 col-md-3 mb-4 mb-md-0">
        <div className="card bg-secondary text-center p-4">
          animación 3D
        </div>
      </div>

      {/* <!-- Centro --> */}
      <div className="col-12 col-md-5 text-center text-md-start">
        <div className="d-flex align-items-center gap-3 mb-2">
          <h3 className="font-agrandir color-pink-ctrlsoft fw-semibold mb-0">Desarrollo Web</h3>
          <hr className="color-pink-ctrlsoft flex-grow-1 m-0" style={{ border: "none", borderTop: "2px solid", opacity: "1" }}/>
        </div>
        <h1 className="font-agrandir fw-bold text-white border border-info rounded-3 d-inline-block px-3 py-2 mb-3" style={{ fontSize: "10rem" }}>
          CtrlSoft
        </h1>
        <p className="text-light mb-4 font-open-sans">
          Tu negocio tiene potencial para llegar más lejos. Con un sitio web
          profesional, conecta con más personas, expande tus oportunidades y haz
          que tu marca trascienda fronteras en el universo digital.
        </p>

        <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-3">
          <div className="btn-purple-ctrlsoft rounded-pill shadow p-1">
            <div className="bg-transparent border border-2 border-purple rounded-pill px-4 py-2 position-relative d-flex align-items-center justify-content-center">
              <span className="text-white fw-medium"style={{
                paddingRight:"25px"
              }}>24/7 Soporte</span>
              <div className="bg-white rounded-circle d-flex justify-content-end p-2 position-absolute" style={{ 
                right: "1px",
              }}>
                <span className="material-symbols-outlined check-icon">
                  check
                </span>
              </div>
            </div>
          </div>
          <div className="btn-purple-ctrlsoft rounded-pill shadow p-1">
            <div className="bg-transparent border border-2 border-purple rounded-pill px-4 py-2 position-relative d-flex align-items-center justify-content-center">
              <div className="d-flex justify-content-center">
                <span className="text-white fw-medium" style={
                  {paddingRight: "25px"}
                }>Personalizado</span>
              </div>
              <div className="bg-white rounded-circle d-flex justify-content-end p-2 position-absolute" style={{ 
                right: "1px", 
              }}>
                <span className="material-symbols-outlined check-icon">
                  check
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Derecha --> */}
      <div className="col-12 col-md-4 position-relative mt-4 mt-md-0">
        <div className="d-flex justify-content-end" style={{ height: "500px", overflow: "hidden" }}>
          <img
            src="/src/assets/images/person-laptop.jpg"
            alt="Persona usando laptop"
            className="rounded-3"
            style={{
              width: "100%",
              height: "100%",
              aspectRatio: "3 / 1", // Banner ancho
              objectFit: "cover",
              objectPosition: "center top"
            }}
          />
        </div>
        <div
          className="position-absolute bottom-0 end-0 bg-success p-3 rounded-circle"
          style={{ transform: "translate(25%, 25%)" }}
        >
          <img src="/src/assets/images/WhatsApp_icon.png" alt="WhatsApp" className="img-fluid" style={{ width: "24px", height: "24px" }} />
        </div>
      </div>

    </div>
  </div>
</section>


  );
}
