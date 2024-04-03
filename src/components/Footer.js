import {
    Image,
    Stack,
    ListItem,
    UnorderedList,
    Link,
    Box,
    Flex
} from '@chakra-ui/react'

function Footer() {
    const style = {
        ul: {
            listStyle: 'none',
            fontFamily: 'Markazi Text',
            fontSize: '16px',
            fontWeight: '500'
        },
        link: {
            fontFamily: 'Karla',
            fontWeight: '400',
            fontSize: '12px'
        }
    }

    return (
        <Stack
            direction='row'
            margin='25px 200px'
            spacing={10}
        >
            <Image src="./Logo.svg" alt="Logo" />
            <Box w={900}>
                <Flex direction={'row'} justify={'space-between'}>
                    <UnorderedList style={style.ul}>
                        <ListItem padding="10px 0">Doormat Navigation</ListItem>
                        <ListItem><Link style={style.link}>Home</Link></ListItem>
                        <ListItem><Link style={style.link}>About</Link></ListItem>
                        <ListItem><Link style={style.link}>Reservations</Link></ListItem>
                        <ListItem><Link style={style.link}>Order OnListItemne</Link></ListItem>
                        <ListItem><Link style={style.link}>Login</Link></ListItem>
                    </UnorderedList>
                    <UnorderedList style={style.ul}>
                        <ListItem padding="10px 0">Contact</ListItem>
                        <ListItem style={style.link}>Address</ListItem>
                        <ListItem style={style.link}>Phone Number</ListItem>
                        <ListItem style={style.link}>Email</ListItem>
                    </UnorderedList>
                    <UnorderedList style={style.ul}>
                        <ListItem padding="10px 0">Social Media</ListItem>
                        <ListItem><Link href="https://www.facebook.com" rel="facebook" style={style.link}>Facebook</Link></ListItem>
                        <ListItem><Link href="https://www.instagram.com" rel="instagram" style={style.link}>Instagram</Link></ListItem>
                        <ListItem><Link href="https://www.yelp.com" rel="yelp" style={style.link}>Yelp</Link></ListItem>
                    </UnorderedList>
                </Flex>
            </Box>
        </Stack>
    )
}

export default Footer;