import { Breadcrumbs, Link, Typography, Box } from '@mui/material'
import NavigateNext from '@mui/icons-material/NavigateNext'

export const MyBreadcrumbs = () => {
    return <Box
        m={2}
    >
        <Breadcrumbs
            aria-label='breadcrumb'
            separator={<NavigateNext fontSize='small' />}
            maxItems={3}
            itemsAfterCollapse={2}
        >
            <Link underline='hover' href='#'>Home</Link>
            <Link underline='hover' href='#'>Catalog</Link>
            <Link underline='hover' href='#'>Accessories</Link>
            <Typography color={'text.primary'}>Shoes</Typography>
        </Breadcrumbs>
    </Box>



}
