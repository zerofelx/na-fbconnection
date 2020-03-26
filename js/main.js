
var mobile = {
    toggle: () => {
        var content = document.getElementById('content-responsive');
        content.classList.toggle('Toggle');
    },
    activate: () => {
        setTimeout(() => {
            mobile.toggle()
        }, 3000);
    }
}

var desktop = {
    toggle: () => {
        var content = document.getElementById('content');
        content.classList.toggle('Toggle');
    },
    setContent: (src) => {
        var content = document.getElementById('content');
        content.innerHTML = `
        <iframe 
        src="${src}" 
        width="200" height="260" style="border:none;overflow:hidden" 
        scrolling="no" frameborder="0" allowTransparency="true" 
        allow="encrypted-media"></iframe> 
        `
    },
    activate: () => { 
        var content1 = "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D122227899367758%26id%3D100660118191203&width=500"
        desktop.setContent(content1)
        setInterval(() => {
            desktop.toggle()
        }, 15000);
    }
}

function init() {
    var W = window.screen.width;
    if(W > 720) {
        desktop.activate();

    } else if(W <= 720) {
        mobile.activate();
    }
}

init()



