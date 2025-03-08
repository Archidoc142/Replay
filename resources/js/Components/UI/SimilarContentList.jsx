import Carrousel from "./Carrousel";

export default function SimilarContentList({ simContent, cat_name = "" }) {

    return (
        <Carrousel
            title={"Autres " + cat_name}
            nb_items={2}
            datas={simContent.data}
            noGradient={true}
            border={true}
        >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
        </Carrousel>
    );
}
