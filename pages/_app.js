import Link from "next/link";

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <hr />
            <Component {...pageProps} />
            <footer>Footer Text</footer>
        </>
    );
};

export default MyApp;
