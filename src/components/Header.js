import React from 'react'

const Header = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  render() {
    return (
      <header className="header">
      </header>
    )
  }
}

export default Header
