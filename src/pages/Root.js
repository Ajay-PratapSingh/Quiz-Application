import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

export default function RootLayout() {
  return (
    <Fragment>
        <MainNavigation></MainNavigation>
        <Outlet></Outlet>
    </Fragment>
  )
}
