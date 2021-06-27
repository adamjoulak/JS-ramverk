import React, { useState } from "react";

const AddMovie = (props) => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieGrade, setMovieGrade] = useState("Chose rating");
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (event) => {
    setMovieTitle(event.target.value);
  };
  const handleGradeChange = (event) => {
    setMovieGrade(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let warningMessage = "Type in a title or add a rating to continue";
    let warningMessage2 = "Type in a title to continue"
    let success = true;
    if (movieTitle.length <= 0 || movieTitle === warningMessage2 || movieGrade === "Chose rating") {
        if(movieTitle.length <= 0 || movieTitle === warningMessage){
            setMovieTitle(warningMessage2);
        }
        if(movieGrade === "Chose rating"){
            setErrorMessage("Chose a rating to continue..");
        }
        window.alert(warningMessage)
        success = false;
    }

    if (!success) {
      return;
    }
    setErrorMessage("");
    props.addMovieGrades({
      movieTitle: movieTitle,
      movieGrade: movieGrade,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="filmsForReview" id="filmsForReview">
      <div className="form-group">
        <label htmlFor="movieTitle">Title:</label>
        <input
          value={movieTitle}
          onChange={handleChange}
          type="text"
          className="form-control"
          id="movieTitle"
          placeholder="Enter title here"
        />
      </div>    
      <label htmlFor="movieGrade">Rating:</label>

      <select
        value={movieGrade}
        onChange={handleGradeChange}
        className="form-control"
        id="movieGrade"
      >
        <option disabled value="Chose rating" disabled>
          Chose rating
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <p id="err">{errorMessage}</p>

      <button
        style={{ backgroundColor: "light blue", marginTop: "10px" }}
        type="submit"
        className="btn btn-primary"
      >
        Save movie
      </button>
    </form>
  );
};

export default AddMovie;
