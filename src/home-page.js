export default function () {
    const contentDiv = document.createElement('div')
    contentDiv.id = 'content'
    contentDiv.classList.add('home')

    const headLine = document.createElement('h2')
    headLine.innerText = 'Home'

    const paragraph = document.createElement('p')
    paragraph.innerText = 'test content for home page'

    contentDiv.append(headLine, paragraph)

    return contentDiv
}