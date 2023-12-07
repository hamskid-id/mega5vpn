import { Text } from "../element/text"
import img from "../assets/Group 114.png";
import vector from "../assets/Vector (13).png";
import bgimg from "../assets/Tbg 5.png";
import { Btn } from "../element/btn";
import { RevealAnimation } from "./reveal";

export const ProtectAllDevices =()=>{
    return(
        <div
            className="py-5 layout-style background-image"
            style={{
                backgroundImage:`url("${bgimg}")`
            }}>
                <RevealAnimation>
                    <Text
                        style="mb-5 fs-4 text-center text-white fw-bold"
                        value="PROTECT ALL YOUR DEVICES"
                    />
                </RevealAnimation>

            <div className="d-flex wrap justify-content-between pt-3">
                <div className="wt-50">
                    <RevealAnimation>
                        <Text
                            style="text-start fs-3 mb-5 text-start fw-400 text-white text-wrap wt-75"
                            value="MEGA VPN IS AN APPLICATION DESIGNED FOR YOU:"
                        />
                    </RevealAnimation>
                    <div className="mb-4">
                        {["Use Mega VPN on every device","One click to a safer internet","Secure access, worldwide","Stronger data protection" ].map((option,index)=>{
                            return(
                                <div
                                    key={index}
                                    className="d-flex align-items-center mb-3"
                                >
                                    <span className="me-1">
                                        <RevealAnimation side={true}>
                                            <img src={vector} alt="object not found"/>
                                        </RevealAnimation>
                                    </span>
                                    <span>
                                        <RevealAnimation>
                                            <Text
                                                value={option}
                                                style="fs-7 fw-300 text-white"
                                            />
                                        </RevealAnimation>
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                    <div className="w-fit-content mb-5">
                        <RevealAnimation>
                            <Btn
                                style="btn btn-md px-5 py-3 fw-bold downloadbtnRed ms-auto text-white "
                                value="GET STARTED"
                            />
                        </RevealAnimation>
                    </div>
                </div>
                <div className="px-4 wt-50">
                    <RevealAnimation side={true}>
                        <img
                            src={img}
                            alt="object not found"
                            className="w-100"
                        />
                    </RevealAnimation>
                </div>
            </div>
        </div>
    )
}
