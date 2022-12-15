import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
    const router = useRouter();
    return (
        <nav className="">
            <Link href="/">
                <p className={router.pathname === "/" ? "active" : ""}>Home</p>
            </Link>
            <Link href="/about">
                <p className={router.pathname === "/about" ? "active" : ""}>
                    About
                </p>
            </Link>
            <style jsx>
                {`
                    nav {
                        display: flex;
                        justify-content: space-between;
                        background-color: tomato;
                        padding: 10px;
                    }
                    p {
                        text-decoration: none;
                    }
                    .active {
                        color: yellow;
                    }
                `}
            </style>
        </nav>
    );
};

export default NavBar;
