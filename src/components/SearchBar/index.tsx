import styled from "styled-components";
import searchIcon from './assets/search.svg';

const SearchBarContainer = styled.div`
    display: flex;
    height: 2rem;
    margin-bottom: 2rem;
    position: relative;

    input {
        border: none;
        border-radius: 15px;
        padding: 0 3rem 0 1rem;
        outline: none;
        width: 100%;
    }

    button {
        background-color: transparent;
        border: none;
        top: .4rem;
        right: .5rem;
        position: absolute;

        img {
            width: 1rem;
        }
    }
`;

function SearchBar() {
    return (
        <SearchBarContainer>
            <input type="text" placeholder="Faça sua busca"/>
            <button><img src={searchIcon} alt="" /></button>
        </SearchBarContainer>
    );
;}

export default SearchBar;