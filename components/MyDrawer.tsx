'use client'
import { Box, Drawer, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'

export const MyDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return (<>
        <IconButton size={'large'} edge={'start'} color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
            <MenuIcon></MenuIcon>
        </IconButton>
        <Drawer anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
            <Typography variant='h6' component={'div'}>
                Side Panel
            </Typography>
        </Drawer>
    </>
    )
}
