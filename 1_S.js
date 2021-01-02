// Single Responsibility Principle

class News {
    constructor(text, title) {
        this.text = text
        this.title = title
        this.modify = false
    }

    update(text) {
        this.text = this.text
        this.modify = true
    }

    // toHTML(text) {
    //     return `
    //             <div class="news">
    //               <h1>${this.title}</h1>
    //               <p>${this.text}</p>
    //              </div>`
    // }

    // toJSON(text) {
    //     return JSON.stringify({
    //         title: this.title,
    //         text: this.text,
    //         modify:this.modify
    //     },null,2)
    //
    //
    // }
}

class NewsPrinter {
    constructor(news) {
        this.news = news
    }

    html() {
        return
        `<div class="news">
            <h2>${this.news.title}</h2>
            <h2>${this.news.text}</h2>
          </div>
        `
    }

    json() {
        return JSON.stringify({
            title: this.news.title,
            text: this.news.text,
            modify: this.news.modify
        }, null, 2)
    }
}

const printer = new NewsPrinter(new News('good morning ', 'Ruslana'))
// const news = new News('good morning ', 'Ruslana')
console.log(printer.json());