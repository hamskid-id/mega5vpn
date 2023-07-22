import { Text } from "../element/text"

import brandLogo from "../assets/Surf.png"
export const Nav =()=>{
    return(
        <div className="d-flex justify-content-between align-items-center nav w-100">
            <div  className="d-flex align-items-center">
                <img 
                    src={brandLogo}
                    alt="objcet not found"
                    className="me-2"
                />
                <Text
                    style="fs-5 text-white fw-400"
                    value="MEGAVPN"
                />
            </div>
            <div>
                <Text
                    style="cancel text-white fw-400"
                    value="CANCEL MY MEMBERSHIP"
                />
            </div>
        </div>
    )
}