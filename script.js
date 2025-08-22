
const dialog=document.querySelector(".dialog")
 const addBook=document.querySelector(".addBook")
const submitButton=document.querySelector(".submitButton")
const closeButton=document.querySelector(".closeButton")
const libraryContainer=document.querySelector(".libraryContainer")


const myLibrary = [];

function Book(title,author,pages,readStatus,id,data) {
    this.title=title
    this.author=author
    this.pages=pages
    this.readStatus=readStatus
    this.id=id
    this.data=data
}

function addBookToLibrary(title,author,pages,readStatus,id) {
 
  const book=new Book(title,author,pages,readStatus,id)
  myLibrary.push(book)
}


function createBookOutputCard(){
for(let x=0;x<myLibrary.length;x++){

const bookCard=document.createElement("div")
bookCard.setAttribute("class","bookCard")

const titleOutput=document.createElement("p")
titleOutput.textContent=`Title:${myLibrary[x].title}`
bookCard.appendChild(titleOutput)

const authorOutput=document.createElement("p")
authorOutput.textContent=`Author:${myLibrary[x].author}`
bookCard.appendChild(authorOutput)

const pagesOutput=document.createElement("p")
pagesOutput.textContent=`Pages:${myLibrary[x].pages}`
bookCard.appendChild(pagesOutput)

const readStatusOutput=document.createElement("p")
readStatusOutput.textContent=`ReadStatus:${myLibrary[x].readStatus}`
bookCard.appendChild(readStatusOutput)

const removeButton = document.createElement("button")
removeButton.textContent = "RemoveBook"

const changeReadStatus=document.createElement("button")
changeReadStatus.textContent="ChangeReadStatus"

bookCard.appendChild(changeReadStatus)
changeReadStatus.addEventListener("click",()=>{
       myLibrary[x].readStatus = (myLibrary[x].readStatus === "Read") ? "Unread" : "Read"
        readStatusOutput.textContent = `ReadStatus: ${myLibrary[x].readStatus}`
})

bookCard.appendChild(removeButton)

removeButton.addEventListener("click",()=>{
    myLibrary.splice(x,1)
    bookCard.remove()
})

libraryContainer.appendChild(bookCard)

 }
}


 addBook.addEventListener("click",()=>{
    dialog.showModal()
}
)

submitButton.addEventListener("click",(e)=>{

    e.preventDefault()
   
 const title=document.querySelector(".title").value
 const author=document.querySelector(".author").value
 const pages=document.querySelector(".pages").value
 const readStatus = document.querySelector('input[name="readStatus"]:checked')?.value || "Unread"
 const  id=crypto.randomUUID()

        if(title==="" || author==="" || pages===""){
        alert("Please fill out all fields")
        return
    }
     
     addBookToLibrary(title,author,pages,readStatus,id)
       libraryContainer.innerHTML = ""
     createBookOutputCard()

      document.querySelector(".title").value = ""
     document.querySelector(".author").value = ""
    document.querySelector(".pages").value = ""
  
})

closeButton.addEventListener("click",()=>{
    dialog.close()

})



 
 