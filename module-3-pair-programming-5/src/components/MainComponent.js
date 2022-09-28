import axios from "axios";
import React, { useEffect, useState } from "react";
/* import CardService from "../services/CardService"; */

export default function MainComponent(props) {
  const [catCards, setCatCards] = useState([]);
  const [catCardId, setCatCardId] = useState(0);
  const [catFact, setCatFact] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [caption, setCaption] = useState("");
  /*  
  useEffect(() => {
    CardService.getCatCards()
      .then((response) => {
        setCatCards(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); */

  const getNewCard = (event) => {
    event.preventDefault();
    //console.log("New Cat Card")

    axios
      .get("http://localhost:8080/api/cards/random")
      .then((response) => {
        setCatCards(response.data);
        /*   console.log(response.data.setCatFact)
                console.log(response.data.imgUrl) */
        setCatFact(response.data.catFact);
        setImgUrl(response.data.imgUrl);
      })
      .catch((error) => {
        console.log(Error);
      });
  };

  const saveCard = (e) => {
    // console.log(catCards)
    const putCard = {
      catFact: catFact,
      imgUrl: imgUrl,
      caption: caption,
    };
    //console.log(putCard);
    catCards.catCardId
      ? axios
          .put(`http://localhost:8080/api/cards/${catCardId}`, putCard)
          .then((response) => {
            console.log("update caption");
            console.log(response.data);
          })
          .catch((error) => {
            /* console.log(Error); */
            alert("Could not save card!");
          })
      : axios
          .post(`http://localhost:8080/api/cards/`, putCard)
          .then((response) => console.log("post caption"))
          .catch((error) => {
            /* console.log(Error); */
            alert("Please Add Caption to Save in the Collection");
          });

    // return saveCard();
  };

  const saveCaption = (e) => {
    setCaption(e.target.value);
  };

  return (
    <div className="card--side">
      <div className="cat--card">
        <h4 className="cat--fact"> {catCards.catFact} </h4>
        <img className="cat--pic" alt="" src={catCards.imgUrl} />
      </div>

      <input
        className="caption--box"
        type="text"
        onChange={(e) => saveCaption(e)}
        placeholder="Caption Me!"
      />

      <div className="button--holder">
        <button
          className="save--btn"
          type="button"
          onClick={() => {
            saveCard();
          }}
        >
          💾 Save To Collection
        </button>

        <button className="next--btn" type="button" onClick={getNewCard}>
          Get Next Card ⇨
        </button>
      </div>
    </div>
  );
}
