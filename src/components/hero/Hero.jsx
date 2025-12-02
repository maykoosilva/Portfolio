import style from "./Hero.module.css"

function Hero() {
    return(
        <main className={style['main']}>
            <section className={style['hero']}>
                <p>Olá, eu sou</p>
                <h1>Maykoo Silva</h1>
                <h2>Desenvolvedor Front-end</h2>
                <p className={style['description']}>Apaixonado por criar experiências web incríveis e responsivas. Transformo ideias em realidade através de código limpo e design intuitivo.</p>

                <div className={style['social']}>
                    <img />
                    <img />
                    <img />
                </div>

                <div className={style['container-btn']}>
                    <button>Ver Projetos</button>
                    <button>Contato</button>
                </div>
            </section>
        </main>
    )
}

export default Hero;