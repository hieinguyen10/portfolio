import React from 'react'
import "./styles/IphoneScreen.css"
import applications from '../data/applications';
import TimePicker from './TimePicker';
import wifiIcon from '../assets/icons/wifi.png';

const ApplicationsList = () => {
  const icons = require.context('../assets/icons', false, /\.(png|jpe?g|gif)$/);

  const checkIconsPath = (appName) => {
    try {
      const matchingIcon = icons.keys().find((key) =>
        key.includes(`/${appName}.`)
      );
      return matchingIcon ? icons(matchingIcon) : icons('./unknown.png');
    } catch (e) {
      return icons('./unknown.png');
    }
  };

  return (
    <ul className="apps-list">
      {applications.map(({ name, link }, index) => (
        <li
          key={index}
          className="app"
          onClick={() => {
            if (link) {
              if (link.startsWith("mailto:")) {
                window.location.href = link;
              } else {
                window.open(link, "_blank");
              }
            }
          }}
        >
          <img
            src={checkIconsPath(name)}
            alt={`${name} icon`}
            loading="lazy"
          />
          <span>{name}</span>
    </li>
  ))}
</ul>

  );
}

const IphoneScreen = () => {
  return (
    <div className='screen-container'>
        <div className='top-section'>
          <div className='gid-item time-section'>
            <TimePicker/>
          </div>
          <div className='gid-item dynamic-island'>
            <div className='camera-dot'>
              <div className='camera-dot-2' />
            </div>
          </div>
          <div className='gid-item network-section'>
            <div class="network">
              <div class="leaf"></div>
              <div class="leaf"></div>
              <div class="leaf"></div>
            </div>
            <img height="30" src={wifiIcon}/>
            <div className='battery'></div>
          </div>
        </div>
        <div className='applications-section'>
          <ApplicationsList />
        </div>
        <div className='bottom-section'>
          <div className='items'></div>
          <div className='items'></div>
          <div className='items'></div>
        </div>
    </div>
  )
}

export default IphoneScreen