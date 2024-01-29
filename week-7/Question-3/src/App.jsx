import './App.css'

function App() {
  const reactElement = {
    type: 'a',
    id: 'anchor',
    props: {
      href: 'https://www.example.com',
      target: '_blank',
      children: ['Click me to Visit google']
    }
  }

  const customRender = (element) => {
    const {type, id, props} = element;
    const children = props.children.map(child => child) || [];
    const elementHTML = `<${type} id="${id}" href="${props.href}"> ${children[0]}</${type}>`;
    document.getElementById('root').innerHTML = elementHTML;
  }

  return (
    <>
      {customRender(reactElement)}
    </>
  )
}

export default App
