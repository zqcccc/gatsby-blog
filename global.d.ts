declare module '*.module.css' {
  const resource: { [key: string]: string }
  export = resource
}
declare module '*.module.less' {
  const resource: { [key: string]: string }
  export = resource
}
declare module '*.png' {
  const resource: string
  export = resource
}
