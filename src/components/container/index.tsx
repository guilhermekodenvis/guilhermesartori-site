import React from "react"
import "./styles.css"

type ContainerProps = {
    children: JSX.Element
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div 
      className="container" 
    >
      {children}
    </div>
  )
}