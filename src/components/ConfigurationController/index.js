import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const contentChange = event => {
        onToggleShowContent(event.target.checked)
      }
      const leftNavbarChange = event => {
        onToggleShowLeftNavbar(event.target.checked)
      }
      const rightNavbarChange = event => {
        onToggleShowRightNavbar(event.target.checked)
      }
      return (
        <div className="top-container">
          <h1 className="top-heading">Layout</h1>
          <div className="element-container">
            <input
              type="checkbox"
              className="check-box"
              id="input1"
              onChange={contentChange}
              value="Content"
              defaultChecked
            />
            <label className="label" htmlFor="input1">
              Content
            </label>
          </div>
          <div className="element-container">
            <input
              type="checkbox"
              className="check-box"
              id="input2"
              onChange={leftNavbarChange}
              value="Left Navbar"
              defaultChecked
            />
            <label className="label" htmlFor="input2">
              Left Navbar
            </label>
          </div>
          <div className="element-container">
            <input
              type="checkbox"
              className="check-box"
              id="input3"
              onChange={rightNavbarChange}
              value="Right Navbar"
              defaultChecked
            />
            <label className="label" htmlFor="input3">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
