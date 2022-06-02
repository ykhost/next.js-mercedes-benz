import { cloneElement, ReactElement } from "react";

interface ActiveButtonProps {
  children: ReactElement;
  isActive: boolean;
}

export function ActiveButton ({ children, isActive }: ActiveButtonProps) {
  return (
    <>
      {cloneElement(children, {
        color: isActive? 'black' : 'gray.600'
      })}
    </>
  )
}
