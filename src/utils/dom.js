export const selectEl = (scope, selector) => {
    return scope.querySelector(selector);
};

export const createEl = (tagName) => {
    return document.createElement(tagName);
};

export const createFrag = () => {
    return document.createDocumentFragment();
};

//scope = node
//selector = string
//tagName = string
