import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1'

const saveCard = (cardNumber, printedName, expirationTime, securityCode) => {
    return axios.post(API_URL + 'card', {
        cardNumber,
        printedName,
        expirationTime,
        securityCode,
    });
};

const CardService = {
    saveCard,
};

export default CardService;