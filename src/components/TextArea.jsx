import { useState } from "react";
import Warning from "./Warning";

export default function TextArea({text, setText}) {

    const [warningText, setWarningText] = useState('');
    
    const handleChange = (e) => {
        let newText = e.target.value;
        if ( newText.includes('<script') || newText.includes('</script>') ) {
            setWarningText('No script tags allowed!');
            newText = newText.replace(/<script/g, '');
            newText = newText.replace(/<\/script>/g, '');
        }
        else
            setWarningText('');
        if ( newText.includes('@') ) {
            setWarningText('No "@" symbol allowed!');
            newText = newText.replace(/@/g, '');
        }
        else
            setWarningText('');

        setText(newText);
    }

    return (
        <div className="textarea">
            <textarea value={text} onChange={handleChange} placeholder="Enter your text..." spellCheck="false"/>
            {warningText ? <Warning warningText={warningText}/> : null}
        </div>
    )
}
