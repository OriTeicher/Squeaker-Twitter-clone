import React, { Component } from 'react'
import { Avatar } from '@mui/material'
import { MoreHoriz } from '@mui/icons-material'

interface UserProps {
    displayName: string
    username: string
}

export default class LoggedAcount extends Component<UserProps> {
    render() {
        const { displayName, username } = this.props
        return (
            <section className="logged-acount-container">
                <div className="left-cred">
                    <Avatar
                        className="user-avatar"
                        sx={{
                            bgcolor: 'lightskyblue',
                            textShadow: '1px 1px 1px black'
                        }}
                    >
                        {'OR'}
                    </Avatar>
                    <div className="user-cred">
                        <h1>{displayName}</h1>
                        <h2>@{username}</h2>
                    </div>
                </div>
                <MoreHoriz />
            </section>
        )
    }
}
