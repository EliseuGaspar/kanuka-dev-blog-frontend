// ----------------------------------------- IMPORTAÇÕES ----------------------------------- //


// ASSETS
import imagem_capa from "@/images/capa.jpg";
import logo from "@/images/kanukos dev.png";
import dg_image from "@/images/team/dg.jpeg";
import matias_image from "@/images/team/matias.jpeg";
import trycode_image from "@/images/team/trycode.jpeg";
import mauricio_image from "@/images/team/mauringo.jpeg";
import eliseu_image from "@/images/team/Elizeu-circle.png";

// COMPONENTES
import React from 'react';
import Header from "@/components/header";
import Footer from "@/components/footer";
import ReactMarkdown from 'react-markdown';
import Image, {StaticImageData} from "next/image";
import Card from "@/components/homepage_components/card";
import MarkdownRenderer from "@/components/readermarkdown";
import Divider from "@/components/homepage_components/divider";
import CircleCard from "@/components/homepage_components/circle-card";

// TYPES e INTERFACES
import { 
    PropsParams, PropsCard, PropsCircleCard,
    PropsDivider, PropsFooter, PropsMarkdownRenderer,
} from "@/validators/interfaces/Props";



// ----------------------------------------- EXPORTAÇÕES ----------------------------------- //

// ASSETS

export {
    logo,
    imagem_capa,
    eliseu_image,
    trycode_image,
    dg_image,
    matias_image,
    mauricio_image
};

// COMPONENTES

// Next.js and React
export {
    Image, React,
    ReactMarkdown
}
export type { StaticImageData }

// Custom
export {
    Header,
    Footer,
    Divider,
    Card,
    CircleCard,
    MarkdownRenderer
}

// TYPE e INTERFACES
export type {
    PropsCard, PropsCircleCard,
    PropsDivider, PropsParams,
    PropsFooter, PropsMarkdownRenderer
}
