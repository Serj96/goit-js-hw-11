'use strict';
import axios from 'axios';

export class UnsplashAPI {
    #BASE_URL = 'https://pixabay.com/api/';
    #API_KEY = '30394221-a2970c3eae9beef771f498960';

    constructor() {
    this.page = 1;
    this.query = null;
    this.per_page = 40;
    }

    fetchPhotosByQuery() { //Заміняє закоментований код
        return axios.get(`${this.#BASE_URL}`, {
            params: {
                key: this.#API_KEY,
                image_type: this.photo,
                orientation: this.horizontal,
                safesearch: this.false,
                q: this.query,
                page: this.page,
                per_page: this.per_page,
            },
        });
    }
}