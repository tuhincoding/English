import React from "react";

function Application() {
  return (
    <section className="application">
      <h2>Leave an application</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p className="application-text">
          Please use the form below to contact us. Enter your name, email, and
          message and we'll get back to you shortly.
        </p>
      </div>
      <div className="form-container">
        <img
          src="https://sofiaprotsiv.github.io/english-excellence/assets/student-abd09ad0.webp"
          alt=""
        />
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Phone" />
          <input type="text" placeholder="Email" />
          <textarea type="text" placeholder="Comment"></textarea>
          <h5>Choose a teacher</h5>
          <form className="radio-form" style={{display:"flex", flexDirection:" row",gap:"10px"}}>
            <label>
              <input type="radio" name="option" checked value="option1" />
              Maria
            </label>
            <label>
              <input type="radio" name="option" value="option2" />
              Artem
            </label>
            <label>
              <input type="radio" name="option" value="option3" />
              Ilona
            </label>
            <label>
              <input type="radio" name="option" value="option3" />
              Volodymyr
            </label>
          </form>
          <h2 style={{textAlign: "center", background:"#4DC274", padding:"5px", borderRadius:"40%",color:"#FFFFFF"}}>Send</h2>
          <p>By clicking on “Send” button, you agree to our Privacy Policy, 
          and allow Promodo to use this information for marketing purposes.</p>
        </form>
      </div>
    </section>
  );
}

export default Application;
