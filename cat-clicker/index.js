document.body.innerHTML = ''

const handleCreateCat = (name, url) => {
  const createCat = {
    catCreator: () => {
      const element = document.createElement('div')
      const img = document.createElement('img')
      const counter = document.createElement('h1')
      const catNameEl = document.createElement('h2')
      catNameEl.innerText = name
      img.setAttribute('src', url)
      element.appendChild(img)
      element.appendChild(counter)
      element.appendChild(catNameEl)
      document.body.appendChild(element)

      const handleCount = (el, counterEl) => {
        let count = 1
        el.addEventListener(
          'click',
          () => {
            counterEl.innerText = count++
          },
          false
        )
      }
      handleCount(element, counter)
    },
  }

  return createCat
}

handleCreateCat(
  'Shoyo',
  'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426'
).catCreator()

handleCreateCat(
  'Gato',
  'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496'
).catCreator()
