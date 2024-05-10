import logo from "../assets/logo-study-buddy.png"

const Footer = () => {
    return (
        <footer className="footer p-10 text-base-content grid grid-cols-2 lg:grid-cols-4">
            <aside className="col-span-2 lg:col-span-1">
                <img src={logo} alt="" className="w-28 h-28" />
                <p>Study Buddy<br />Providing services since 2024</p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav className="col-span-2 lg:col-span-1">
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;