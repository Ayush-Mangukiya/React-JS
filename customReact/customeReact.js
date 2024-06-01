function customRender(reactElement, mainContainer) {
    const domElement = document.createElement(reactElement.type)

    domElement.innerHTML = reactElement.children

    for(prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)
}

const reactElement = {
    type : 'a',
    props : {
        href : 'https://www.google.com',
        target : '_blank',
    },
    children : "Click me to visit google"
};

const container = document.querySelector("#root")

customRender(reactElement, container)