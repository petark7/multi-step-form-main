export function camelCaseToCapitalizedCase(string_) {
	return string_.replaceAll(/([a-z])([A-Z])/g, '$1 $2') // Insert space before capital letters
		.replaceAll(/\b\w/g, (c, index) => index === 0 ? c.toUpperCase() : c.toLowerCase()); // Capitalize first letter of first word, lowercase rest
}
