import React from 'react'

const Offline = () => {
  return (
    <div>
      <div className="offline-container">
        <div className="offline-content">
          <h1 className="display-1 text-danger mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-wifi-off" viewBox="0 0 16 16">
              <path d="M10.743 7.863L9.646 6.766A5 5 0 0 0 1.517 7.03L.807 6.321A6 6 0 0 1 8 5c.672 0 1.32.11 1.928.324l1.397-1.397A7 7 0 0 0 8 3a7 7 0 0 0-5.103 2.378l1.761 1.76l2.16-2.16c.333.023.669.055 1.002.094l.394.394zm.847 2.126.793.792c.245-.2.482-.413.708-.642l-1.396-1.396zM8 11c.905 0 1.785.158 2.593.45l-4.757-4.757C3.385 7.942 3.01 8.955 3.01 10c0 .905.158 1.785.45 2.593l-4.757 4.757C.184 16.71 0 16.906 0 17H0z" />
              <path d="M12.915 9.94.707 16.973l.707.707 12.208-12.033zM15.535 7.465l-.707-.707L8 14.586l.707.707z" />
            </svg>
          </h1>

          <h2 className="mb-3 text-secondary">You're Offline! 😞</h2>

          <p className="lead mb-4">
            It looks like you've lost your internet connection.
          </p>

          <p className="text-muted small">
            Please check your Wi-Fi or mobile data and try again.
            This page is designed to be fully responsive thanks to **Bootstrap**.
          </p>

          <button className="btn btn-primary mt-3" onclick="window.location.reload();">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .91.417A6 6 0 1 1 8 2v1z" />
              <path d="M8 4.466V.534l4.646 2.417L8 4.466z" />
            </svg>
            Try to Reconnect
          </button>
        </div>
      </div>
    </div>
  )
}

export default Offline