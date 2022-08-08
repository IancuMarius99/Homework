class Post {
    constructor(userId, id, title, body){
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;
    }
}

let postOne = new Post('1', '1', 'UPDATED TITLE', 'UPATED BODY CONTENT');
console.log(postOne)

let postToAdd = new Post('105', '105', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit','quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto' )
