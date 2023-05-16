import styled from "styled-components"
import { Link } from "react-router-dom"

export const Button = styled.button`
  border-radius: 0.6rem;
  border: none;
  width: 34rem;
  height: 5rem;
  padding: 1rem 0.5rem 1rem 0.5rem;
  background-color:#50924E;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  color: #fff;
  font-style: italic;
;
`


const StyledButton = ({to, children, ...rest}) => {
  return (
    <Link to={to}>
      <Button {...rest}>{children}</Button>
    </Link>
  )
}
export default StyledButton