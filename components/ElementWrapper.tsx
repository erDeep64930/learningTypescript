import React, { FC } from 'react'

interface ElementWrapperProp{
    elementType:'div'|'span'|'h1'|'h2'|'h3'|'h4'|'button'
    children:React.ReactNode,
    className?:string;
    onClick?:()=>void;

}

const ElementWrapper :FC<ElementWrapperProp>= ({
    elementType,children,className,onClick,
}) => {
    const Element =elementType as keyof JSX.IntrinsicElements
  return (
    <div>ElementWrapper</div>
  )
}

export default ElementWrapper