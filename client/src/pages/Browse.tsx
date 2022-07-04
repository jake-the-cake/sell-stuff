import React, { FC } from 'react'
import { pageTitle } from '../functions/common/pageSettings'

interface BrowseProps {
    title: string
}

export const Browse:FC<BrowseProps> = ({ title }) => {
    pageTitle(title)

    return (
        <div className="browse-content">
            Browse Page
        </div>
    )
}