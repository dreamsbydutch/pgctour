import { useState, useEffect } from 'react';
import './utils.css'


export function getRkChange(rkChange) {
    var style = {}
    var arrow = ''

    if (+(rkChange) > 0) {
        arrow = 'up'
        style = {
            color: 'green'
        }
    } else if (+(rkChange) < 0) {
        arrow = 'down'
        style = {
            color: 'red'
        }
    }

    return (
        <span className="utils-rankchange" style={style}>
            <span className="utils-rkchange-arrow">
                {arrow === 'up' ?
                    <i className="fa fa-long-arrow-up" aria-hidden="true"></i> :
                    arrow === 'down' ?
                        <i className="fa fa-long-arrow-down" aria-hidden="true"></i> :
                        <i className="fa fa-arrows-h" aria-hidden="true"></i>}
            </span>
            {Math.abs(rkChange) === 0 ?
                "" : Math.abs(rkChange)}
        </span>
    )
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}