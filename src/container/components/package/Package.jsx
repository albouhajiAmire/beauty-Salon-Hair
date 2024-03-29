import React from "react";

function Package() {
  return (
    <>
      <section className=" package" id="package">
        <div className="section-title">
          <h1>Forfaits Promotionnels</h1>
          <span>pour la fête de votre mariéey</span>
        </div>
        <div className="">
        <div className="package-cards">
        <div className="card ">
            <div className="card-title">
              <h1>Mariée</h1>
            </div>
            <div className="card-items">
              <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>Épilation complète </p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>Chignon</p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>Soins visage professionnel </p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>Manucure spa</p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>Maquillage</p>
              </div>
              <div className="item">
                <i className="fa-solid fa-dollar-sign"></i>
                <p>
                  800 dhs <span>(Au lieu de )</span>{" "}
                  <strong className="crwa">990 dhs</strong>
                </p>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=+212700893408&text=Bonjour Lamassati, ce pack Mariée est-il disponible ?"
                target="_blank"
              >
                <button className="btn btn-send-msg">send message</button>
              </a>
            </div>
          </div>
          <div className="card ">
            <div className="card-title">
              <h1>Invitée</h1>
            </div>
            <div className="card-items">
              <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>Maquillage de soir</p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>Chignon</p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>Épilation complète</p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>Manucure spa</p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>Faux ongles</p>
              </div>
              <div className="item">
                <i className="fa-solid fa-dollar-sign"></i>
                <p>
                  310 dhs <span>(Au lieu de )</span>{" "}
                  <strong className="crwa">400 dhs</strong>{" "}
                </p>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=+212700893408&text=Bonjour Lamassati, ce pack Invitée est-il disponible ?"
                target="_blank"
              >
                <button className="btn btn-send-msg">send message</button>
              </a>
            </div>
          </div>
          <div className="card ">
            <div className="card-title">
              <h1>Invitée professionnel</h1>
            </div>
            <div className="card-items">
              <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>Maquillage de soir professionnel </p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>Chignon</p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>Épilation complète</p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>Manucure spa</p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>Faux ongles</p>
              </div>
              <div className="item">
                <i className="fa-solid fa-dollar-sign"></i>
                <p>
                  410 dhs <span>(Au lieu de )</span>{" "}
                  <strong className="crwa">499 dhs</strong>{" "}
                </p>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=+212700893408&text=Bonjour Lamassati, ce pack Invitée professionnel est-il disponible ?"
                target="_blank"
              >
                <button className="btn btn-send-msg">send message</button>
              </a>
            </div>
          </div>
          <div className="card ">
            <div className="card-title">
              <h1>Coloration</h1>
            </div>
            <div className="card-items">
            <div className="item">
                {/* <i className="far fa-check-square check-icon" /> */}
                <i className="fa-solid fa-1"></i>
                <p>Ombré & Balayage Miel :</p>
              </div>
            <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>(30 cm) : <strong>350 dh</strong>  </p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>(50 cm) : <strong>450 dh</strong>  </p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>(60 cm) : <strong>550 dh</strong>  </p>
              </div>
              <div className="item">
                {/* <i className="far fa-check-square check-icon" /> */}
                <i className="fa-solid fa-2"></i>
                <p>Ombré & Balayage Blond :</p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>(30 cm) : <strong>450 dh</strong>  </p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>(50 cm) : <strong>550 dh</strong>  </p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>(60 cm) : <strong>650 dh</strong>  </p>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=+212700893408&text=Bonjour Lamassati, ce pack Coloration est-il disponible ?"
                target="_blank"
              >
                <button className="btn btn-send-msg">send message</button>
              </a>
            </div>
          </div>
          
        </div>
        </div>
   
      </section>
    </>
  );
}

export default Package;
