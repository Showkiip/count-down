const endDate = "30 August 2023 10:00 PM"

document.getElementById("end-date").innerText = endDate
const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000

    if (diff < 0) return;
    // convert into days
    console.log(Math.floor(diff / 3600 / 24));
    inputs[0].value = Math.floor(diff / 3600 / 24) // math.floor is convert into acutual number
    // calculate hours
    inputs[1].value = Math.floor(diff / 3600) % 24
    //  calculate minutes
    inputs[2].value = Math.floor(diff / 60) % 60
    //  calculate seconds
    inputs[3].value = Math.floor(diff) % 60

}
//initial call
clock()
setInterval(() => {
    clock();
},
    1000);

/**
 * 1 day = 24hours
 * 1hr=60 mins
 * 60min = 3600 sec
 */