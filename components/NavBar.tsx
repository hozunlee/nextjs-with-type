import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./NavBar.module.css";

const NavBar = () => {
    const router = useRouter();
    console.log(router);
    return (
        <nav className={styles.nav}>
            <Link href="/">
                <p
                    className={`${styles.link} ${
                        router.pathname === "/" ? styles.active : ""
                    }`}
                >
                    Home
                </p>
            </Link>
            <Link href="/about">
                <p
                    className={[
                        styles.link,
                        router.pathname === "/about" ? styles.active : "",
                    ].join(" ")}
                >
                    About
                </p>
            </Link>
        </nav>
    );
};

export default NavBar;
