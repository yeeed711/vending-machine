export const selectEl = (
  scope: Element | Document = document,
  selector: string
): any => {
  return scope.querySelector(selector)
}
export const selectElAll = (
  scope: Element | Document = document,
  selector: string
): Element[] => {
  return Array.from(scope.querySelectorAll(selector))
}

export const createEl = (tagName: string): Element => {
  return document.createElement(tagName)
}

export const createFrag = (): DocumentFragment => {
  return document.createDocumentFragment()
}

//scope = node
//selector = string
//tagName = string
