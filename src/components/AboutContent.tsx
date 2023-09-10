import React from 'react'
import './Content.css';

const AboutContent = () => {
  // Could use some bootstrap styling for a more consistent UI feel
  return (
    <div className="content-card px-4 py-3">
        <p>Campus Connect is dedicated to empowering students in optimising informative events and opportunities that are available to them.</p>
        <h4>Our Mission</h4>
        <ul>
            <li>Provide an all-in-one hub for university-related events</li>
            <li>Help bridge the gap between education and real-world experience</li>
        </ul>
        <p>Campus Connect presents CS-Space, a central hub to manage university-related events for students undertaking degrees related to Computer Science and Software Engineering. With information about university events (i.e. student organisations and associations, campus community, etc.) and available internships for technology and engineering students, CS-Space is the perfect platform to access and organise these events!</p>
    </div>
  )
}

export default AboutContent