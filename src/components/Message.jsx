import React, { useState } from 'react'

const Message = () => {
    const [isShown, setIsShown] = useState(false);

    return (
        <div>
            <button onClick={() => setIsShown(true)}>Show</button>
           <p className="message">
               { isShown ? 'Shown' : 'Hidden' }
           </p>
        </div>
    );
}

export default Message;
