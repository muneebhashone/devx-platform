import React from 'react'

interface PrimaryHeadingProps {
  heading: string;
  className?: string;
}

const PrimaryHeading: React.FC<PrimaryHeadingProps> = ({ heading, className }) => {
  return (
    <h1 className={`text-2xl font-bold mb-2 ${className || ''}`}>{heading}</h1>
  )
}

export default PrimaryHeading