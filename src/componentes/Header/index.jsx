import './Header.css'

export default function Header() {

    return (
        <header className="header" id="header">
            <nav className="header__nav container">
                <h1 className="header__title">Where in the World?</h1>
                <input type="button" name="dark-mode" id="darkModeBtn" />
                <label
                    onClick={() => {
                        document.querySelector('html').classList.toggle('darkMode')
                        document.querySelector('.darkModeLb').classList.toggle('darkmode')
                    }}
                    htmlFor="darkModeBtn"
                    className="darkModeLb"
                >Dark Mode
                </label>
            </nav>
        </header>
    )
}