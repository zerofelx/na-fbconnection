var content = document.getElementById('content');
var content1 = "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D122227899367758%26id%3D100660118191203&width=500"
PrintContent(content1)


setInterval(() => {
    toggle()
}, 15000);

function toggle() {
    content.classList.toggle('Toggle');
}

function PrintContent(src) {
    content.innerHTML = `
    <iframe 
    src="${src}" 
    width="200" height="260" style="border:none;overflow:hidden" 
    scrolling="no" frameborder="0" allowTransparency="true" 
    allow="encrypted-media"></iframe> 
    `
}