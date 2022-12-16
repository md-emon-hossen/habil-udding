import PaymentInput from "./PaymentInput";

export default function paymentInputWrp({ add }) {

    const item = [];
    for (var i = 0; i < add; i++) {
        item.push(<PaymentInput sId={add} />)
    }

    return (
        <div>{item}</div>
    )
}
