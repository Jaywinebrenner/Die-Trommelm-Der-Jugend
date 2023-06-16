import Link from 'next/link';
import { useRouter } from 'next/router'


const Nav = ({englishShowingGlobal}) => {

    const router = useRouter();
    console.log(router.pathname)
    return (
        <div className="nav">
            <Link href="/listen">
                <h2 style={{ textDecoration: router.pathname === "/listen" ? "underline" : "none" }}>{englishShowingGlobal ? "LISTEN" : "HÖREN"}</h2>
            </Link>
            <Link href="/">
                <h2 style={{ textDecoration: router.pathname === "/" ? "underline" : "none" }}>{englishShowingGlobal ? "HOME" : "HEIM"}</h2>
            </Link>
            <Link href="/lyrics">
                <h2 style={{ textDecoration: router.pathname === "/lyrics" ? "underline" : "none" }}>{englishShowingGlobal ? "LYRICS" : "WÖRTER"}</h2>
            </Link>
  
        </div>
    )
}

export default Nav;