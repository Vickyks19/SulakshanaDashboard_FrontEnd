import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { AiOutlineLogout } from 'react-icons/ai';
import { MdFilterFrames } from 'react-icons/md';
import { SiGlassdoor } from 'react-icons/si';
import { HiOutlineReceiptTax } from 'react-icons/hi';

function Sidebar() {
  return (
    <nav className='pcoded-navbar'>
      <div className='sidebar_toggle'>
        <a href='#'>
          <i className='icon-close icons' />
        </a>
      </div>
      <div className='pcoded-inner-navbar main-menu'>
        <div
          className='pcoded-mtext'
          data-i18n='nav.dash.main'
          href='/dashboard'
          style={{ cursor: 'pointer', paddingLeft: '30px' }}
        >
          <Link to='/dashboard'>Dashboard</Link>
        </div>
        <div
          className='pcoded-navigatio-lavel '
          data-i18n='nav.category.navigation'
        >
          MASTERS
        </div>
        <ul className='pcoded-item pcoded-left-item '>
          <li className='active'>
            <a href='/Frame'>
              <span className='pcoded-micon'>
                {/* <i class="ti-home"></i> */}
                <MdFilterFrames />
                <b>D</b>
              </span>
              <span className='pcoded-mtext' data-i18n='nav.dash.main'>
                FRAME
              </span>
              <span className='pcoded-mcaret' />
            </a>
          </li>
          <li className='pcoded-item pcoded-left-item'>
            <a href='/Mount'>
              <span className='pcoded-micon'>
                {/* <i class="ti-layout-grid2-alt"></i>  */}
              </span>
              <span
                className='pcoded-mtext'
                data-i18n='nav.basic-components.main'
              >
                MOUNT
              </span>
              <span className='pcoded-mcaret' />
            </a>
          </li>
          <li className='active'>
            <a href='/Glass'>
              <span className='pcoded-micon'>
                {/* <i className="ti-home" /> */}
                <SiGlassdoor />
                <b>D</b>
              </span>
              <span className='pcoded-mtext' data-i18n='nav.dash.main'>
                GLASS
              </span>
              <span className='pcoded-mcaret' />
            </a>
          </li>
          <li className='active'>
            <a href='/Hardboard'>
              <span className='pcoded-micon'>
                <i className='ti-home' />
                <b>D</b>
              </span>
              <span className='pcoded-mtext' data-i18n='nav.dash.main'>
                HARDBOARD
              </span>
              <span className='pcoded-mcaret' />
            </a>
          </li>
          <li className='active'>
            <a href='/Tax'>
              <span className='pcoded-micon'>
                {/* <i className="ti-home" /> */}
                <HiOutlineReceiptTax />
                <b>D</b>
              </span>
              <span className='pcoded-mtext' data-i18n='nav.dash.main'>
                TAX
              </span>
              <span className='pcoded-mcaret' />
            </a>
          </li>
        </ul>
        <div className='pcoded-navigatio-lavel' data-i18n='nav.category.forms'>
          CUSTOMER
        </div>
        <ul className='pcoded-item pcoded-left-item'>
          <li>
            <a href='/Creation'>
              <span className='pcoded-micon'>
                <i className='ti-layers' />
                <b>FC</b>
              </span>
              <span className='/Creation' data-i18n='nav.form-components.main'>
                CREATION
              </span>
              <span className='pcoded-mcaret' />
            </a>
          </li>
          <li>
            <a href='List'>
              <span className='pcoded-micon'>
                <i className='ti-layers' />
                <b>FC</b>
              </span>
              <span
                className='pcoded-mtext'
                data-i18n='nav.form-components.main'
              >
                LIST
              </span>
              <span className='pcoded-mcaret' />
            </a>
          </li>
        </ul>
        <div className='pcoded-navigatio-lavel' data-i18n='nav.category.forms'>
          QUOTATION
        </div>
        <ul className='pcoded-item pcoded-left-item'>
          <li>
            <a href='/quotation'>
              <span className='pcoded-micon'>
                <i className='ti-layers' />
                <b>FC</b>
              </span>
              <span
                className='pcoded-mtext'
                data-i18n='nav.form-components.main'
              >
                CREATION
              </span>
              <span className='pcoded-mcaret' />
            </a>
          </li>
          <li>
            <a href='/Info'>
              <span className='pcoded-micon'>
                <i className='ti-layers' />
                <b>FC</b>
              </span>
              <span
                className='pcoded-mtext'
                data-i18n='nav.form-components.main'
              >
                INFO
              </span>
              <span className='pcoded-mcaret' />
            </a>
          </li>

          <li>
            <a href='/invoice'>
              <span className='pcoded-micon'>
                <i className='ti-layers' />
                <b>FC</b>
              </span>
              <span
                className='pcoded-mtext'
                data-i18n='nav.form-components.main'
              >
                INVOICE
              </span>
              <span className='pcoded-mcaret' />
            </a>
          </li>
          <li>
            <a href='/painting'>
              <span className='pcoded-micon'>
                <i className='ti-layers' />
                <b>FC</b>
              </span>
              <span
                className='pcoded-mtext'
                data-i18n='nav.form-components.main'
              >
                PAINTING
              </span>
              <span className='pcoded-mcaret' />
            </a>
          </li>
          <li>
            <a href='/Report'>
              <span className='pcoded-micon'>
                <i className='ti-layers' />
                <b>FC</b>
              </span>
              <span
                className='pcoded-mtext'
                data-i18n='nav.form-components.main'
              >
                REPORT
              </span>
              <span className='pcoded-mcaret' />
            </a>
          </li>
          <li>
            <a href='/'>
              <span className='pcoded-micon'>
                <i className='ti-layers' />
                <b>FC</b>
              </span>
              <span
                className='pcoded-mtext'
                data-i18n='nav.form-components.main'
              >
                LOGOUT
              </span>
              <span className='pcoded-mcaret' />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
