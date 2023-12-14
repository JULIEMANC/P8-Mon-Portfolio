const Layout = ({children})=>{
    return (
        <div className="body">
        <header>
        <img className="logoGithub"
        src="../assets/logo/git.png"
        alt="logo github"/>
        <nav>
            <ul>
                <li><a href="#about">A propos</a></li>
                <li><a href="#compétences">Compétences</a></li>
                <li><a href="#projet">Projets</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </nav>
        </header>
<main>{children}</main>
        <footer>
        <p className="footerletter">Copyright © julie mancino</p>
        </footer>
        </div>
    )
};

export default Layout;
