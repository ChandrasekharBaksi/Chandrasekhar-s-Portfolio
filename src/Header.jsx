export const Header = () => {
    return (
        < header className="header" >
            <div className="logo">
                <img src="src/assets/profile.png" alt="Logo" className="logo-img" />
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#about"> About</a></li>
                    <li><a href="#community">Community</a></li>
                    <li><a href="#course">Course</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#stack">Stack</a></li>
                </ul>
            </nav>
            <button className="contact-btn">Let's Talk</button>
        </header >
    )
}