import React from "react";
import "../style/Animals/Animaux.css";
import "../style/Animals/Chat.css";
import Header from "../landing page/Header";
import Navbar from "../landing page/Navbar";
import CarteChat from "../Cartes/CarteChat";
import SelectDate from "../tools/SelectDate";
function Chat() {
  
  return (
    <>
      <Header />
      <Navbar />
      <section id="chat_form">
        <div className="ChatContainer">
          <div className="ChatForm">
            <CarteChat />
            <div id="inputs2">
              <input type="radio" name="gender" id="male" />
              <label htmlFor="male">Male</label>
              <input type="radio" name="gender" id="female" />
              <label htmlFor="female">Femelle</label>
            </div>
            <div className="Nom">
              <input type="text" placeholder="Son Nom" />
            </div>
            <SelectDate/>
            <div className="Race">
              <input type="text" placeholder="Sa Race" />
              <a href="/">Je ne connais pas la race de mon animal</a>
            </div>
            <div className="button">
              <button>Suivant {" >"}</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Chat;
