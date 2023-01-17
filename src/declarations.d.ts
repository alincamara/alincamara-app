declare module '*.png'
declare module '*.css'
declare module '*.svg' {
  const content: string
  export default content
}

declare module '*.scss' {
  const css: { [key: string]: string }
  export default css
}
declare module '*.sass' {
  const css: { [key: string]: string }
  export default css
}
