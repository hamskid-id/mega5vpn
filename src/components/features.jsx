import { Text } from "../element/text"
import grimg2 from "../assets/Group 50.png"
import grimg3 from "../assets/Group 46.png"
import grimg4 from "../assets/Group 47.png"
import grimg5 from "../assets/Group 48.png"
import grimg6 from "../assets/Group 49.png"
import grimg7 from "../assets/Group 51.png"
import ti4 from "../assets/Tło 4.png"
import { RevealAnimation } from "./reveal"

export const Features =()=>{
    return(
        <div
            className="py-5 layout-style background-image"
            style={{
                backgroundImage:`url("${ti4}")`
            }}
        >
            <RevealAnimation>
                <Text
                    style="fs-4 fw-bold text-white text-center mb-5"
                    value="FEATURES"
                />
            </RevealAnimation>
            <div className="d-flex wrap justify-content-between m-auto">
                {[
                    {
                        img:grimg7,
                        spaceTop:false
                    },{
                        img:grimg2,
                        spaceTop:true
                    },{
                        img:grimg6,
                        spaceTop:false
                    },{
                        img:grimg5,
                        spaceTop:true
                    },{
                        img:grimg4,
                        spaceTop:false
                    },{
                        img:grimg3 ,
                        spaceTop:true
                    }
                ].map((option,index)=>{
                    const{
                        img,
                        spaceTop
                    }=option;
                    return(
                        <div 
                            key={index}
                            className={`${ spaceTop ? "spaceTop" : '' } p-2 shiftCenter w-16`}
                        >
                            <RevealAnimation>
                                <img 
                                    src={img}
                                    alt="object not found"
                                    className="w-100"
                                />
                            </RevealAnimation>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}