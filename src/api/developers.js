
export const getDeveloperBios = () => {
    return (
        fetch('https://tech-services-1000201953.uc.r.appspot.com/developers')
        .then(res=>res.json())                
    )
}