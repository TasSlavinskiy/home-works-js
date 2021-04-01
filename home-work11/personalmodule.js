
    const date = new Date()
    
    const morning = 'morning'
    const day = 'day'
    const evening = 'evening'
    const night = 'night'

    async function biuldBody(currentTime, timeOfDay, username) {
        return await '<div class="wrapper">' + 
        '<span>Date of request: ' + currentTime + '</span>' + 
        '<span>Good ' + timeOfDay + ', ' + username + '</span>' + '</div>'
    }

    async function wellcomeUser(user) {
        let body;
        console.log(date.getHours())
        switch (true) {
            case (date.getHours() > 5 && date.getHours() < 11):
                body = await biuldBody(date, morning, user)
                break;
            case (date.getHours() > 11 && date.getHours() < 17):
                body = await biuldBody(date, day, user)
                break;
            case (date.getHours() > 17 && date.getHours() < 23):
                body = await biuldBody(date, evening, user)
                break;
            default:
                body = await biuldBody(date, night, user)
                break;
        }
        return body;
    }

    module.exports = {wellcomeUser}