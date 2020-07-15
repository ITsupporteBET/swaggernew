const URL_PARAMETER = require('./URL_PARAMETER');
// 需要有一個掛勾，掛資料
const root = document.getElementById('doc');

const create = (motherNode, content) => {
    const {
        title,
        parameter_name,
        parameter_description,
        parameter_example
    } = content
    const outNode = document.createElement('div');
    const titleNode = document.createElement('h1');
    titleNode.innerHTML = title;
    const nameNode = document.createElement('div');
    nameNode.innerHTML = parameter_name;
    const desNode = document.createElement('div');
    desNode.innerHTML = parameter_description;
    const exampleNode = document.createElement('div');
    exampleNode.innerHTML = parameter_example;
    outNode.appendChild(titleNode)
    outNode.appendChild(nameNode)
    outNode.appendChild(desNode)
    outNode.appendChild(exampleNode)
    motherNode.appendChild(outNode)
}

URL_PARAMETER.reduce((pre, now, i) => {
    create(root, now)

})



// function createTitle(content) {
//     const h4 = document.createElement('h4');
//     h4.innerHTML = content.title;
//     return h4
// }

// function createParameter(parameter) {
//     const parameterNode = document.createElement('div');
//     const name = document.createElement('div');
//     const description = document.createElement('div');
//     const example = document.createElement('div');
//     name.innerHTML = parameter.name;
//     parameterNode.appendchild(name)
//     description.innerHTML = parameter.description;
//     parameterNode.appendchild(description)
//     example.innerHTML = parameter.example;
//     parameterNode.appendchild(example)
//     return parameterNode
// }

// const html = URL_PARAMETER.reduce((pre, now, i) => {

//     const titleNode = createTitle(now);
//     const parameters = now.parameter.reduce((pre, now, i) => {
//         const paramterNode = createParameter(now);
//         pre.appendChild(paramterNode)
//         return parametersNode
//     }, document.createElement('div'))
//     pre.appendChild(titleNode)
//     pre.appendChild(parameters)
//     return URLNode
// }, document.createElement('div'))

// root.appendChild(html)