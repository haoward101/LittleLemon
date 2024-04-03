import React from 'react';
import {
    Image,
    Stack,
    UnorderedList,
    ListItem,
    Link,
    Flex,
    HStack,
    Box,
    Center
} from '@chakra-ui/react'


function Nav() {
    // adding styles to list items and hover
    const listyle = {
        style: {
            display: 'inline-block',
            textTransform: 'uppercase',
            padding: '0 10px'
        },
        hover: {
            color: '#495e57',
            backgroundColor: '#f4ce14',
            borderRadius: '16px'
        }
    }

    //adding styles to anchor
    const astyle = {
        color: 'inherit',
        textDecoration: 'none',
    }

    //list of nav links
    const navlinks = [
        {text:'Home', href: '#'},
        {text:'About', href: '#'},
        {text:'Menu', href: '#'},
        {text:'Order Online', href: '#'},
        {text:'Login', href: '#'}]

    return (
        <Box>
            <Flex
            fontFamily='Markazi Text'
            fontWeight='500'
            fontSize='16px'
            justifyContent='space-between'
            align='center'>
            <Image src="/Logo.svg" alt="Logo" />
            <Box>
                <UnorderedList style={{ listStyle: 'none' }}>
                    <HStack spacing={25}>
                    {navlinks.map((item, index) => (
                        <ListItem key={index} style={listyle.style} _hover={listyle.hover}><Link href={item.href} style={astyle}>{item.text}</Link></ListItem>
                    ))}
                    </HStack>
                </UnorderedList>
            </Box>
            </Flex>
        </Box>
    )
}

export default Nav;