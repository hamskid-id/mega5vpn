import { Text } from "../element/text"
import Group98 from "../assets/Group 98.png"
import Group99 from "../assets/Group 99.png"
import Group97 from "../assets/Group 97.png"
import Group100 from "../assets/Group 100.png"
import bgimage from "../assets/Tło 3.png"
import { RevealAnimation } from "./reveal"

export const WhySection =()=>{
    return(
        <div 
            className="py-5 layout-style background-image"
            style={{
                backgroundImage:`url("${bgimage}")`
            }}
        >
            <RevealAnimation>
                <Text
                    style="mb-3 fs-4 text-center text-white fw-400"
                    value="WHY USE A VPN?"
                />
            </RevealAnimation>
            <RevealAnimation>
                <Text
                    style="justify text-white fs-8 ln-23 mb-3 wt-75 m-auto fw-300"
                    value="Using the internet these days is more daunting than ever, with many types of cyberthreats. There is only one true way to use the internet privately, and that is with a VPN or Virtual Private Network. Whether you want to watch region-specific content or create a secure home office environment, VPNs can be more useful now than ever."
                />
            </RevealAnimation>
            <div className="d-flex wrap justify-content-between align-items-center m-auto">
                {
                    [
                        {
                            img:Group97,
                        },{
                            img:Group98,
                        },{
                            img:Group99,
                        },{
                            img:Group100
                        }
                    ].map((option,index)=>{
                        const{
                            img
                        }=option;
                        return(
                            <div className="p-2 shiftCenter"key={index}>
                                <RevealAnimation>
                                    <img src={img} alt="object not found" className="w-100"/>
                                </RevealAnimation>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}