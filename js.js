var pa = 1

function paomlaag(){
    pa = pa - 1
    getapi()
}

function paomhoog(){
    pa = pa + 1
    getapi()
}

var imagesrc = document.getElementById("image")
var button = document.getElementById("button")

function getapi(){
    var input = document.getElementById("input").value
    console.log(input)
    let tag = input
    let full = ("https://e621.net/posts.json?tags=" + tag)
    
    fetch(full)

    .then(response => response.json())
    .then(data => {console.log(data)
        let finalimg = (data.posts[pa].sample.url)
        imagesrc.src = finalimg
    })
}
