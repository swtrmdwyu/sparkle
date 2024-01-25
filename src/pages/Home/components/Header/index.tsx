import styled from "styled-components";
import getUserInfo from "../../../../utils/getUserInfo";
import getCurrentData from "../../../../utils/getCurrentDate";
import IDate from "../../../../interfaces/IDate";
import sparkle from "../../../../assets/svg/sparkle.svg";
import IUser from "../../../../interfaces/IUser";

const StyledHeaderContainer = styled.header`
    align-items: center;
    display: flex;
    height: 10vh;
    justify-content: space-between;
    padding: 1rem 0;
    width: calc(100%);
`;

const ProfileContainer = styled.div`
    position: relative;
`;

const ProfileImage = styled.img`
    border-radius: 50%;
    cursor: pointer;
    height: 3.438rem;
    width: 3.438rem;
`;

const WelcomeContainer = styled.div`    
    display: flex;
    justify-content: center;
    flex-direction: column;

    h1 {
        font-size: 1.2rem;
        font-weight: 800;
        opacity: .8;
    }

    span {
        font-size: .95rem;
        font-family: var(--date-font);
        font-weight: 700;
        margin-top: .2rem;
        opacity: .6;
        text-transform: lowercase;

        img {
            width: .65rem;
        }
    }
`;



function Header() {
    const user: IUser = getUserInfo();
    const date: IDate = getCurrentData();

    return(
        <StyledHeaderContainer>
            <WelcomeContainer>
                <h1>Bem-vindo, <strong>{user.username}</strong></h1>
                <span><img src={sparkle} /> {`${date.day} ${date.month.substring(0, 3)}, ${date.year}`}</span>
            </WelcomeContainer>
            <ProfileContainer>
                <ProfileImage src={user.image} />
            </ProfileContainer>
        </StyledHeaderContainer>
    );
}

export default Header;