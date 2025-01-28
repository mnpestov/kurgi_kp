class Api {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
    }
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }
    getKp(number) {
        return fetch(`${this._baseUrl}/kp/${number}`, {
            headers: {}
        })
            .then(this._checkResponse)
    }
    addKp(kp) {
        return fetch(`${this._baseUrl}/kp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(kp)
        })
            .then(this._checkResponse);
    }
    addList(list) {
        return fetch(`${this._baseUrl}/list`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(list)
        })
            .then(this._checkResponse);
    }
    addRow(row) {
        return fetch(`${this._baseUrl}/row`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(row)
        })
            .then(this._checkResponse);
    }
    deleteList(id) {
        return fetch(`${this._baseUrl}/list/${id}`, {
            method: 'DELETE',
            headers: {},
        })
            .then(this._checkResponse);
    }
    deleteRow(id) {
        return fetch(`${this._baseUrl}/row/${id}`, {
            method: 'DELETE',
            headers: {},
        })
            .then(this._checkResponse);
    }
}
export const MainApi = new Api({
    baseUrl: 'http://localhost:3000',
});