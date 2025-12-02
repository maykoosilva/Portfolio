import style from './Header.module.css'

function Header(){
    return(
        <header className={style['header']}>
            <nav className={style['nav']}>
                <a href='#' className={style['logo']}>&lt;Okyam/&gt;</a>
                <ul className={style['list']}>
                    <li className={style['item']}><a href='#'>Início</a></li>
                    <li className={style['item']}><a href='#'>Sobre</a></li>
                    <li className={style['item']}><a href='#'>Habilidades</a></li>
                    <li className={style['item']}><a href='#'>Projetos</a></li>
                    <li className={style['item']}><a href='#'>Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;