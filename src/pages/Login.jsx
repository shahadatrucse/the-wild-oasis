import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  min-height: 100vh;
  padding-bottom: 10rem;
  display: grid;
  grid-template-columns: 54.3rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading style={{ textAlign: "center" }} as="h3">
        Log in your account
      </Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
