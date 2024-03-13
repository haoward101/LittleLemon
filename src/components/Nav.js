import React from 'react';
import {
    Image,
    Stack,
    UnorderedList,
    ListItem,
    Link,
} from '@chakra-ui/react'


function Nav() {
    const listyle = {
        style: {
            display: 'inline-block',
            padding: '0px 35px',
            textTransform: 'uppercase',
        },
        hover:{
            color: '#495e57',
            backgroundColor: '#f4ce14',
            borderRadius: '16px'
        }
    }

    const astyle = {
        color: 'inherit',
        textDecoration: 'none',
    }

    return (
        <Stack
            direction='row'
            fontFamily='Markazi Text'
            fontWeight='500'
            fontSize='16px'
            justifyContent='space-between'
            alignItems='center'
            padding='25px 200px'>
            <a href='#'>
                <Image src="/Logo.svg" alt="Logo" />
            </a>
            <UnorderedList style={{ listStyle: 'none' }}>
                <ListItem style={listyle.style} _hover={listyle.hover}><Link href='#' style={astyle}>Home</Link></ListItem>
                <ListItem style={listyle.style} _hover={listyle.hover}><Link href='#' style={astyle}>About</Link></ListItem>
                <ListItem style={listyle.style} _hover={listyle.hover}><Link href='#' style={astyle}>Menu</Link></ListItem>
                <ListItem style={listyle.style} _hover={listyle.hover}><Link href='#' style={astyle}>Reservation</Link></ListItem>
                <ListItem style={listyle.style} _hover={listyle.hover}><Link href='#' style={astyle}>Order Online</Link></ListItem>
                <ListItem style={listyle.style} _hover={listyle.hover}><Link href='#' style={astyle}>Login</Link></ListItem>
            </UnorderedList>
        </Stack>
    )
}

export default Nav;