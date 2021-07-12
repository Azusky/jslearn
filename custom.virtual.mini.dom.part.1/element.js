class Element {
    constructor(tagName) {
      this.tagName = tagName
      // reference to other elements
      this.parent = null
      this.children = []
      this.prev = null
      this.next = null
    }

    appendChild(child) {
        if (child.__proto__ === this.__proto__){
            this.children.push(child)
        }

    }

    removeChild(child) {
        if (child.__proto__ === this.__proto__)
        {
            for(let i = 0; i<this.children.length; i++)
            {
                if(Object.is(child,this.children[i]))
                {
                    this.children.splice(i,1)
                }
            }
        }
    }
    render() {
        let childFragment = ``
        this.children.forEach(child => childFragment += child.render())

        return `<${this.tagName}>${childFragment}</${this.tagName}>`
    }
  }


class Another extends Element{

}
let parent = new Element("div")
let h1 = new Element("h1")
parent.appendChild(h1)
parent.appendChild(new Element("p"))
parent.removeChild(h1)
parent.removeChild(new Element("p"))

console.log(parent.render())
let ano = new Another("123")
let root = new Element("html")
let head = new Element("head")
let body = new Element("body")
body.appendChild(new Element("Div"))
root.appendChild(head)
root.appendChild(body)
root.removeChild(body)
console.log(root.render())
