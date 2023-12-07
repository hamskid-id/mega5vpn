import { Btn } from "../element/btn"
import { Text } from "../element/text"
import image from "../assets/Group 113.png"
import bgimage from "../assets/Tbg 2.png"
import { RevealAnimation } from "./reveal"

export const IntroSection =()=>{
    return(
        <div style={{
            backgroundImage:`url("${bgimage}")`
        }}
        className="d-flex  justify-content-betweeen wrap layout-style py-5">
            <div className="wt-50 py-4">
                <RevealAnimation>
                    <Text
                        style=" mb-2 fs-1 text-start text-white fw-bold"
                        value="SECURE YOUR DIGITAL LIFE"
                    />
                </RevealAnimation>
                <RevealAnimation>
                    <Text
                        style="mb-3 text-start text-white fw-300 fs-7"
                        value="Browse the web safely & privately"
                    />
                </RevealAnimation>
                <RevealAnimation>
                    <Text
                        style="fw-bold mb-4 fs-1 text-start text-white"
                        value="PROTECT ALL YOUR DEVICES"
                    />
                </RevealAnimation>
                <div className="w-fit-content mb-2">
                    <RevealAnimation>
                        <Btn
                            style="btn btn-md px-5 py-3 fw-bold downloadbtn ms-auto "
                            value="DOWNLOAD NOW"
                        />
                    </RevealAnimation>
                </div>
                <RevealAnimation>
                    <Text
                        style="text-start text-white fw-300 fs-7"
                        value="*Free trial License"
                    />
                </RevealAnimation>
            </div>
            <div className="wt-50 py-4">
                <RevealAnimation
                    side={true}
                >
                    <img
                        src={image}
                        alt="object not found"
                        className="w-100"
                    />
                </RevealAnimation>

            </div>
        </div>
    )
}
