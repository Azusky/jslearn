

const options = ['Polotical Moldova', "Economics Balti", "IT Bubueci","Science Franzeluta", "Litru Sport"]


const init = () =>{
    let btn = document.getElementById("btn-sbscrb")
    btn.setAttribute('disabled', true)

    renderOptions(options)

    let agreeCheckbox = document.querySelector('[name = "terms"]')
    agreeCheckbox.onchange = agreeCheckboxHandler
}


const renderOptions = (options) =>{
    let optionsDiv = document.getElementById('options')
    options.forEach(option => {
        let input = document.createElement('input')
        input.setAttribute('type', 'checkbox')
        input.setAttribute('name', `option_${option.toLowerCase().replace(" ", "_")}`)

        let text = document.createTextNode(option)
        let br = document.createElement('br')

        optionsDiv.appendChild(input)
        optionsDiv.appendChild(text)
        optionsDiv.appendChild(br)
    });
}



const agreeCheckboxHandler = () =>{
    let agreeCheckbox = document.querySelector('[name = "terms"]')
    let btn = document.getElementById("btn-sbscrb")
    if(agreeCheckbox.checked)
    {
        btn.removeAttribute('disabled')
        renderAgreementText("You`ve agreed to the terms and coditions!")
    }
    else{
        btn.setAttribute('disabled', true)
    }
}


const renderAgreementText = (text)=>{
    let agreeLabel = document.getElementById('terms')
    let textNode = document.createTextNode(text)
    agreeLabel.removeChild(agreeLabel.lastChild)
    agreeLabel.appendChild(textNode)
}


window.onload = init

// renderOptions(options)
