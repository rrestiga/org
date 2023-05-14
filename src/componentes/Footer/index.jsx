import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://github.com/rrestiga/'>
                <img src="/img/github2.png" alt='github' />
            </a>
            <a href='https://www.linkedin.com/in/rrestiga/'>
                <img src="/img/linkedin2.png" alt='linkedin' />
            </a>
            <a href='https://www.instagram.com/rrestiga/'>
                <img src="/img/instagram2.png" alt='instagram' />
            </a>
        </div>
        
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por rrestiga</strong>
        
    </footer>
}

export default Footer

/* 

        <div className='redes'>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>

*/