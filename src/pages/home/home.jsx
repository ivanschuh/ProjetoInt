import React from "react";

import './home.css';

import BotaoCadastro from "../../components/cadastro/cadastro";
import NavBar from '../../components/navbar/navbar'
import Carousel from "../../components/carousel/carousel";
import Footer from "../../components/footer/footer"


const Home = () => {
    
    return (
        <div>
            <NavBar/>
            <Carousel/>
            <BotaoCadastro/>
            <div className='sobre'>
            <div className='titulo'>Sobre a Barbearia</div>
                <p className='descricao'>A BARBEARIA é pioneira no conceito de “barbearia premium” e atualmente é a maior rede de estética masculina da América Latina: em 1998 apresentou ao mercado o modelo inovador, pioneiro no sul do país.
                Para acompanhar as tendências do mercado, o CONCEITO BARBEARIA entendeu as demandas do homem moderno e foi além, transformando o simples ato de fazer a barba ou cortar o cabelo em uma experiência de lazer e confraternização.
                O pacote de mordomias inclui open bar, televisores individuais, revistas masculinas, futebol na TV e jogos de videogame.
                A marca própria conta com linha de cosméticos, óculos e também de roupas.
                Projetos sociais, participação em eventos e exposição na mídia alavancaram a BARBEARIA VIP que, mesmo em anos de crise, cresceu meteoricamente abrindo franquias em sete estados e também na Europa e Estados Unidos.
                A ascensão da empresa resultou em prêmios empresariais nacionais e internacionais.</p>
            </div>
            <div className='servicos'>
                <div className='titulo'>Serviços da Barbearia</div>
                <ul className='descricao'>
                    <li className='item' >Item 1</li>
                    <li className='item' >Item 2</li>
                    <li className='item' >Item 3</li>
                    <li className='item' >Item 4</li>
                </ul>
            </div>
            <div className='contato'>
                <div className='titulo'>Contato: Formas de contato</div>
            </div>
            <Footer/>
        </div>
    )
}
export default Home;