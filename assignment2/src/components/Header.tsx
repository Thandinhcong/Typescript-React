
const Header = () => {
    return <header className="bg-red-500">
        <div className="container mx-auto flex gap-4 items-center">
            <img src="./thantran.png" className="w-[50px]" alt="" />
            <input type="text" className="grow" placeholder="Search" />
        </div>
    </header>

}
export default Header;