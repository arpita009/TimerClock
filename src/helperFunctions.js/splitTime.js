const splitTime =(allSecs) =>{
    const days= Math.floor(allSecs/86400)
    const hours= Math.floor((allSecs % 86400)/3600)
    const minutes= Math.floor((allSecs % 86400 % 3600)/60)
    const seconds= ((allSecs % 86400) % 3600)  % 60
    console.log('allSecs', allSecs)
    console.log('print', `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`) 
    return `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
    // console.log('print', `${days} days ${hours} hours `) 
}
export default splitTime
