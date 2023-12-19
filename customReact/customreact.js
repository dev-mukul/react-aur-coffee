function customRender(reactElement, Container){
    /*
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.
    href)
    domElement.setAttribute('target', reactElement.props.
    target)

    Container.appendChild(domElement)
    */

    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.porps){
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props
        [prop])
    }
    Container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visist google'
}

const anotherElement = (
    <a href="https://google.com" target="_blank">Visit 
    google</a>
)

ReactDom.createRoot(document.getElementById('root')).

customRender(reactElement, mainContainer)
