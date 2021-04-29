const postData = async (url, data) => { // пост-функция для получения инфы из формы
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data 
    });

    return await res.json();
};

async function getResource(url) { // гет-функция для вывода карточек
    const res = await fetch(url);

    if(!res.ok) {
        throw new Error(`could not load ${url}, status: ${res.status}`)
    }

    return await res.json();
};

export {postData};
export {getResource};