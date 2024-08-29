import React from 'react'
import { Spinner } from 'react-bootstrap'

import "./spinner.css"
export default function Spinners() {
  return (
    <div>
       <div className="full-page-spinner">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
    </div>
  )
}
