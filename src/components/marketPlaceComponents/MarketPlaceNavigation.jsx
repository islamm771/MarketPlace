import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../pages/marketPlace/MarketPlace.css';
import { MdAdminPanelSettings } from 'react-icons/md';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import HeaderMarketPlace from './HeaderMarketPlace';
const MarketPlaceNavigation = () => {
  const [isLargeHidden, setIsLargeHidden] = useState(true);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  return (
    <React.Fragment>
      <nav
        id='navigation-widget-small'
        className={`small-nav navigation-widget navigation-widget-desktop closed sidebar left ${
          isLargeHidden ? 'active delayed' : 'hidden'
          // isLargeHidden ? "delayed" : "hidden"
        }`}
      >
        <div className='profile-image'>
          <div className='profile-image-content'>
            <img src='/img/avatar/01.jpg' alt='Profile' />
            <RiVerifiedBadgeFill
              className='nav-small-verify'
              color={'#36e9f7'}
              size={16}
            />
            <MdAdminPanelSettings
              className='nav-small-admin'
              color={'#d7006a'}
              size={16}
            />
            <span className='profile-badge-container'>
              &#x2B22; <span className='profile-badge-content'>12</span>
            </span>
          </div>
        </div>

        <ul class={`menu small`}>
          <li class='menu-item active '>
            <a
              class='menu-item-link text-tooltip-tfr '
              // href='newsfeed.html'
              data-title='Newsfeed'
            >
              <Link
                className='market-icon-active'
                to='/marketplace'
                onClick={() => {
                  setIsLargeHidden(true);
                }}
              >
                <svg
                  class='menu-item-link-icon icon-events menu-item-link-icon icon-forums'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  // color='#ADAFCA'
                  width='20px'
                >
                  <g fill='none' fill-rule='evenodd'>
                    <path d='M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z' />
                    <path
                      fill='currentColor'
                      d='M11 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2zM5 5h4v4H5zm16 0a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2zm-6 0h4v4h-4zm-6 8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm0 2H5v4h4zm4 2a1 1 0 0 1 1-1h2v-2a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 0 1-1-1'
                    />
                  </g>
                </svg>
              </Link>
            </a>
          </li>

          <li class='menu-item'>
            <a
              class='menu-item-link text-tooltip-tfr'
              // href='events.html'
              data-title='Events'
            >
              <Link
                // className='menu-item-link'
                to='/'
                onClick={() => {
                  setIsLargeHidden(true);
                }}
              >
                <svg
                  class='menu-item-link-icon icon-events menu-item-link-icon icon-forums market-place-icon'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 640 512'
                >
                  <path
                    fill='currentColor'
                    d='M496 224c-79.59 0-144 64.41-144 144s64.41 144 144 144s144-64.41 144-144s-64.41-144-144-144m64 150.29c0 5.34-4.37 9.71-9.71 9.71h-60.57c-5.34 0-9.71-4.37-9.71-9.71v-76.57c0-5.34 4.37-9.71 9.71-9.71h12.57c5.34 0 9.71 4.37 9.71 9.71V352h38.29c5.34 0 9.71 4.37 9.71 9.71zM496 192c5.4 0 10.72.33 16 .81V144c0-25.6-22.4-48-48-48h-80V48c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h395.12c28.6-20.09 63.35-32 100.88-32M320 96H192V64h128zm6.82 224H208c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h291.43C327.1 423.96 320 396.82 320 368c0-16.66 2.48-32.72 6.82-48'
                  />
                </svg>
              </Link>
            </a>
          </li>

          <li class='menu-item'>
            <a
              class='menu-item-link text-tooltip-tfr'
              // href='forums.html'
              data-title='Forums'
            >
              <Link
                //   className='menu-item-link'
                to='/'
                onClick={() => {
                  setIsLargeHidden(true);
                }}
              >
                <svg
                  class='menu-item-link-icon icon-events menu-item-link-icon market-place-icon icon-forums'
                  xmlns='http://www.w3.org/2000/svg'
                  width='1em'
                  height='1em'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='currentColor'
                    d='M16.923 15.02q-.154-.59-.6-1.1q-.446-.512-1.135-.766l-6.992-2.62q-.136-.05-.27-.06q-.134-.012-.307-.012H7v-2.34q0-.385.177-.743t.5-.575l4.885-3.479q.223-.159.458-.229t.478-.07t.49.07t.45.229l4.885 3.479q.323.217.5.575T20 8.12v6.898zM14.5 8.441q.162 0 .283-.12t.12-.284t-.12-.282t-.283-.121t-.283.12t-.12.283t.12.283t.283.121m-2 0q.162 0 .283-.12t.12-.284t-.12-.282t-.283-.121t-.283.12t-.12.283t.12.283t.283.121m2 2q.162 0 .283-.12t.12-.284t-.12-.282t-.283-.121t-.283.12t-.12.283t.12.283t.283.121m-2 0q.162 0 .283-.12t.12-.284t-.12-.282t-.283-.121t-.283.12t-.12.283t.12.283t.283.121m1.01 11.23q.198.055.482.048q.283-.007.48-.06L21 19.5q0-.696-.475-1.137q-.475-.44-1.179-.44h-5.158q-.498 0-1.02-.06t-.978-.22l-1.57-.526q-.162-.055-.237-.211t-.025-.315q.05-.14.202-.21t.313-.016l1.433.502q.407.146.893.217q.486.07 1.053.07h1.202q.283 0 .453-.162q.17-.161.17-.455q0-.389-.309-.81q-.308-.421-.716-.565l-6.021-2.21q-.137-.042-.273-.074t-.293-.032h-2.08v6.737zM2.385 19.922q0 .46.308.768q.309.309.769.309h.846q.46 0 .768-.309t.309-.768v-6q0-.46-.309-.768t-.768-.309h-.846q-.46 0-.769.309q-.308.308-.308.768z'
                  />
                </svg>
              </Link>
            </a>
          </li>

          <li class='menu-item'>
            <a
              class='menu-item-link text-tooltip-tfr'
              // href='marketplace.html'
              data-title='Marketplace'
            >
              <Link
                //   className='menu-item-link'
                to='/marketPlace'
                onClick={() => {
                  setIsLargeHidden(true);
                }}
              >
                <svg
                  class='menu-item-link-icon icon-events menu-item-link-icon icon-forums market-place-icon'
                  xmlns='http://www.w3.org/2000/svg'
                  width='1em'
                  height='1em'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='currentColor'
                    d='M14.42 7.5L16 11H8l1.42-3.5zM9 12c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m6 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m6-7v6c0 5.55-3.84 10.74-9 12c-5.16-1.26-9-6.45-9-12V5l9-4zm-3 7l-2.16-5c-.2-.58-.76-1-1.42-1h-5C8.76 6 8.2 6.42 8 7l-2 5v4c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h6v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1z'
                  />
                </svg>
              </Link>
            </a>
          </li>
        </ul>
      </nav>

      <nav
        id='navigation-widget'
        className={`navigation-widget navigation-widget-desktop sidebar menu-big left ${
          isLargeHidden ? 'hidden' : 'active delayed'
        }`}
        data-simplebar
      >
        <figure className='navigation-widget-cover liquid'>
          <img src='img/cover/01.jpg' alt='cover-01' />
        </figure>

        <div className='user-short-description'>
          <div className='image-profile-big user-short-description-avatar user-avatar medium'>
            <img src='/img/avatar/01.jpg' alt='' />
            {/* <RiVerifiedBadgeFill
              color={'#36e9f7'}
              size={24}
              className='verify-icon-big'
            />
            <MdAdminPanelSettings
              color={'#d7006a'}
              size={24}
              className='admin-icon-big'
            /> */}
          </div>

          <p className='user-short-description-title user-name-big'>
            <a href=''>Marina Valentine</a>
          </p>

          <p className='user-short-description-text'>
            <a href=''>Marketing Manager</a>
          </p>
          <p className='user-short-description-text'>
            <a href=''>Brandmarks</a>
          </p>
        </div>

        <div className='badge-list small'>
          <div className='badge-item'>
            <img src='img/badge/gold-s.png' alt='badge-gold-s' />
          </div>

          <div className='badge-item'>
            <img src='img/badge/age-s.png' alt='badge-age-s' />
          </div>

          <div className='badge-item'>
            <img src='img/badge/caffeinated-s.png' alt='badge-caffeinated-s' />
          </div>

          <div className='badge-item'>
            <img src='img/badge/warrior-s.png' alt='badge-warrior-s' />
          </div>

          <a className='badge-item' href='profile-badges.html'>
            <img src='img/badge/blank-s.png' alt='badge-blank-s' />
            <p className='badge-item-text'>+9</p>
          </a>
        </div>

        <div className='user-stats'>
          <div className='user-stat'>
            <p className='user-stat-title'>930</p>

            <p className='user-stat-text'>posts</p>
          </div>

          <div className='user-stat'>
            <p className='user-stat-title'>82</p>

            <p className='user-stat-text'>Connections</p>
          </div>

          <div className='user-stat'>
            <p className='user-stat-title'>5.7k</p>

            <p className='user-stat-text'>Flokks</p>
          </div>
        </div>
        <ul class={`menu `}>
          <li class='menu-item active'>
            <a
              class='menu-item-link text-tooltip-tfr'
              // href='newsfeed.html'
              data-title='Newsfeed'
            >
              <Link
                className='market-icon-active'
                to='/marketplace'
                onClick={() => {
                  setIsLargeHidden(true);
                }}
              >
                <svg
                  class='menu-item-link-icon icon-events menu-item-link-icon icon-forums'
                  xmlns='http://www.w3.org/2000/svg'
                  width='1em'
                  height='1em'
                  viewBox='0 0 24 24'
                >
                  <g fill='none' fill-rule='evenodd'>
                    <path d='M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z' />
                    <path
                      fill='currentColor'
                      d='M11 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2zM5 5h4v4H5zm16 0a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2zm-6 0h4v4h-4zm-6 8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm0 2H5v4h4zm4 2a1 1 0 0 1 1-1h2v-2a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 0 1-1-1'
                    />
                  </g>
                </svg>
                {!isLargeHidden ? 'Member Classifieds' : ''}
              </Link>
            </a>
          </li>

          <li class='menu-item'>
            <a
              class='menu-item-link text-tooltip-tfr'
              // href='events.html'
              data-title='Events'
            >
              <Link
                // className='menu-item-link'
                to='/'
                onClick={() => {
                  setIsLargeHidden(true);
                }}
              >
                <svg
                  class='menu-item-link-icon icon-events menu-item-link-icon icon-forums market-place-icon'
                  xmlns='http://www.w3.org/2000/svg'
                  width='1.25em'
                  height='1em'
                  viewBox='0 0 640 512'
                >
                  <path
                    fill='currentColor'
                    d='M496 224c-79.59 0-144 64.41-144 144s64.41 144 144 144s144-64.41 144-144s-64.41-144-144-144m64 150.29c0 5.34-4.37 9.71-9.71 9.71h-60.57c-5.34 0-9.71-4.37-9.71-9.71v-76.57c0-5.34 4.37-9.71 9.71-9.71h12.57c5.34 0 9.71 4.37 9.71 9.71V352h38.29c5.34 0 9.71 4.37 9.71 9.71zM496 192c5.4 0 10.72.33 16 .81V144c0-25.6-22.4-48-48-48h-80V48c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h395.12c28.6-20.09 63.35-32 100.88-32M320 96H192V64h128zm6.82 224H208c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h291.43C327.1 423.96 320 396.82 320 368c0-16.66 2.48-32.72 6.82-48'
                  />
                </svg>
              </Link>
              {!isLargeHidden ? 'Business Products' : ''}
            </a>
          </li>

          <li class='menu-item'>
            <a
              class='menu-item-link text-tooltip-tfr'
              // href='forums.html'
              data-title='Forums'
            >
              <Link
                //   className='menu-item-link'
                to='/'
                onClick={() => {
                  setIsLargeHidden(true);
                }}
              >
                <svg
                  class='menu-item-link-icon icon-events menu-item-link-icon icon-forums market-place-icon'
                  xmlns='http://www.w3.org/2000/svg'
                  width='1em'
                  height='1em'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='currentColor'
                    d='M16.923 15.02q-.154-.59-.6-1.1q-.446-.512-1.135-.766l-6.992-2.62q-.136-.05-.27-.06q-.134-.012-.307-.012H7v-2.34q0-.385.177-.743t.5-.575l4.885-3.479q.223-.159.458-.229t.478-.07t.49.07t.45.229l4.885 3.479q.323.217.5.575T20 8.12v6.898zM14.5 8.441q.162 0 .283-.12t.12-.284t-.12-.282t-.283-.121t-.283.12t-.12.283t.12.283t.283.121m-2 0q.162 0 .283-.12t.12-.284t-.12-.282t-.283-.121t-.283.12t-.12.283t.12.283t.283.121m2 2q.162 0 .283-.12t.12-.284t-.12-.282t-.283-.121t-.283.12t-.12.283t.12.283t.283.121m-2 0q.162 0 .283-.12t.12-.284t-.12-.282t-.283-.121t-.283.12t-.12.283t.12.283t.283.121m1.01 11.23q.198.055.482.048q.283-.007.48-.06L21 19.5q0-.696-.475-1.137q-.475-.44-1.179-.44h-5.158q-.498 0-1.02-.06t-.978-.22l-1.57-.526q-.162-.055-.237-.211t-.025-.315q.05-.14.202-.21t.313-.016l1.433.502q.407.146.893.217q.486.07 1.053.07h1.202q.283 0 .453-.162q.17-.161.17-.455q0-.389-.309-.81q-.308-.421-.716-.565l-6.021-2.21q-.137-.042-.273-.074t-.293-.032h-2.08v6.737zM2.385 19.922q0 .46.308.768q.309.309.769.309h.846q.46 0 .768-.309t.309-.768v-6q0-.46-.309-.768t-.768-.309h-.846q-.46 0-.769.309q-.308.308-.308.768z'
                  />
                </svg>
              </Link>
              {!isLargeHidden ? 'Real Estate' : ''}
            </a>
          </li>

          <li class='menu-item'>
            <a
              class='menu-item-link text-tooltip-tfr'
              // href='marketplace.html'
              data-title='Marketplace'
            >
              <Link
                //   className='menu-item-link'
                to='/marketPlace'
                onClick={() => {
                  setIsLargeHidden(true);
                }}
              >
                <svg
                  class='menu-item-link-icon icon-events menu-item-link-icon icon-forums market-place-icon'
                  xmlns='http://www.w3.org/2000/svg'
                  width='1em'
                  height='1em'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='currentColor'
                    d='M14.42 7.5L16 11H8l1.42-3.5zM9 12c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m6 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m6-7v6c0 5.55-3.84 10.74-9 12c-5.16-1.26-9-6.45-9-12V5l9-4zm-3 7l-2.16-5c-.2-.58-.76-1-1.42-1h-5C8.76 6 8.2 6.42 8 7l-2 5v4c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h6v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1z'
                  />
                </svg>
              </Link>
              {!isLargeHidden ? 'Auto' : ''}
            </a>
          </li>
        </ul>
      </nav>
      
      <nav
        id='navigation-widget-mobile'
        className={`navigation-widget navigation-widget-mobile sidebar left d-flex flex-column ${
          isMobileNavOpen ? '' : 'hidden'
        }`}
        data-simplebar
      >
        <div
          className='navigation-widget-close-button'
          onClick={() => {
            // hideOverlay();
            setIsOverlayVisible(false);
            setIsMobileNavOpen(false);
          }}
        >
          <svg className='navigation-widget-close-button-icon icon-back-arrow'>
            <use xlinkHref='#svg-back-arrow'></use>
          </svg>
        </div>

        <div className='navigation-widget-info-wrap'>
          <div className='navigation-widget-info'>
            <div className='user-avatar small no-outline user-chat user-status-avatar'>
              <img src='/img/avatar/01.jpg' alt='Profile' />
              <RiVerifiedBadgeFill size={20} color={'#36e9f7'} />
            </div>

            <p className='navigation-widget-info-title navTitle'>
              <a
                // href='profile-timeline.html'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'start',
                  gap: '5px',
                }}
              >
                Marina Valentine{' '}
                {/* <RiVerifiedBadgeFill size={16} color={"#36e9f7"} /> */}
                <MdAdminPanelSettings size={20} color={'#d7006a'} />
              </a>
            </p>

            <p className='navigation-widget-info-text navInfo'>
              Marketing Manager
            </p>
            <p className='navigation-widget-info-text navInfo'>Brandmarks</p>
          </div>

          {/* <p className="navigation-widget-info-button button small secondary">
						Logout
					</p> */}
        </div>

        {/* <p className="navigation-widget-section-title">Sections</p> */}
        <div className='badge-list small'>
          <div className='badge-item'>
            <img src='img/badge/gold-s.png' alt='badge-gold-s' />
          </div>
          <div className='badge-item'>
            <img src='img/badge/age-s.png' alt='badge-age-s' />
          </div>
          <div className='badge-item'>
            <img src='img/badge/caffeinated-s.png' alt='badge-caffeinated-s' />
          </div>
          <div className='badge-item'>
            <img src='img/badge/warrior-s.png' alt='badge-warrior-s' />
          </div>
          <a className='badge-item' href='profile-badges.html'>
            <img src='img/badge/blank-s.png' alt='badge-blank-s' />
            <p className='badge-item-text'>+9</p>
          </a>
        </div>

        <div className='user-stats'>
          <div className='user-stat'>
            <p className='user-stat-title'>930</p>
            <p className='user-stat-text'>posts</p>
          </div>
          <div className='user-stat'>
            <p className='user-stat-title'>82</p>
            <p className='user-stat-text'>friends</p>
          </div>
          <div className='user-stat'>
            <p className='user-stat-title'>5.7k</p>
            <p className='user-stat-text'>visits</p>
          </div>
        </div>

        <ul className='menu'>
          <li class='menu-item active'>
            <a
              class='menu-item-link text-tooltip-tfr'
              // href='newsfeed.html'
              data-title='Newsfeed'
            >
              <Link
                className='market-icon-active'
                to='/marketplace'
                onClick={() => {
                  setIsMobileNavOpen(false);
                  setIsOverlayVisible(false);
                }}
              >
                <svg
                  class='menu-item-link-icon icon-events menu-item-link-icon icon-forums'
                  xmlns='http://www.w3.org/2000/svg'
                  width='1em'
                  height='1em'
                  viewBox='0 0 24 24'
                >
                  <g fill='none' fill-rule='evenodd'>
                    <path d='M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z' />
                    <path
                      fill='currentColor'
                      d='M11 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2zM5 5h4v4H5zm16 0a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2zm-6 0h4v4h-4zm-6 8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm0 2H5v4h4zm4 2a1 1 0 0 1 1-1h2v-2a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 0 1-1-1'
                    />
                  </g>
                </svg>
                Member Classifieds
              </Link>
            </a>
          </li>
          <li class='menu-item'>
            <a
              class='menu-item-link text-tooltip-tfr'
              // href='events.html'

              data-title='Events'
            >
              <Link
                // className='menu-item-link'
                to='/'
                onClick={() => {
                  setIsMobileNavOpen(false);
                  setIsOverlayVisible(false);
                }}
              >
                <svg
                  class='menu-item-link-icon icon-events menu-item-link-icon icon-forums market-place-icon'
                  xmlns='http://www.w3.org/2000/svg'
                  width='1.25em'
                  height='1em'
                  viewBox='0 0 640 512'
                >
                  <path
                    fill='currentColor'
                    d='M496 224c-79.59 0-144 64.41-144 144s64.41 144 144 144s144-64.41 144-144s-64.41-144-144-144m64 150.29c0 5.34-4.37 9.71-9.71 9.71h-60.57c-5.34 0-9.71-4.37-9.71-9.71v-76.57c0-5.34 4.37-9.71 9.71-9.71h12.57c5.34 0 9.71 4.37 9.71 9.71V352h38.29c5.34 0 9.71 4.37 9.71 9.71zM496 192c5.4 0 10.72.33 16 .81V144c0-25.6-22.4-48-48-48h-80V48c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h395.12c28.6-20.09 63.35-32 100.88-32M320 96H192V64h128zm6.82 224H208c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h291.43C327.1 423.96 320 396.82 320 368c0-16.66 2.48-32.72 6.82-48'
                  />
                </svg>
                Business Products
              </Link>
            </a>
          </li>
          <li class='menu-item'>
            <a
              class='menu-item-link text-tooltip-tfr'
              // href='forums.html'
              data-title='Forums'
            >
              <Link
                //   className='menu-item-link'
                to='/'
                onClick={() => {
                  setIsMobileNavOpen(false);
                  setIsOverlayVisible(false);
                }}
              >
                <svg
                  class='menu-item-link-icon icon-events menu-item-link-icon icon-forums market-place-icon'
                  xmlns='http://www.w3.org/2000/svg'
                  width='1em'
                  height='1em'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='currentColor'
                    d='M16.923 15.02q-.154-.59-.6-1.1q-.446-.512-1.135-.766l-6.992-2.62q-.136-.05-.27-.06q-.134-.012-.307-.012H7v-2.34q0-.385.177-.743t.5-.575l4.885-3.479q.223-.159.458-.229t.478-.07t.49.07t.45.229l4.885 3.479q.323.217.5.575T20 8.12v6.898zM14.5 8.441q.162 0 .283-.12t.12-.284t-.12-.282t-.283-.121t-.283.12t-.12.283t.12.283t.283.121m-2 0q.162 0 .283-.12t.12-.284t-.12-.282t-.283-.121t-.283.12t-.12.283t.12.283t.283.121m2 2q.162 0 .283-.12t.12-.284t-.12-.282t-.283-.121t-.283.12t-.12.283t.12.283t.283.121m-2 0q.162 0 .283-.12t.12-.284t-.12-.282t-.283-.121t-.283.12t-.12.283t.12.283t.283.121m1.01 11.23q.198.055.482.048q.283-.007.48-.06L21 19.5q0-.696-.475-1.137q-.475-.44-1.179-.44h-5.158q-.498 0-1.02-.06t-.978-.22l-1.57-.526q-.162-.055-.237-.211t-.025-.315q.05-.14.202-.21t.313-.016l1.433.502q.407.146.893.217q.486.07 1.053.07h1.202q.283 0 .453-.162q.17-.161.17-.455q0-.389-.309-.81q-.308-.421-.716-.565l-6.021-2.21q-.137-.042-.273-.074t-.293-.032h-2.08v6.737zM2.385 19.922q0 .46.308.768q.309.309.769.309h.846q.46 0 .768-.309t.309-.768v-6q0-.46-.309-.768t-.768-.309h-.846q-.46 0-.769.309q-.308.308-.308.768z'
                  />
                </svg>
                Real Estate
              </Link>
            </a>
          </li>
          <li class='menu-item'>
            <a
              class='menu-item-link text-tooltip-tfr'
              // href='marketplace.html'
              data-title='Marketplace'
            >
              <Link
                //   className='menu-item-link'
                to='/marketPlace'
                onClick={() => {
                  setIsMobileNavOpen(false);
                  setIsOverlayVisible(false);
                }}
              >
                <svg
                  class='menu-item-link-icon icon-events menu-item-link-icon icon-forums market-place-icon'
                  xmlns='http://www.w3.org/2000/svg'
                  width='1em'
                  height='1em'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='currentColor'
                    d='M14.42 7.5L16 11H8l1.42-3.5zM9 12c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m6 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m6-7v6c0 5.55-3.84 10.74-9 12c-5.16-1.26-9-6.45-9-12V5l9-4zm-3 7l-2.16-5c-.2-.58-.76-1-1.42-1h-5C8.76 6 8.2 6.42 8 7l-2 5v4c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h6v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1z'
                  />
                </svg>
                Auto
              </Link>
            </a>
          </li>
        </ul>

        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: '15px',
            flex: 'auto',
          }}
        >
          <p
            className='navigation-widget-info-button button small secondary'
            style={{ width: '85%', marginTop: '12px' }}
          >
            Logout
          </p>
        </div>
      </nav>
      <HeaderMarketPlace
        isLargeHidden={isLargeHidden}
        setIsMobileNavOpen={setIsMobileNavOpen}
        setIsLargeHidden={setIsLargeHidden}
        setIsOverlayVisible={setIsOverlayVisible}
      />
    </React.Fragment>
  );
};

export default MarketPlaceNavigation;
