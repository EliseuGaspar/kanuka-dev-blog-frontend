import { StaticImageData } from 'next/image';



export interface PropsFooter {
    imagem: StaticImageData;
}

export interface PropsParams {
    params : {
        type_session: string
    };
}

export interface PropsDivider {
    title: string;
    divider: string;
}

export interface PropsCard {
    id ? : string;
    title : string;
    header : string;
    reacts : number;
    comments : number;
    views : number;
    imagelink : string;
}

export interface PropsCircleCard {
    name : string;
    office : string;
    image : StaticImageData;
}

export interface PropsMarkdownRenderer {
    content: string;
}

