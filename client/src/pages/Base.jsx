import React from 'react'
import { Outlet } from 'react-router-dom'
import { Topbar } from '../components/Topbar'

export default function Base () {
  return (
    <>
    <Topbar/>
    <Outlet/>
    </>
  )
}
