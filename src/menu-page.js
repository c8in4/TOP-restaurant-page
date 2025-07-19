import menu from "./menu"

export default function () {
    const contentDiv = document.createElement('div')
    contentDiv.id = 'content'
    contentDiv.classList.add('menu')

    const headLine = document.createElement('h2')
    headLine.innerText = 'Menu'

    const paragraph = document.createElement('p')
    paragraph.innerText = 'test content for menu page'

    const menuContainer = document.createElement('div')
    menuContainer.classList.add('menuContainer')

    processMenu()

    contentDiv.append(headLine, paragraph, menuContainer)

    function processMenu() {
        for (const foodCategory in menu) {
            const category = menu[foodCategory]

            const categoryDiv = document.createElement('div')
            categoryDiv.classList.add('categoryContainer')

            const categoryHeader = document.createElement('h3')
            categoryHeader.innerText = foodCategory.toUpperCase()

            categoryDiv.append(categoryHeader, createMenuListings(category))

            menuContainer.appendChild(categoryDiv)
        }
    }

    function createMenuListings(foodCategory) {
        const categoryContent = document.createElement('div')
        categoryContent.classList.add('categoryContent')

        for (const item in foodCategory) {
            const menuItem = foodCategory[item]

            const menuListItem = document.createElement('div')
            menuListItem.classList.add('menuListItem')


            const nameAndPriceWrapper = document.createElement('div')
            nameAndPriceWrapper.classList.add('nameAndPriceWrapper')

            const name = document.createElement('h4')
            name.classList.add('itemName')
            name.innerText = menuItem.name

            const price = document.createElement('p')
            price.classList.add('itemPrice')
            price.innerText = menuItem.price

            nameAndPriceWrapper.append(name, price)


            const description = document.createElement('p')
            description.classList.add('itemDescription')
            description.innerText = menuItem.description

            menuListItem.append(nameAndPriceWrapper, description)

            categoryContent.appendChild(menuListItem)
        }

        return categoryContent
    }

    return contentDiv
}
