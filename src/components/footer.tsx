import { PropsFooter, React, Image } from "@/app/global.imports";


const Footer: React.FC<PropsFooter> = ({ imagem }) => {
    return (
        <footer id="footer">
            <ul>
                <li className="footer-title mb-3">
                    <h3>NOSSAS REDES</h3>
                </li>
                <li><a href=""><i className="fab fa-linkedin"></i> * Kanukos Dev</a></li>
                <li><a href=""><i className="fab fa-facebook"></i> * Kanukos-Dev</a></li>
                <li><a href=""><i className="fab fa-instagram"></i> * @KanukosDev</a></li>
                <li><a href=""><i className="fab fa-whatsapp"></i> * +244 937 245 100</a></li>
                <li><a href=""><i className="fas fa-envelope"></i> * kanukosdev@co.ao</a></li>
            </ul>
            <ul>
                <li className="footer-title mb-3">
                    <h3>PATROCINADORES & APOIADORES</h3>
                </li>
                <li>Tuyeto Maker</li>
                <li>Lezard Crew</li>
                <li>New Age</li>
                <li>Huawei Angola</li>
                <li>Minestério da Educação(Angola)</li>
            </ul>
            <ul>
                <li className="footer-title mb-3">
                    <h3>NOSSA AUTENTICIDADE</h3>
                </li>
                <li>
                    <div className='container'>
                        <Image src={imagem} alt=''/>
                        <div className="descriptions">
                            <h2>Kanukos Dev&apos;s</h2>
                            <p>Criada aos: 02/04/2020 - 12:45</p>
                            <p>Localização: Luanda/Angola - (Rangel)</p>
                        </div>
                        <div className="phones">
                            <p><i className="fas fa-phone-flip"></i> +244 946 322 000</p>
                            <p><i className="fas fa-phone-flip"></i> +244 222 473 322</p>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="bottom">
                Copyright &copy; - Kanukos Dev 2020
            </div>
        </footer>
    )
}

export default Footer;