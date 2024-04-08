import React, { useEffect, useState } from 'react';
import './Nav.css'
import {
    Image,
    UnorderedList,
    ListItem,
    Link,
    Flex,
    Box,
    Spacer,
    IconButton,
    useDisclosure,
} from '@chakra-ui/react'
import {
    HamburgerIcon,
    CloseIcon,
} from '@chakra-ui/icons'
import { px } from 'framer-motion';


function Nav() {
    // adding styles to list items and hover
    const listyle = {
        style: {
            display: 'inline-block',
            textTransform: 'uppercase',
            padding: '0 10px',
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
        { text: 'Home', href: '#' },
        { text: 'About', href: '#' },
        { text: 'Menu', href: '#' },
        { text: 'Order Online', href: '#' },
        { text: 'Login', href: '#' }]

    // //media query
    // const [isLargerThan992] = useMediaQuery('(min-width: 992px)')

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const windowmargin = (windowWidth - 942) / 2

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const { isOpen, onToggle } = useDisclosure
    const [menuState, setMenuState] = useState(true)

    return (
        <Box margin={{ base: '25px 0px', md: '25px 25px', lg: `25px ${windowmargin}px` }}>
            <Flex
                fontFamily='Markazi Text'
                fontWeight='500'
                fontSize='16px'
                align='center'
                minWidth='max-content'
                justifyContent={{ base: 'space-around' }}>
                <Image src="/Logo.svg" alt="Logo" />
                <UnorderedList style={{ listStyle: 'none' }} display={{ base: 'none', md: 'block' }}>
                    <Flex>
                        {navlinks.map((item, index) => (
                            <ListItem
                                key={index}
                                style={listyle.style}
                                margin={{ base: '0 0px', xl: '0 45px' }}
                                _hover={listyle.hover}>
                                <Link href={item.href} style={astyle}>{item.text}</Link>
                            </ListItem>
                        ))}
                    </Flex>
                </UnorderedList>
                <Flex display={{ base: 'block', md: 'none' }}>
                    <IconButton
                        onClick={() => setMenuState(!menuState)}
                        icon={menuState ? <CloseIcon /> : <HamburgerIcon />}
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex
                zIndex={20}
                pos={'fixed'}
                top={90}>
                    <UnorderedList style={{ listStyle: 'none' }}>
                        <Flex 
                        fontSize='25px'
                        textTransform='uppercase'
                        direction={'column'}
                        display={menuState ? 'flex' : 'none'}
                        align={{base:'center'}}>
                            {navlinks.map((item, index) => (
                                <ListItem
                                    key={index}
                                    padding={'10px 0px'}>
                                    <Link href={item.href}>{item.text}</Link>
                                </ListItem>
                            ))}
                        </Flex>
                    </UnorderedList>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Nav;