// This component is the first step of the app. It allows the user to enter the title and the description of the book
import React from "react";
import "./Description.css";

const DescriptionView = ({ bookInfo, handleChange, nextStep }) => {
  return (
    <div className="container-form">
        <p className="form-title">Digital medforfatter</p>
        <div className="form-element">
            <label className="label-input" >Tittel</label>
            <input className="input-single" type="text" name="title" value={bookInfo.title} onChange={handleChange} />
        </div>

        <div className="form-element">
            <label className="label-input">Beskrivelse</label>
            <textarea className="input-multiple" type="text" name="description" value={bookInfo.description} onChange={handleChange} />
        </div>

        <div className="form-element">
            <label className="label-input">Hovedpersoner</label>
            <textarea className="input-multiple" type="text" name="characters" value={bookInfo.characters} onChange={handleChange} />
        </div>

        <div className="form-element-bottom">
            <button className="button-form" type="button" onClick={nextStep}>Disposisjon</button>
        </div>
    </div>
  );
};

export default DescriptionView;
