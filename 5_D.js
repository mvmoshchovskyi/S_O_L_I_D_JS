// Dependency inversion principle
class Fetch {
    request(url) {
        // return fetch(url).then(r=>r.json())
        return Promise.resolve('data from fetch')
    }
}

class LocalStorage {
    get() {
        // return localStorage.getItem('key')
        const dataFromLocalStorage = 'dataFromLocalStorage'
        return dataFromLocalStorage
    }
}

class FetchClient {
    constructor() {
        this.fetch = new Fetch()
    }

    clientGet() {
        return this.fetch.request('com.ua')
    }
}

class LocalStorageClient {
    constructor() {
        this.localStorage = new LocalStorage()
    }

    clientGet() {
        return this.localStorage.get('ls key')
    }
}

class Database {
    constructor(client) {
        this.client = client
        // this.fetch = new Fetch()
        // this.lokalStorage = new LocalStorage()
    }

    getData(key) {
      return   this.client.clientGet(key)
        // return this.fetch.request('com.ua')
        // return this.lokalStorage.get('ls key')
    }
}

// const db = new Database()
// console.log(db.getData());
const db = new Database(new FetchClient())
console.log(db.getData('random'));