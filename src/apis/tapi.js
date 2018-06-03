/**
 * @file Tapi Utility
 * @author Bilo Lwabona
 * @version 0.0.1
 */
import axios from 'axios';
// import { toUrlParams, fromUrlParams } from 'util/url'

export default class Tapi {
    constructor() {
        this.tokenKey = 'wimt-api-token';
        let token = localStorage.getItem(this.tokenKey);
        this.token = token
            ? token
            : 'GET_A_TOKEN_FIRST :P';
        this.apiUrl = 'https://platform.whereismytransport.com/api';
        this.idsUrl = 'https://identity.whereismytransport.com';
    }
    init(body, callback) {
        this.requestToken(body).then((response) => {
            this.setToken(response.data.access_token)
            callback();
        }).catch((error) => console.error({error}))
    }
    requestToken(body) {
        /**
         * Fetches a token with client_id & client_secret, specified in body
         *
         * @param {Object} body - {client_id: 'string', client_secret: 'string}
         */
        let params = new URLSearchParams();
        params.append('client_id', body.client_id)
        params.append('client_secret', body.client_secret)
        params.append('grant_type', 'client_credentials')
        params.append('scope', 'transportapi:all')

        let headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        return axios({method: 'POST', url: `${this.idsUrl}/connect/token`, data: params});
    }
    setToken(token) {
        /**
         * Sets token in localStorage with key 'wimt-token'
         *
         * @param {string} token - The token
         */
        if (token) {
            this.token = token;
            localStorage.setItem(this.tokenKey, token)
            console.log('Tapi: setting token:\n', token)
        } else {
            console.warn('Tapi: cannot set token value of: ', token)
        }
    }
    getToken() {
        /**
         * Retrieves token from localStorage
         */
        return localStorage.getItem(this.tokenKey)
    }

    getAuthHeader() {
        return {'Authorization': `Bearer ${this.token}`, 'Content-Type': 'application/json', 'Accept': 'application/json', 'enable-share-taxi': true}
    }
    GET(request) {
        let {endpoint, params, headers} = request;
        return axios({
            method: 'GET',
            url: `${this.apiUrl}/${endpoint}${params
                ? `?${params}`
                : ''}`,
            headers: {
                ...this.getAuthHeader(),
                ...headers
            }
        })
    }
    POST(request) {
        let {endpoint, params, body, headers} = request;
        return axios({
            method: 'POST',
            url: `${this.apiUrl}/${endpoint}${params
                ? `?${this.toUrlParams(params)}`
                : ''}`,
            data: body,
            headers: {
                ...this.getAuthHeader(),
                ...headers
            }
        })
    }
    getAgencies(params = undefined) {
        return this.GET({endpoint: 'agencies', params: params})
    }
    getLines(params) {
        return this.GET({endpoint: 'lines', params: params})
    }
    getStops(params) {
        return this.GET({endpoint: 'stops', params: params})
    }
    postJourneys(body) {

    }
}