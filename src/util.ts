export const showElement = (element: HTMLElement, display?: string) => {
  element.style.display = display ?? 'block';
};

export const hideElement = (element: HTMLElement) => {
  element.style.display = 'none';
};
