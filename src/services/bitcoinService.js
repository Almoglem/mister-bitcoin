import Axios from 'axios'
import { storageService } from './storageService';

export const bitcoinService = {
    getRate,
    getMarketPrice,
    getTradeVolume
}

async function getRate(coins, currency = 'USD') {
    const rate = (storageService.load('rate'));
    if (rate) {
        return rate;
    }
    try {
        const { data } = await Axios.get(
            `https://blockchain.info/ticker`
        );
        const res = data[currency].last * coins;
        storageService.store('rate', res);
        return res;
    }
    catch (err) {
        console.log(err);
    }
}

async function getMarketPrice() {
    const marketPrice = (storageService.load('market price'));
    if (marketPrice) {
        return marketPrice;
    }
    try {
        const { data } = await Axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true');
        storageService.store('market price', data)
        return data;
    }
    catch (err) {
        console.log(err);
    }
}

async function getTradeVolume() {
    const tradeVolume = (storageService.load('trade volume'));
    if (tradeVolume) {
        return tradeVolume;
    }
    try {
        const { data } = await Axios.get('https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true');
        storageService.store('trade volume', data)
        return data;
    }
    catch (err) {
        console.log(err);
    }
}