import { useState } from "react";
import AddImage from "../Common/AddImage";

export default function LivreForm() {

    const [filename, setFilename] = useState("");

    return(
        <div className="p-6">
            <div className="flex"> {/*Changer pour un form */}
                <AddImage filename={filename} setFilename={setFilename} />

                <div>

                </div>
            </div>
        </div>
    )
}
