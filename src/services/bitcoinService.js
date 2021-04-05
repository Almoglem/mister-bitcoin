import Axios from 'axios'
import { storageService } from './storageService';

export const bitcoinService = {
    getRate,
    getMarketPrice,
    getTradeVolume
}

async function getRate(coins) {
    try {
        const { data } = await Axios.get(
            `https://blockchain.info/tobtc?currency=USD&value=${coins}`
        );
        storageService.store('rate', data);
        console.log(data);
        return data;
    }
    catch (err) {
        console.log(err);
    }
}

async function getMarketPrice() {
    try {
        const { data } = await Axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true');
        storageService.store('market price', data)
        console.log(data);
        return data;
    }
    catch (err) {
        console.log(err);
    }
}

async function getTradeVolume() {
    try {


        const { data } = await Axios.get('https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true');
        storageService.store('trade volume', data)
        console.log(data);
        return data;
    }
    catch (err) {
        console.log(err);
    }
}