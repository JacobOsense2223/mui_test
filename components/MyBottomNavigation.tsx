'use client'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'
import React, { useState } from 'react'
import Link from 'next/link'

export const MyBottomNavigation = () => {
    const [value, setValue] = useState(0)
    return (
        <BottomNavigation
            sx={{
                width: '100%',
                position: 'absolute',
                bottom: 0
            }}
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue)
            }}
            showLabels
        >
            <Link href={'/'}>
                <BottomNavigationAction
                    label='Home'
                    icon={<HomeIcon />}
                />
            </Link>
            <Link href={'/game'}>
                <BottomNavigationAction
                    label='Favorite'
                    icon={<FavoriteIcon />}
                />
            </Link>
            <Link href={'/main'}>
                <BottomNavigationAction
                    label='Person'
                    icon={<PersonIcon />}
                />
            </Link>
        </BottomNavigation>
    )
}
