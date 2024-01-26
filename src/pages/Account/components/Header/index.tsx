import styled from "styled-components";
import IUser from "../../../../interfaces/IUser";
import getUserInfo from "../../../../utils/getUserInfo";
import Profile from "../../../../components/Profile";

const StyledHeader = styled.header`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
`;

function Header() {
    const user: IUser = getUserInfo();

    return(
        <StyledHeader>
            <Profile 
                src={user.image}
                size="5.313rem"
            />
            <h2>{user.username}</h2>
        </StyledHeader>
    );
}

export default Header;