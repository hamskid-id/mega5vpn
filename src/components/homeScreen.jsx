import { Features } from "./features"
import { Footer } from "./footer"
import { IntroSection } from "./intro"
import { Nav } from "./nav"
import { Privacy } from "./privacy"
import { ProtectAllDevices } from "./protect"
import { WhySection } from "./reason"

export const HomeScreen =()=>{
    return(
        <div>
            <Nav/>
            <IntroSection/>
            <WhySection/>
            <Features/>
            <Privacy/>
            <ProtectAllDevices/>
            <Footer/>
        </div>
    )
}