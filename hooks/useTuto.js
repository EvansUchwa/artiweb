import React, { useState } from 'react'

function useTuto() {
    const [tuto, setTuto] = useState(false);

    function setTheTuto() {
        setTuto(true)
    }
    return { tuto, setTheTuto };
}

export default useTuto
