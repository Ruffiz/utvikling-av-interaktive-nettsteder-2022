import { useState } from "react";

const CommentForm = () => {
  const [textAreaContent, setTextAreaContent] = useState("");
  const [popup, setPopup] = useState(false);

  const handleTextAreaChange = (event) => {
    setTextAreaContent(event.target.value);
  };

  const handleFormButton = (event) => {
    event.preventDefault();
    setPopup(!popup);
    //console.log(textAreaContent);
  };

  //console.log(textAreaContent);

  return (
    <section className="comment-section">
      <h1>Overskrift</h1>
      <span>av Nora Nordman</span>
      <p>
        Humblebrag single-origin coffee tilde, +1 bespoke trust fund unicorn
        kombucha affogato etsy distillery viral pok pok. Tousled bespoke you
        probably haven't heard of them stumptown pour-over. Shaman taxidermy
        pickled austin readymade pinterest tumeric aesthetic viral keffiyeh
        quinoa venmo distillery tousled.
      </p>
      <form className="comment-form" method="POST" onSubmit={handleFormButton}>
        <h2>Legg igjen en kommentar</h2>
        <label className="comment-label" htmlFor="comment">
          Kommentar
          <textarea
            id="comment"
            rows={15}
            value={textAreaContent}
            onChange={handleTextAreaChange}
          />
          <button className="form-button" type="submit">
            Send
          </button>
        </label>
      </form>
      {popup && (
        <div className="popup">
          <div className="overlay"></div>
          <div className="popup-content">
            <h2>Kommentar</h2>
            <p>{textAreaContent}</p>
            <button className="close-popup" onClick={handleFormButton}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CommentForm;
