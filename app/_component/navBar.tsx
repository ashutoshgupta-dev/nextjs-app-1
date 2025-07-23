    import Link from "next/link"
    const NavBar=()=>{

        
        return(
            <nav className="flex gap-[3rem]">
                <Link href="/">Home</Link>
                <Link href="/input">Input</Link>
                <Link href="/show">Show</Link>
            </nav>
        )
    }
    export default NavBar;