const formatVariables = (variables) => {
	const formattedVariables = variables
  
	Object.entries(formattedVariables).forEach(([key, value]) => {
	  if (RegExp(/^@/).test(value)) {
		const refValue = value.replace(/^@/, '')
		if (formattedVariables[refValue]) {
		  formattedVariables[key] = formattedVariables[refValue]
		}
	  }
	})
  
	return formattedVariables
  }
  
  
  module.exports = formatVariables