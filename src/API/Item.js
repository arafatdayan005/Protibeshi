export const postItem = (data) => {
    fetch('http://localhost:5000/items', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(d => console.log(d))
}

export const getAllItems = async () => {
    const res = await fetch('http://localhost:5000/items')
    return await res.json()
}