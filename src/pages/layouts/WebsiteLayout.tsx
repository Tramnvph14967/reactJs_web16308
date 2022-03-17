import React from 'react'
import {Outlet} from 'react-router-dom'

import Header  from '../../components/client/Header'
import Footer from '../../components/client/footer'
type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default WebsiteLayout