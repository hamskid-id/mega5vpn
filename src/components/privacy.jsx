import { Btn } from "../element/btn"
import { Text } from "../element/text";
import png5 from "../assets/pngwing 5.png"
import png4 from "../assets/pngwing 4.png"
import png6 from "../assets/pngwing 6.png"
import { RevealAnimation } from "./reveal";

export const Privacy =()=>{
    return(
        <div className="layout-style py-5">
            <RevealAnimation>
                <Text
                    style="fs-4 fw-400 text-black text-center mb-5"
                    value="PRIVACY AND PROTECTION IN THREE STEPS"
                />
            </RevealAnimation>
            <div className="d-flex justify-content-between wrap  m-auto">
                {
                    [
                        {
                            img:png6,
                            text:"DOWNLOAD"
                        },{
                            img:png4,
                            text:"SELECT SERVER"
                        },{
                            img:png5,
                            text:"ACTIVATE & GO!"
                        }
                    ].map((option,index)=>{
                            const{
                                img,text
                            }=option;
                        return(
                            <div 
                                key={index} 
                                className="d-flex flex-column align-items-center px-2 justify-content-between p-2 shiftCenter wt-32"
                            >
                                <RevealAnimation>
                                    <img src={img} alt="object not found" className="w-100 "/>
                                </RevealAnimation>
                                <div className="w-fit-content my-2">
                                    <RevealAnimation>
                                        <Btn
                                            style={`${index==0?"greengradient":index==1?"yellowgradient":"bluegradient"} btn btn-md px-5 py-3 fw-bold downloadbtn2 m-auto `}
                                            value={text}
                                        />
                                    </RevealAnimation>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}