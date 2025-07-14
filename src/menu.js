export default function () {
    const contentDiv = document.createElement('div')
    contentDiv.id = 'content'
    contentDiv.classList.add('menu')

    const headLine = document.createElement('h2')
    headLine.innerText = 'Menu'

    const paragraph = document.createElement('p')
    paragraph.innerText = 'test content for menu page'

    contentDiv.append(headLine, paragraph)

    return contentDiv
}