const urlUsers = 'https://squad22-hackathon.herokuapp.com/users';
const urlFullstack = 'https://squad22-hackathon.herokuapp.com/fullstacks';
const urlUX = 'https://squad22-hackathon.herokuapp.com/ux';
const urlQA = 'https://squad22-hackathon.herokuapp.com/qa';

// selectPlan('Fullstacks');
selectPlan('UX');
// selectPlan('QA');

function selectPlan(name){
    switch(name){
        case 'QA':
            getUserAndCourses(urlQA, name);
            break;
        case 'UX':
            getUserAndCourses(urlUX, name);
            break;
        default:
            getUserAndCourses(urlFullstack, name);
    }
}

async function getUserAndCourses(url, name){
    try{
        const userRes = await fetch(urlUsers);
        const users = userRes.json();

        const courseRes = await fetch(url);
        const courses = await courseRes.json();
        Promise.all([users, courses]).then(values => compareCourses(values, name));
    } catch (err) {
        console.log(err)
    }
}

function getUser(promiseValue){
    const users = promiseValue[0];
    const currentId = getCurrentUserId();
    const currentUser = users.find(user => user._id === currentId);
    return currentUser;
}

function getCurrentUserId(){
    const preIdLength = location.pathname.indexOf('/', 1);
    const idStart = preIdLength + 1;
    const currentId = location.pathname.substring(idStart);
    return currentId;
}

function compareCourses(promiseValue, name){
    const user = getUser(promiseValue)
    const courses = promiseValue[1];
    let filteredCourses = [];
    if (name === 'Fullstacks'){
        filteredCourses = getCoursesIdList(courses).filter(course => {
            switch(name){
                case 'QA':
                    return user.cursosQa.includes(course);
                case 'UX':
                    return user.Ux.includes(course);
                default:
                    return user.cursosFullstacks.includes(course);
            }
        })
    }
    return findPercentage(courses.length, filteredCourses.length);
}

function getCoursesIdList(courses){
    const coursesId = courses.map(course => {
        return course._id;
    });
    return coursesId;
}

function findPercentage(total, amount){
    let percentage = ((amount / total)*100).toFixed(2);
    console.log('porcentagem', percentage)
}



