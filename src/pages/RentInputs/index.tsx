import { WrapInput, OriginalInput, WrapInputRow } from "../AvailableCars/styles"

export const RentInputs = () => {
    return(
        <>
        <WrapInput>
            <OriginalInput placeholder="Local de retirada"/>
        </WrapInput>
        <WrapInputRow>
            <OriginalInput placeholder="Data" />
            <OriginalInput placeholder="Hora" />
        </WrapInputRow>
        </>
    )
}