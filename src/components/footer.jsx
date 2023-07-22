import { Text } from "../element/text";
import {Link} from 'react-router-dom';
import { RevealAnimation } from "./reveal";

export const Footer =()=>{
    return(
        <div>
            <div className="footer-hero1bg  layout-style py-5">
                <div className="d-flex wrap justify-content-between mb-5">
                    {
                        [
                            {
                                heading:"WE VALUE YOUR PRIVACY",
                                text:"Your information provided is solely used by Mega VPN for the use of a virtual private network. We will not sell your information to any other party."
                            },{
                                heading:"CUSTOMER SUPPORT",
                                text:"Our technical support team is ready to answer questions. You can contact them at 5@megavpn.com"
                            },{
                                heading:"YOUR SATISFACTION IS OUR PRIORITY",
                                text:"If you are in any way unhappy with the quality of our service or product please contact us. We are here to help you."
                            },{
                                heading:"WHAT ARE THE BENEFITS OF A VPN?",
                                text:"With Mega VPN you can access content from different countries, which would not necessarily be available in your country. Also with a VPN you can hide your online presence to secure your daily internet activity"
                            },
                        ].map((option,index)=>{
                            const{
                                heading,
                                text
                            }=option;
                            return(
                                <div key={index} className="d-flex flex-column p-3 wt-25">
                                    <RevealAnimation>
                                        <Text
                                            style="text-white fw-bold fs-6 mb-3"
                                            value={heading}
                                        />
                                    </RevealAnimation>
                                    <RevealAnimation>
                                        <Text
                                            style="text-white fw-300 fs-8 mb-3 justify ln-23"
                                            value={text}
                                        />  
                                    </RevealAnimation>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="wt-75 d-flex wrap justify-content-center m-auto">
                    {[
                        {
                            title:"Privacy policy",
                            route:"/"
                        },{
                            title:"Terms and conditions",
                            route:"/"
                        },{
                            title:"Contacts",
                            route:"/"
                        },{
                            title:"How to install",
                            route:"/"
                        }
                    ].map((option,index)=>{
                        const{
                            title,
                            route
                        }=option;
                        return(
                            <RevealAnimation>
                                <Link to={route} key={index} className="text-white fs-8 fw-300 p-3">{title}</Link>
                            </RevealAnimation>
                        )
                    })
                    }
                </div>
            </div>
            <div className="footer-hero2bg layout-style py-5">
                <RevealAnimation>
                    <Text
                        style="text-center text-white fs-8"
                        value="Copyright © 2023 5Star Innovative Company. All Rights Reserved"
                    />
                </RevealAnimation>
            </div>
        </div>
    )
}