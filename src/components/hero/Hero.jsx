import style from "./Hero.module.css"

function Hero() {
    return(
        <section className={style['hero-section']}>
            <section className={style['hero-content']}>

                <p>Olá, eu sou</p>

                <h1>Maykoo Silva</h1>

                <h2>Desenvolvedor Front-end</h2>

                <p className={style['description']}>
                    Apaixonado por criar experiências web incríveis e responsivas. 
                    Transformo ideias em realidade através de código limpo e design 
                    intuitivo.
                </p>

                <div className={style['icons']}>
                    {/*VOU COLOCAR ICONS DEPOIS */}
                    <img />
                </div>

                <div className={style['container-btn']}>
                    <a href="" className={style['hero-first-link']}>Projetos</a>
                    <a href="" className={style['hero-second-link']}>Contato</a>
                </div>
            </section>
        </section>
    )
}

export default Hero;