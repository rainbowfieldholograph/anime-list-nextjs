export const spacesToDash = (string: string): string => {
  const re = / /g
  return string.replace(re, '-')
}
