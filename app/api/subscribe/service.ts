export const validateField = (field: string, fieldName: string) => {
  if (!field || field.length) {
    return { error: `${fieldName} is required` }
  }
  return true
}