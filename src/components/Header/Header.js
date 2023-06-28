import React from 'react';
import { LogoSection, ProfileSection, Container, Img, Span } from './HeaderStyles';
import { DiCssdeck } from 'react-icons/di';
import { FiLogOut } from 'react-icons/fi';
import { useSession, signIn, signOut } from 'next-auth/react';

const Header = () => {
  const { data: session, status } = useSession();
  if (status === 'loading') return <h1>Loading... Please wait</h1>;
  if (!session) {
    signIn();
    return null;
  }
  return(
    <Container>
      <LogoSection>
          <a style={{ display: "flex", alignItems: "center", color: "#e7e7e7" }}>
            <DiCssdeck size = "2rem" /><Span>MapApp</Span>
          </a>
      </LogoSection>
      <ProfileSection>
          {session.user.image && <Img src={session.user.image} alt="Profile" referrerPolicy="no-referrer"/>}
          <a style={{ display: "flex", alignItems: "center", color: "#e7e7e7", cursor:"pointer"}}>
              <FiLogOut size="2rem" onClick={() => signOut()} />
          </a>
      </ProfileSection>
    </Container>
  );
};

export default Header;
