import styled from 'styled-components'
import Switch from './Switch'
import ActiveLink from './ActiveLink'

const Nav = ({onChange}) => (
  <Wrapper>
    <Ul>
      <Li>
        <ActiveLink href='/' activeClassName="active">
          <a>me</a>
        </ActiveLink>
      </Li>
      <Li>
        <ActiveLink href='/products' activeClassName="active">
          <a>products</a>
        </ActiveLink>
      </Li>
      <Li>
        <ActiveLink href='/posts' activeClassName="active">
          <a>posts</a>
        </ActiveLink>
      </Li>
    </Ul>
    <Switch onChange={onChange} />
    <style jsx>{`
      .active {
        font-weight: bold;
        color: #3578e5;
      }
    `}</style>
  </Wrapper>
)

export default Nav

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  width: 100%;
`
const Ul = styled.ul`
  display: flex;
  list-style: none;
`

const Li = styled.li`
  margin-right: 10px;
  :hover {
    > a {
      font-weight: bold;
      color: #3578e5;
    }
  }
`