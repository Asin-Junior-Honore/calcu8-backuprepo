import gcelogo from "../assets/gcelogo.svg";
import jamblogo from "../assets/jamblogo.svg";
import postutmelogo from "../assets/postutmelogo.svg";
import necologo from "../assets/necologo.svg";
import nabteblogo from "../assets/nabteblogo.svg";
import juniorwaeclogo from "../assets/juniorwaeclogo.svg";

export type Exam = {
    id: number;
    imgSrc: string;
    title: string;
};

export const examData: Exam[] = [
    {
        id: 1,
        imgSrc: gcelogo,
        title: "wassce/gce",
    },
    {
        id: 2,
        imgSrc: jamblogo,
        title: "jamb",
    },
    {
        id: 3,
        imgSrc: postutmelogo,
        title: "post utme",
    },
    {
        id: 4,
        imgSrc: necologo,
        title: "neco",
    },
    {
        id: 5,
        imgSrc: nabteblogo,
        title: "nabteb",
    },
    {
        id: 6,
        imgSrc: juniorwaeclogo,
        title: "bece (Junior waec)",
    },
];
