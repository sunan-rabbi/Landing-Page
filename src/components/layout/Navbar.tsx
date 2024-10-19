import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import Container from "../Container/Container";
import { motion } from 'framer-motion'

const Navbar = () => {

    return (
        <motion.header
            className="h-16 fixed w-full bg-white z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
        >
            <Container className="flex justify-between items-center">
                <span className="text-2xl lg:text-3xl">iRepair</span>
                <ul className="space-x-5">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/service' className='hidden md:inline-block'>Service</NavLink>
                    <Button>
                        <NavLink to='/login'>Login</NavLink>
                    </Button>
                </ul>
            </Container>
        </motion.header>
    );
};

export default Navbar;