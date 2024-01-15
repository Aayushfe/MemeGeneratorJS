const fetchMemeBtn = document.querySelector('.generate-meme-btn')
const memeTitle = document.querySelector('.meme-title')
const memeImg = document.querySelector('.meme-generator img')
const memeAuthor = document.querySelector('.meme-author')

fetchMemeBtn.addEventListener('click',async()=>{
    let res =await fetch(`https://meme-api.com/gimme/wholesomememes`)
    let data =await res.json()
    updateMeme(data.title,data.url,data.author)
})

function updateMeme(title,url,author){
    memeImg.setAttribute("src",url)
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = author
}