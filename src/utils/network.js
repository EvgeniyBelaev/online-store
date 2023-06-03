export const getApiResurse = async(url) => {
    try {
        const res = await fetch(url)

        if(!res.ok) {
            console.log('Coud not fetch', res.status)
        }

        return await res.json()



    } catch (error) {
        console.error('Could not fetch.', error.message)
        return false
    }
}