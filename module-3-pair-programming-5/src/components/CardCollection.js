import axios from "axios";
import React, { useState, useEffect, useReducer } from "react";
import CardService from "../services/CardService";

export default function CardCollection(props) {
  const [catCards, setCatCards] = useState([]);
  const [catCardId, setCatCardId] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  const [caption, setCaption] = useState("");
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  /*   const getNewCard = (event) => {
    event.preventDefault();
    //console.log("New Cat Card")

    axios
      .get("http://localhost:8081/api/cards/random")
      .then((response) => {
        setCatCards(response.data);
        // console.log(response.data.catFact)
        // console.log(response.data.imgUrl)
      })
      .catch((error) => {
        console.log(Error);
      });
}; */


  useEffect(() => {
    CardService.getCatCards()
      .then((response) => {
        setCatCards(response.data);
        forceUpdate();
      })
      .catch((error) => {
        console.log(error);
      });
  }, [reducerValue]);

  const updateCaption = (id) => {
    // console.log(catCards)
    const updateCap = {
      catCardId: catCardId,
      imgUrl: imgUrl,
      caption: caption,
    };
    console.log(updateCap);
    axios
      .put(`http://localhost:8080/api/cards/${catCardId}`, updateCap)
      .then((response) => {
        console.log("update caption");
        console.log(response.data);
      })
      .catch((error) => {
        /* console.log(Error); */
        alert("Could not save card!");
      });
  };

  const postDelete = (catCardId) => {
    //e.preventDefault();
    axios
      .delete(`http://localhost:8080/api/cards/${catCardId}`, catCardId)
      .then((response) => console.log("Deleted", response))
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Your Collection</h2>
      <div className="collection">
        {catCards.map((catCard) => (
          <div className="card" key={catCard.catCardId}>
            <img alt="" src={catCard.imgUrl} className="card--img" />

            <p className="caption--collection">{catCard.caption}</p>
            <button
              className="edit--btn"
              onClick={() => updateCaption(catCard.catCardId)}
            >
              {" "}
              ✍{" "}
            </button>
            <button
              className="delete--btn"
              onClick={() => postDelete(catCard.catCardId)}
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
