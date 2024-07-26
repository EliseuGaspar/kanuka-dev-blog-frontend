import
{
    imagem_capa, logo, eliseu_image, trycode_image, dg_image, matias_image,
    mauricio_image, Image, Header, Footer, Divider, Card, CircleCard

} from "@/app/global.imports";


export default function Homepage() {
    return (
        <>
            <Header />
            <main className="relative top-0 w-screen flex flex-col pt-7-25 justify-center items-center overflow-x-hidden">
                
                <section id="hero">
                    <Image src={imagem_capa} alt="" />
                    <div className="description">
                        <h3>Tema: A criação de um futuro atrávez de teclas.</h3>
                        <h5>Data de publicação: Quinta-Feira - 25/07/2024</h5>
                        <h5>Categoria: Desenvolvimento</h5>
                        <h5>Autor: Daniel Geraldo</h5>
                    </div>
                </section>
                
                <Divider title="Últimas Postagens" divider="true" />
                
                <section id="cards-posts" className="flex w-screen justify-center gap-3p">
                    
                    <Card title="Titulo 1" header={`
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit expedita sit nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit expedita sit nihil.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit expedita sit nihil.
                        `} reacts={120} views={300} comments={12} imagelink="https://evermonte.com/wp-content/uploads/2022/09/tecnologia-inteligente-trabalho-humanizado.png" />
                    
                    <Card title="Titulo 2" header={`
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit expedita sit nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit expedita sit nihil.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit expedita sit nihil.
                        `} reacts={23} views={120} comments={7} imagelink="https://evermonte.com/wp-content/uploads/2022/09/tecnologia-inteligente-trabalho-humanizado.png" />
                    
                    <Card title="Titulo 3" header={`
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit expedita sit nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit expedita sit nihil.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit expedita sit nihil.
                        `} reacts={232} views={520} comments={70} imagelink="https://evermonte.com/wp-content/uploads/2022/09/tecnologia-inteligente-trabalho-humanizado.png" />
                </section>
                <div className="div-button">
                    <a href="/posts/month-last" className="py-2.5 px-9 bg-color-normal fg-color-normal btn-radius">Últimos Posts d&apos;Mês</a>
                </div>

                <Divider title="Sobre Nós!" divider="true" />
                
                <section id="about" className="flex w-screen justify-center gap-3p text-justify p-8">
                    <h3>
                        A <span>Kanukos Dev&apos;s</span> nasceu da vontade de partilhar conhecimentos e experiências, acreditando que a troca de <span>informações</span> é a chave para o crescimento e o avanço na área de <span>TI</span>. Com uma equipe de autores experientes e convidados especiais, <span>nosso objetivo</span> é trazer conteúdos relevantes, didáticos e inspiradores para ajudar você a se manter atualizado e evoluir em sua <span>carreira</span>.
                    </h3>
                </section>
                
                <Divider title="Nossa Equipe" divider="true" />
                
                <section id="team" className="flex w-screen justify-center gap-3p flex-wrap">
                    <CircleCard name="Eliseu Gaspar" office="Full Stack Developer" image={eliseu_image} />
                    <CircleCard name="Daniel Geraldo" office="Web Developer" image={dg_image} />
                    <CircleCard name="Henrique Ventura" office="Software Developer" image={trycode_image} />
                    <CircleCard name="Maurício Mbala" office="FronEnd Developer" image={mauricio_image} />
                    <CircleCard name="Matias Canhanga" office="UI/UX Designer" image={matias_image} />
                </section>
                
                <Divider title="Nosso Objectivo ?" divider="true" />
                
                <section id="about" className="flex w-screen justify-center gap-3p text-justify p-8">
                    <h3>
                    <span>Estamos</span> comprometidos em criar um ambiente inclusivo e colaborativo, onde todos se sintam bem-vindos para aprender e contribuir. <span>Seja</span> você um desenvolvedor experiente ou alguém dando os primeiros passos na <span>TI</span>, nosso blog tem algo para oferecer. Junte-se a nós nessa <span>jornada</span> de descoberta e crescimento, e faça parte da comunidade <span><u>Kanukos Dev&apos;s</u></span>!
                    </h3>
                </section>
                
                <Divider title="" divider="false" />
            </main>
            <Footer imagem = { logo } />
        </>
    );
}
