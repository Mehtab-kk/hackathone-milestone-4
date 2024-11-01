"use strict";
const form = document.getElementById('resume-form');
const resumedisplayelement = document.getElementById('resume-display');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    const resumeHTML = `<h2><b>Dynamic Resume Builder</b></h2>
    <h3><b>Personal Information</b></h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>phone:</b>${phone}</p>

    <h3>Education</h3
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>skills</h3>
    <p>${skills}</p>;`;
    if (resumedisplayelement) {
        resumedisplayelement.innerHTML = resumeHTML;
    }
    else {
        console.error('The Resume Display element is missing');
    }
});
