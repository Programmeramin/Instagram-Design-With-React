import { Helmet } from "react-helmet";





import React from 'react'

const Meta = ({title}) => {
  return (
    <>
    
<Helmet>
    <title>{title}</title>
    <link rel="shortcut icon" href="https://static.cdninstagram.com/rsrc.php/v3/yI/r/VsNE-OHk_8a.png" type="image/x-icon" />
</Helmet>
    </>
  )
}

export default Meta