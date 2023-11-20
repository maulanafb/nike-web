import { headerLogo } from '../assets/images'
import { navLinks } from '../constants'
import { hamburger } from '../assets/icons'

const Nav = () => {
    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between max-container items-center'>
                <a href=""><img src={headerLogo} alt="Logo" width={130} height={29} /></a>
                <ul className='flex-1 flex justify-end items-center gap-16 max-lg:hidden'>
                    {navLinks.map((item) => (
                        <li key={item.label}><a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>{item.label}</a></li>
                    ))}
                </ul>
                <div className='hidden max-lg:block cursor-pointer'>
                    <img src={hamburger} width={25} heig ht={25} alt="" />
                </div>
            </nav>
        </header>
    )
}

export default Nav