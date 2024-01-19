import { Stack, Link } from '@mui/material'

export const MyLink = () => {
    return (
        <Stack
            spacing={2}
            direction={'row'}
            m={4}
        >
            <Link href={'#'} variant={'body2'}>Link</Link>
            <Link
                href={'#'}
                color='secondary'
                underline='hover'
            >
                Secondary
            </Link>
        </Stack>
    )
}
