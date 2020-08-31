import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import DatePicker from '../DatePicker/DatePicker'
import Icon from '../common/icons'
import { Title, Text } from '../common/typography'
import { actionCreators } from '../../actions'
import { capitalize } from '../../utils'
import { ReduxProps, DataProps } from '../../interfaces'

const LinkList: React.StatelessComponent<{
    data: DataProps
    onRoverSelect: (maxPhotoDate, idx) => void
}> = ({ data, onRoverSelect }) => {
    return (
        <div className='sidebar__link-list'>
            {data.rovers.map((rover, i) => (
                <NavLink
                    className='nav-link'
                    key={i}
                    to={{ pathname: `/main`, search: `?name=${rover.name}` }}
                    selected={rover.selected}
                    onClick={() => onRoverSelect(rover.maxPhotoDate, i)}>
                    <Text>{capitalize(rover.name)}</Text>
                </NavLink>
            ))}
        </div>
    )
}

const Sidebar: React.FC<ReduxProps & { fetchPhotos: () => void }> = ({
    data,
    ui,
    actions,
    fetchPhotos
}) => {
    const handleRoverSelect = async (maxPhotoDate, idx) => {
        const { selectDateFilter, selectRover, toggleSidebar } = actions
        toggleSidebar()
        selectDateFilter({ date: new Date(maxPhotoDate) })
        await selectRover({ idx })
        fetchPhotos()
    }

    return (
        <div className={`sidebar${ui.sidebarIsOpen ? ' active' : ''}`}>
            <Icon
                onClick={actions.toggleSidebar}
                name='close'
                width={25}
                fill='white'
                visibility='visible'
                style={{ margin: '4% 6%' }}
            />
            <div className='sidebar__header'>
                <Title>Mars Rovers</Title>
                <Icon name='rover' width={100} fill='white' />
            </div>
            <LinkList onRoverSelect={handleRoverSelect} data={data} />
            <DatePicker fetchPhotos={fetchPhotos} />
        </div>
    )
}

export default connect(
    state => state,
    dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(Sidebar)
