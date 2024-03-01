let toggleSwitch = document.querySelector(".toggle");
let cb = document.getElementById('cbs');
let cbLabel = document.getElementById('cbsLabel');
let addBtn = document.getElementById('addBtn');
let closeBtn = document.getElementById('closeBtn');
addBtn.style.display = "none";

let pop = document.querySelector('.popup');
pop.style.display = "none";

let j = 5;


let jobOpenings = {
    "1": {
      "role": "Front-End Developer",
      "company": "TechInnovate",
      "companyDescription": "TechInnovate is a leading software development company that specializes in creating innovative web solutions for global clients. With a focus on cutting-edge technology and user-centered design, we empower businesses to achieve their digital transformation goals.",
      "location": "Remote",
      "type": "Full-time",
      "requirements": [
        "Proficiency in HTML, CSS, JavaScript, and React.js.",
        "Experience with responsive and adaptive design.",
        "Understanding of SEO principles.",
        "Ability to collaborate with cross-functional teams to deliver high-quality products.",
        "Minimum of 2 years of professional front-end development experience."
      ]
    },
    "2": {
      "role": "Data Scientist",
      "company": "DataWise",
      "companyDescription": "DataWise is a fast-growing startup that leverages data analytics and machine learning to provide actionable insights for businesses across various industries. Our mission is to make data-driven decision-making accessible to companies of all sizes.",
      "location": "San Francisco, CA or Remote",
      "type": "Full-time",
      "requirements": [
        "Strong knowledge of statistical analysis, machine learning algorithms, and data modeling techniques.",
        "Proficiency in Python and SQL.",
        "Experience with data visualization tools like Tableau or Power BI.",
        "Excellent problem-solving skills and ability to work in fast-paced environments.",
        "Master’s degree in Data Science, Statistics, Computer Science, or a related field.",
        "At least 3 years of experience in a data science role."
      ]
    },
    "3": {
      "role": "Cybersecurity Analyst",
      "company": "SecureNet",
      "companyDescription": "SecureNet is an industry leader in cybersecurity services, providing top-tier solutions to protect businesses from cyber threats. Our team of experts uses advanced technology and proactive strategies to ensure our clients' digital assets are secure.",
      "location": "New York, NY",
      "type": "Full-time",
      "requirements": [
        "Deep understanding of cybersecurity principles, frameworks, and standards such as ISO/IEC 27001, NIST.",
        "Experience with threat detection, incident response, and security audits.",
        "Proficiency in using security tools and technologies.",
        "Strong analytical skills and attention to detail.",
        "Bachelor’s degree in Information Technology, Cybersecurity, or a related field.",
        "Minimum of 2 years of experience in cybersecurity."
      ]
    },
    "4": {
      "role": "UX/UI Designer",
      "company": "CreativeSolutions",
      "companyDescription": "CreativeSolutions is a digital agency known for its exceptional web and mobile app designs. We combine creativity with technology to deliver engaging user experiences that drive business success.",
      "location": "Remote",
      "type": "Full-time",
      "requirements": [
        "Strong portfolio showcasing high-quality UX/UI design skills.",
        "Proficiency in design tools such as Adobe XD, Sketch, or Figma.",
        "Understanding of user-centered design methodologies.",
        "Ability to work closely with developers and product managers to implement designs.",
        "Excellent communication and teamwork skills.",
        "Bachelor’s degree in Design, Computer Science, or a related field.",
        "At least 2 years of UX/UI design experience."
      ]
    }
  }

toggleSwitch.addEventListener('click', () => {
    if(cb.checked == true) {
        cb.checked = false;
        cbLabel.innerHTML = "Apply";
        addBtn.style.display = "none";

        document.getElementById('popup-title').setAttribute('disabled', true);
        document.getElementById('jobCompany').setAttribute('disabled', true);
        document.getElementById('jobLocation').setAttribute('disabled', true);
        document.getElementById('jobDesc').setAttribute('disabled', true);
        document.getElementById('jobType').setAttribute('disabled', true);

    } else {
        cb.checked = true;
        cbLabel.innerHTML = "Hire";
        addBtn.style.display = "block";
        document.getElementById('popup-title').attributes.removeNamedItem('disabled');
        document.getElementById('jobCompany').attributes.removeNamedItem('disabled');
        document.getElementById('jobLocation').attributes.removeNamedItem('disabled');
        document.getElementById('jobType').attributes.removeNamedItem('disabled');
        document.getElementById('jobDesc').attributes.removeNamedItem('disabled');
    };
});

let count = 0;


addBtn.addEventListener('click', () => {
    document.querySelector('.jobs').innerHTML += `<li>
        <div id="jobTitle-${j}" onclick="showDetails(this.id);" class="unselectable">New job ${count+1}<br>
        <span id="company-${j}" class="unselectable">Company</span>
        </div>
    </li>`;
    jobOpenings[j] = {
        "role": "New job " + (count+1),
        "company": "Company",
        "companyDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam beatae dolorum reiciendis quia voluptatum, sit labore temporibus ipsa ex mollitia possimus laudantium praesentium nobis tempora veritatis qui molestias optio itaque!",
        "location": "",
        "type": "",
        "requirements": []
    }
    count++;
    j++;
});


function showDetails(id) {
    let arr = id.split('-');
    let jobN = arr[1];
    let jobTitle = document.getElementById('popup-title');
    let company = document.getElementById('jobCompany');
    let description = document.getElementById('jobDesc');
    let location = document.getElementById('jobLocation');
    let type = document.getElementById('jobType');
    let jobReq = document.getElementById('jobRequirements');
    jobTitle.value = jobOpenings[jobN].role;
    company.value =  "at " + jobOpenings[jobN].company;
    description.value = jobOpenings[jobN].companyDescription;
    location.value = "Location: " + jobOpenings[jobN].location;
    type.value = jobOpenings[jobN].type;
    jobReq.innerHTML = "";
    if (jobOpenings[jobN].requirements.length == 0) {
        jobReq.innerHTML = "No requirements";
    } else {
        for (i in jobOpenings[jobN].requirements) {
            jobReq.innerHTML += "<li>" + jobOpenings[jobN].requirements[i] + "</li>";
            console.log('done');
        }
    }
    pop.style.display = "block";

}

function hideDetails() {
    pop.style.display = "none";
}
