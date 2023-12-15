export default function HamburgerButton({ className }) {
    return (
        <button className={className}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </button>
    );
}
