import React, {useState} from "react";

export default function Textform(props) {
    const [text, setText] = useState("Enter Your Text Here!");

    let clikekdmuss = function(){ let newText = text.toUpperCase(); setText(newText) }

    let changeonto = function(event){ setText(event.target.value)}

    let copymytext = function() {

      let copyText = document.getElementById("myInput");
    
      copyText.select();
      copyText.setSelectionRange(0, 99999);
    
      navigator.clipboard.writeText(copyText.value);
    
      alert("Copied the text: " + copyText.value);
    }

    let removespace = function(){
      let newtext = text.split(/[ ]+/)
      setText(newtext.join(" "))
    }

    document.title = "Text Utils - Home"
    return (
      <>
      
    <div className="mb-3">
      <h5 className="form-label form-label1">{props.heading}</h5>
      <textarea className="form-control form-control1" id="myInput" rows="3" value={text} onChange={changeonto} ></textarea>
      <button className="btn btnforupper btn-primary" onClick={clikekdmuss}>Convert to uppercase</button>
      <button className="btn btnforupper btn-primary ms-2" onClick={copymytext}>Copy to Clipboard</button>
      <button className="btn btnforupper btn-primary ms-2" onClick={removespace}>Remove Extra Spaces</button>
    </div>
      <h5 className="mt-4">Your Text Summary</h5>
      <h6>In Your Given Text Words count is : {text.split(" ").length} and Characters count is : {text.length}</h6>
      <h6>Time to read this text is : {0.008* text.split(" ").length} minutes</h6>
      


  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Preview Text
  </button>
<div class="collapse" id="collapseExample">
  <div class="card card-body mt-2">
    
    {text.length>0?text:"Write Something in above box to preview it here."}
  </div>
</div>


    </>
    )
}
