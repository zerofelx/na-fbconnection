
var posts = [1, 2, 3, 4, 5]
var i = 0
setInterval(() => {
    switch (i) {
        case 0:
            console.log(posts[i])
            i++
            break;
        case 1:
            console.log(posts[i])
            i++
            break;
        case 2:
            console.log(posts[i])
            i++
            break;
        case 3:
            console.log(posts[i])
            i++
            break
        case 4:
            console.log(posts[i])
            i++
            break
        default:
            i = 0;
            console.log(posts[i])
            break
    }
}, 2000);