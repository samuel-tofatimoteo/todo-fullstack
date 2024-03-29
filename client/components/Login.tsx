import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import { NavGroup, NavButton } from './Styled.tsx'
import { useAuth0 } from '@auth0/auth0-react'

function Login() {
  // TODO: call the useAuth0 hook and destructure user, logout, and loginWithRedirect
  const { logout, loginWithRedirect } = useAuth0()
  const auth = useAuth0()
  // TODO: replace placeholder user object with the one from auth0
  const user = {
    nickname: auth.user,
  }

  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
    <>
      <NavGroup>
        <IfAuthenticated>
          <NavButton onClick={handleSignOut}>Sign out</NavButton>
          {user && <p>Signed in as: {user?.nickname?.name}</p>}
        </IfAuthenticated>
        <IfNotAuthenticated>
          <NavButton onClick={handleSignIn}>Sign in</NavButton>
        </IfNotAuthenticated>
      </NavGroup>
    </>
  )
}

export default Login
