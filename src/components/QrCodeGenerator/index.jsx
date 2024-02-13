import React from "react"
import QRCode from "react-qr-code"

export default function QrGenerator(){

    const [input,setInput] = React.useState('');
    const [qrcode,setQrCode] = React.useState('');
    function handleQrGenerator(){
        setQrCode(input);
    }
    return(
        <div>
            <h1 style={{fontSize:'40px'}}>Simple QR Generator</h1>
            <div className="secondBar">

            <input onChange={(e)=>setInput(e.target.value)} style={{margin:'10px', padding:'10px', fontSize:'20px', borderRadius:'5px'}} type="text" placeholder="Enter the text here"/>
            <button style={{margin:'10px', padding:'10px', fontSize:'20px', borderRadius:'5px'}} disabled={input&&input.length?false:true} onClick={handleQrGenerator}>Generate</button>
            </div>
            <div className="qr">
                <QRCode value={qrcode} style={{backgroundColor:'white', margin:'30px'} } size={400}/>
            </div>
        </div>
    )
}