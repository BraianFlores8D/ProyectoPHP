const APIgrid = document.querySelector(".APIgrid");
const fragmento = document.createDocumentFragment()

const obtenerPerro = async () => {

    const peticionGETperro = await fetch("https://dog.ceo/api/breed/hound/images")

    const jsonPerrito = await peticionGETperro.json()



    jsonPerrito.message.slice(590, 610).forEach(perrito => {

        const item = document.createElement("div")
        item.className = "item"


        const img = document.createElement("img")
        img.className = "imgPerro"
        img.src = perrito

        item.appendChild(img)
        fragmento.appendChild(item)
    })

    APIgrid.appendChild(fragmento)
}

obtenerPerro()



