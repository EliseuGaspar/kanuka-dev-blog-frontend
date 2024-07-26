'use client'

import { PropsParams } from "@/app/global.imports";


export default function Session({params}: PropsParams) {

    const type_session = params.type_session;

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 z-30">
            <a href="/homepage" className="absolute top-5 left-5 text-lg font-bold"><i className="fas fa-home"></i> HomePage</a>
            {
                type_session === 'sign-in' ? (
                    <form action="#" id="form">
                        <div className="box1 box">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="exemplo@devblog.com"/>
                        </div>
                        <div className="box2 box">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="********" />
                        </div>
                        <div className="box3 box">
                            <input type="checkbox" name="remember" id="remember" />
                            <label htmlFor="remember">Lembre-se de mim!</label>
                        </div>
                        <button className="submit-btn">Submeter</button>
                        <span>Sem conta ainda? <a href="/session/sign-up">Criar uma.</a></span>
                    </form>
                ) : (
                    <form action="#" id="form" className="signup">
                        <div className="box0 box">
                            <label htmlFor="name">Nome</label>
                            <input type="text" name="name" id="name" placeholder="Dev Blog Username"/>
                        </div>
                        <div className="box1 box">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="exemplo@devblog.com"/>
                        </div>
                        <div className="box2 box">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="********" />
                        </div>
                        <div className="box3 box">
                            <input type="checkbox" name="remember" id="remember" />
                            <label htmlFor="remember">Lembre-se de mim!</label>
                        </div>
                        <button className="submit-btn">Cadastrar-se</button>
                        <span>Tenho uma conta! <a href="/session/sign-in">Fazer login.</a></span>
                    </form>
                )
            }
        </main>
    );
}
