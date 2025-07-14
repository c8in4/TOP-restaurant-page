export default function () {
    const contentDiv = document.createElement('div')
    contentDiv.id = 'content'
    contentDiv.classList.add('contact')

    const headLine = document.createElement('h2')
    headLine.innerText = 'Contact'

    const paragraph = document.createElement('p')
    paragraph.innerText = 'test content for contact page'

    contentDiv.append(headLine, paragraph)

    return contentDiv
}