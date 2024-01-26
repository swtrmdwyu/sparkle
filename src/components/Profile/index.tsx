import styled from "styled-components";
import sparkle from "../../assets/svg/sparkle.svg";

const ProfileContainer = styled.div`
    position: relative;
`;

const ProfileImage = styled.img<Props>`
    border: ${(props: Props) => props.bordered ? '3px solid var(--secondary-color)' : 'none'};
    border-radius: 50%;
    cursor: pointer;
    height: ${(props: Props) => props.size ? props.size : '3.438rem'};
    width: ${(props: Props) => props.size ? props.size : '3.438rem'};
`;
const ProfileDecoration = styled.img`
    position: absolute;
    width: 1rem;
    top: 10px;
    right: -3px;
`;

interface Props {
    src: string,
    size?: string,
    bordered?: boolean
}

function Profile({src, size, bordered}: Props) {
    return (
        <ProfileContainer>
            <ProfileImage 
                src={src}
                size={size}
                bordered={bordered}
            />
            {bordered && <ProfileDecoration src={sparkle}/>}  
        </ProfileContainer>
    );
}

export default Profile;