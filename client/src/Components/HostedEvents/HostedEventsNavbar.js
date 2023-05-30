import React from 'react'

function HostedEventsNavbar() {
    return (
        <nav className='navbar'>
          <div className='navbar-logo'>
            <Link to='/dashboard'>Eventbridge</Link>
          </div>
          <ul className='navbar-links'>
            <li><button className="btn btn-info" onClick={hostedevents}>Hosted Events</button></li>
            <li><button className="btn btn-info" onClick={participatedevents}>Participated Events</button></li>
            <li><button className="btn btn-info" onClick={createevent}>Create Event</button></li>
            <li><button className='btn btn-info' onClick={handlelogout}>Logout</button></li>
          </ul>
        </nav>
      );
}

export default HostedEventsNavbar