import styled from 'styled-components'
import { lighten } from 'polished'

const SidebarWrap = styled.div`
    z-index: 1;
    position: fixed;
    background: ${({ theme }) => theme.primary};
    top: 0;
    left: 0;
    width: 30%;
    min-width: 300px;
    height: 100%;
    box-shadow: 3px 0 5px rgba(0, 0, 0, 0.3);
    transform: translateX(-100%);
    ${({ isOpen }) => isOpen && `transform: translateX(0)`};
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    .sidebar-header {
        text-align: center;
        margin-top: 10%;
    }
    .link-container {
        display: flex;
        flex-direction: column;
        .nav-link {
            background: ${({ theme, selected }) =>
                selected ? lighten(0.05, theme.primary) : theme.primary};
            color: ${({ theme }) => theme.light};
            text-decoration: none;
            padding: 15px;
            padding-left: ${({ theme }) => theme.sidebarPadding};
        }
    }
`

export default SidebarWrap
