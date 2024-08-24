import './Card.css';
import React from 'react';

// Sample user data
const userData = [
  {
    name: "Dhinesh R",
    city: "Kallakurichi",
    roll: "Software Developer",
    skill: ["UI / UX", "HTML", "CSS", "JavaScript", "React", "SQL"],
    online: true,
  },
  {
    name: "Sasikumar B",
    city: "selam",
    roll: "Software Developer",
    skill: ["UI / UX", "HTML", "CSS", "JavaScript", "React", "SQL"],
    online: false,
  },
  {
    name: "Prathap v",
    city: "selam",
    roll: "Software Developer",
    skill: ["UI / UX", "HTML", "CSS", "JavaScript", "React", "SQL"],
    online: true,
  },
];

// User component
const User = (props) => {
  return (
    <div className="contain">
      <div>
        <span className={props.online ? "pro online" : "pro offline"}>
          {props.online ? "ONLINE" : "OFFLINE"}
        </span>
        <img src="src/images.png" alt="User Avatar" className='img' /> {/* Ensure path is correct */}
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.roll}</p>
        <div className='button'>
          <button className='primary'>Message</button>
          <button className='primary outline'>Following</button>
        </div>
      </div>
      <div className='skill'>
        <h4>Skill</h4>
        <ul>
          {props.skill.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Card component
function Card() {
  return (
    <>
      {userData.map((user, index) => (
        <User
          key={index}
          name={user.name}
          city={user.city}
          roll={user.roll}
          skill={user.skill}
          online={user.online}
        />
      ))}
    </>
  );
}

export default Card;
