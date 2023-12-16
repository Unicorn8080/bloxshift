import { TechLogos } from "./techlogos"
import { TechNumber } from "./technumber"
import { TechText } from "./techtext"

const TechPart = () => {
    return (
        <div className="flex flex-col gap-[80px]">
            <TechLogos />
            <TechText />
            <TechNumber />
        </div>
    )
}
export default TechPart
