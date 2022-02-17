const regex = /[^A-Za-z0-9]+/g

export const spacesToDash = (target: string): string => {
  return target.replace(regex, '-')
}
