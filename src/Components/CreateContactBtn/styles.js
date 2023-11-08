import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NewContactBtn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  background-color: #484d50;
  color: #ffff;
  border-radius: 50%;
  font-size: 40px;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`