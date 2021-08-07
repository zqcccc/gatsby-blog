import React from "react"
import { Link } from "gatsby"

import * as cn from "./index.module.less"

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
        <li>
          <Link to="https://paveldogreat.github.io/WebGL-Fluid-Simulation/">
            WebGL Fluid
          </Link>
        </li>
      </li>
    </ul>
  )
}
