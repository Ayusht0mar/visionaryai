import Image from "next/image";

const Header = () => {
    return ( 
        <header className="w-full p-2">
            <div className="flex gap-8 mx-auto items-center px-4 py-2 border border-white border-opacity-15">
                <Image
                    src="/logo.svg"
                    alt="logo"
                    width={48}
                    height={48}
                    />
                <ul className="flex gap-4 px-10 py-2">
                    <li><p>Features</p></li>
                    <li>Developers</li>
                    <li>Company</li>
                    <li>Blog</li>
                    <li>Changelog</li>
                </ul> 
                <button className="px-4 py-1 border-white border-opacity-15 bg-purple-600">Join Waitlist</button>
            </div>
        </header>
     );
}
 
export default Header;