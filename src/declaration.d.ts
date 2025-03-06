// For image files
declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

// For CSS files
declare module '*.css' {
  const value: Record<string, string>;
  export default value;
}

// For CSS Module files
declare module '*.module.css' {
  const value: Record<string, string>;
  export default value;
}