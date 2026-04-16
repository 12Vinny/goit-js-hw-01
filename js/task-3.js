function getElementWidth(content, padding, border) {
  const parsedContent = Number.parseFloat(content);
  const parsedPadding = Number.parseFloat(padding);
	const parsedBorder = Number.parseFloat(border);
  return parsedContent + (parsedPadding * 2) + (parsedBorder * 2);
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));