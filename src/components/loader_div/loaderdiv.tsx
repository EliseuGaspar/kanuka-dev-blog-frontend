"use client"

import Image from "next/image";
import bg from '@/images/bg3.jpg';
import { useEffect, useState } from "react";
import DevBlogAPI from '@/lib/dev_blog_api';
import LocalStorage from "@/services/localStorage";
import style from '@/styles/modules/loaddiv.module.css';



export default function LoaderDiv()
{
    let [state_loader, setLoaderState] = useState('active')

    useEffect(()=>{
        let local_storage = new LocalStorage();

        if (local_storage.rememberMe()) { // Se a opção remember tiver sido ativada então:
            // Verifica-se se existe um token
            if (local_storage.exists_Token()) { // Caso exista um token então:
                // Realiza-se a auto-login
                let api = new DevBlogAPI();
            } else {
                // Redireciona para a página de login
            }
        } else {
            console.log('entrou aqui')
            // Redireciona para a página de login
        }

        return ()=> {

        }
    }, [])

    return (
        <div id={style.loadDiv} className={state_loader}>
            <Image src={bg} alt={""} className = {
                "absolute top-0 w-screen h-screen -z-10 opacity-25"
            }></Image>
            <div className = { style.bouncing_dots }>
                <div className = { style.dot }></div>
                <div className = { style.dot }></div>
                <div className = { style.dot }></div>
            </div>
            <h5 className="font-bold text-sm text-center">
                <p>Acertando algumas coisinhas</p>
                <p>(porfavor aguarde...)</p>
            </h5>
        </div>
    )
}
