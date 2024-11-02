import React from "react";
import { Helmet } from "react-helmet";

export function Meta({
    title,
    description = null,
    image = null,
}) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta property="og:title" content={title}></meta>
            {description && (<meta name="description" content={description} />)}
            {description && (<meta property="og:description" content={description}></meta>)}
            {image && (<meta property="og:image" content={image}></meta>)}
        </Helmet>
    );
}
