import React from 'react'

import './variables.css'
import './global.css'
import Seo from '../Seo/seo'
import Navigation from '../Navigation/navigation'
import Footer from '../Footer/footer'

const Layout = ({ children, location }) => {
  return (
    <>
      <Seo />
      <Navigation />
      <main>{children}</main>
    </>
  );
};
class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Seo />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Template
