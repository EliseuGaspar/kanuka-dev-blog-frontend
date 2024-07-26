'use client';

import { logo, Image } from "@/app/global.imports";


export default function Header()
{
    return (
        <header id="Header" className = {`fixed top-0 w-screen
            justify-center items-center flex flex-col`}
        >
            <div className="top">
                <a href="/homepage"><Image src={logo} alt="" width={160}/></a>

                <ul className="right-items">
                    <li>
                        <button>
                            <i className = "fas fa-search text-lg"></i>
                        </button>
                    </li>
                    <li>
                        <a href="/session/sign-in" className={`py-2.5 px-9 bg-color-normal fg-color-normal btn-radius`}>Login</a>
                    </li>
                </ul>

                <ul className="left-items">
                    <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                </ul>
            </div>
            <nav className="bottom">
                <ul className = "flex flex-row gap-5 text-base items">
                    <li><a href="/posts/development">desenvolvimento</a></li>
                    <li><a href="/posts/hardware">hardware</a></li>
                    <li><a href="/posts/streams">directos</a></li>
                    <li><a href="/posts/database">banco de dados</a></li>
                    <li><a href="/posts/network">redes d&apos;computadores</a></li>
                </ul>
            </nav>
        </header>
    )
}
