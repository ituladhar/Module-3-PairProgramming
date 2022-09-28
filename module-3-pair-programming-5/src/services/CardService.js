import axios from 'axios';

const Rest_API_URL ="http://localhost:8080/api/cards";

class CardService{

    getCatCards(){
        return axios.get(Rest_API_URL);
    }

   /*  getCardCardsByRandom(){
        return axios.get(Rest_API_URL + '/' + random);
    }

    createCatCards(catCards){
        return axios.post(Rest_API_URL, id);
    }

   

    updateCatCards(CatCards, CatCardsId){
        return axios.put(Rest_API_URL + '/' + CatCardsId, CatCards);
    }

    deleteCatCards(CatCardsId){
        return axios.delete(Rest_API_URL + '/' + CatCardsId);
    } */
}







export default new CardService();