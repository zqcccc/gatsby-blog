import React from 'react'
import { Link } from 'gatsby'

import * as cn from './index.module.css'

export default () => {
  return (
    <ul className={cn.menuList}>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/about">about</Link>
      </li>
      <li>
        <p>awesome collections</p>
        <p className={cn.sub}>
          <a
            target="_blank"
            href="https://paveldogreat.github.io/WebGL-Fluid-Simulation/"
          >
            WebGL Fluid
          </a>
        </p>
      </li>
    </ul>
  )
}
