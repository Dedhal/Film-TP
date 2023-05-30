function Footer() {
    const numero = "06.12.34.56.78"
    const site = "https://ecole-ipssi.com/"
    const copyright = "all right reserved"
    return (
        <footer>
            Tel : {numero}
            <br />
            <a href={site}>Site officiel</a>
            <br />
            {copyright}
        </footer>
    );
}

export default Footer;